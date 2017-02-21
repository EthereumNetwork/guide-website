const web3 = require('./web3.js')

module.exports = function (io) {
  io.on('connection', function (socket) {
    console.log('user', socket.id, 'connected')
  })

  setInterval(() => {
    console.log('broadcasting')
    io.emit('latestTransactions', { data: (new Date()) / 1 })
  }, 3000)
}
