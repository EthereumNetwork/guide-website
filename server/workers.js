const web3 = require('./web3.js')
let lastBlockNumber = 0

module.exports = function (io) {
  io.on('connection', function (socket) {
    console.log('user', socket.id, 'connected')
  })

  setInterval(() => {
    web3.eth.getBlock('latest', true, (error, txData) => {
      if (error) {
        console.error(error)
      } else if (txData.number === lastBlockNumber) {
      } else {
        lastBlockNumber = txData.number
        io.emit('latestTransactions', txData)
        for (var i = 0; i < txData.transactions.length; i++) {
          io.emit(txData.transactions[i].from, txData.transactions[i])
          io.emit(txData.transactions[i].to, txData.transactions[i])
        }
      }
    })
  }, 2000)
}
