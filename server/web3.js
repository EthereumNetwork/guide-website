var Web3 = require('web3')

// check if web3 is already supplied by Mist or another provider
if (typeof web3 !== 'undefined') {
  var web3 = new Web3(web3.currentProvider)
} else {
  var web3 = new Web3(new Web3.providers.HttpProvider(process.env.ethNode))
}
console.log('current block number is: ', web3.eth.blockNumber)

module.exports = web3
