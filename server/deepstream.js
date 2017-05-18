var deepstream = require('deepstream.io-client-js')
const client = deepstream(process.env.deepstreamHub)
const web3 = require('./web3.js')
const ethUtil = require('ethereumjs-util')

client.login({}, function (success, errorEvent, errorMsg) {
  if (success) {
    console.log('deepstream connection to ', client._url)
  } else {
    console.log('deepstream login failed: ' + errorMsg)
  }
})

client.on('error', (error, event, topic) => {
  console.log(error, event, topic)
})

var record = client.record.getRecord('ethnet-record')

var pendingTransactionsFilter = web3.eth.filter('pending')
pendingTransactionsFilter.watch(function (error, txHash) {
  if (error) {
    console.error(error)
  } else {
    web3.eth.getTransaction(txHash, (error, txData) => {
      if (txData && !error) {
        let txToSend = {
          to: ethUtil.toChecksumAddress(txData.to || ''),
          from: ethUtil.toChecksumAddress(txData.from || ''),
          hash: txData.hash || '',
          value: txData.value || ''
        }
        client.event.emit('pending/all', txToSend)
        client.event.emit('pending/' + txToSend.to, txToSend)
        client.event.emit('pending/' + txToSend.from, txToSend)
      }
    })
  }
})

setInterval(() => {
  web3.eth.getBlock('latest', false, (error, blockData) => {
    if (error) {
      console.error(error)
    } else {
      record.set('latest-transactions', blockData)
    }
  })
}, 2000)
