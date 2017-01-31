var Web3 = require('web3')

// check if web3 is already supplied by Mist or another provider
if (typeof web3 !== 'undefined') {
  var web3 = new Web3(web3.currentProvider)
} else {
  var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
}

export default web3
