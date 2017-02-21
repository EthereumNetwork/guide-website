const web3 = require('./web3.js')
let latestTransactions = []

module.exports = function (io) {
  io.on('connection', function (socket) {
    console.log('user', socket.id, 'connected')
  })

  setInterval(() => {
    web3.eth.getBlock('latest', true, (error, txData) => {
      error ? console.error(error) : io.emit('latestTransactions', txData)
    })
  }, 3000)
}
