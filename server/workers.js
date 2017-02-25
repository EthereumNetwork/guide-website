const web3 = require('./web3.js')
const ethUtil = require('ethereumjs-util')
let lastBlockNumber = 0

module.exports = function (io) {
  io.on('connection', function (socket) {
    console.log('user', socket.id, 'connected')
  })

  setInterval(() => {
    web3.eth.getBlock('latest', true, (error, blockData) => {
      if (error) {
        console.error(error)
      } else if (blockData.number === lastBlockNumber) {
      } else {
        lastBlockNumber = blockData.number
        for (let i = 0; i < blockData.transactions.length; i++) {
          blockData.transactions[i].from = ethUtil.toChecksumAddress(blockData.transactions[i].from || '')
          blockData.transactions[i].to = ethUtil.toChecksumAddress(blockData.transactions[i].to || '')
          io.emit(blockData.transactions[i].from, blockData.transactions[i])
          io.emit(blockData.transactions[i].to, blockData.transactions[i])
        }
        io.emit('latestTransactions', blockData)
      }
    })
  }, 1000)
}
