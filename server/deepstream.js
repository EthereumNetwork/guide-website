var deepstream = require('deepstream.io-client-js')
const client = deepstream('localhost:6020').login()
var record = client.record.getRecord('ethnet-record')
const web3 = require('./web3.js')
const ethUtil = require('ethereumjs-util')
let currentBlock = {}
let pendingTransactions = []

var filter = web3.eth.filter('pending')
filter.watch(function (error, txHash) {
  if (error) {
    console.error(error)
  } else {
    web3.eth.getTransaction(txHash, (error, txData) => {
      if (error) {
        console.error(error)
      } else {
        let txToSend = {
          to: ethUtil.toChecksumAddress(txData.to || ''),
          from: ethUtil.toChecksumAddress(txData.from || ''),
          hash: txData.hash || '',
          value: txData.value || ''
        }
        client.event.emit('pending/all', txToSend)
        // client.event.listen('^pending/.*', (eventName, isSubscribed, response) => {
        //   console.log(eventName) // 'news/all' or pending/<tx>
        //   if (isSubscribed) {
        //     if (eventName === 'pending/all') {
        //       // response.accept()
        //       client.event.emit(eventName, txToSend)
        //       // start publishing data via `client.event.emit(eventName, /* data */)`
        //     } else {
        //       response.reject() // let deepstream ask another provider
        //     }
        //   } else {
        //     // stop publishing data
        //   }
        // })
      }
    })
  }
})

module.exports = function () {
  console.log('deepstream connection to ', client._url)

  setInterval(() => {
    web3.eth.getBlock('latest', true, (error, blockData) => {
      if (error) {
        console.error(error)
      } else {
        currentBlock = blockData
        console.log('last', blockData.transactions.length, blockData.number, Object.keys(pendingTransactions).length)
        for (let i = 0; i < currentBlock.transactions.length; i++) {
          currentBlock.transactions[i].from = ethUtil.toChecksumAddress(currentBlock.transactions[i].from || '')
          currentBlock.transactions[i].to = ethUtil.toChecksumAddress(currentBlock.transactions[i].to || '')
        }
        record.set('latest-transactions', blockData)
      }
    })
  }, 2000)
}
