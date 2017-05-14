var deepstream = require('deepstream.io-client-js')
const client = deepstream(process.env.deepstreamHub).login()
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
      if (error || !txData) {
        console.error('error receiving pending TXs', error, txData)
      } else {
        let txToSend = {
          to: ethUtil.toChecksumAddress(txData.to || ''),
          from: ethUtil.toChecksumAddress(txData.from || ''),
          hash: txData.hash || '',
          value: txData.value || ''
        }
        client.event.emit('pending/all', txToSend)
        client.event.emit('pending/' + txToSend.to, txToSend)
        client.event.emit('pending/' + txToSend.from, txToSend)
        // client.event.emit('pending/0x95AaD90B17ef088E4f79E79e899f85FA72b2Db53', txToSend)
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
        for (let i = 0; i < currentBlock.transactions.length; i++) {
          currentBlock.transactions[i].from = ethUtil.toChecksumAddress(currentBlock.transactions[i].from || '')
          currentBlock.transactions[i].to = ethUtil.toChecksumAddress(currentBlock.transactions[i].to || '')
        }
        record.set('latest-transactions', blockData)
      }
    })
  }, 2000)
}
