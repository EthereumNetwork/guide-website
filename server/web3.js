const Web3 = require('web3')

const web3 = new Web3(new Web3.providers.HttpProvider(process.env.ethNode))
web3 ? console.log('current block number is: ', web3.eth.blockNumber) : console.log('web3 connection failed')

module.exports = web3
