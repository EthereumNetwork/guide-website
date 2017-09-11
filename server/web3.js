const Web3 = require('web3')

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  web3 = new Web3(new Web3.providers.HttpProvider(process.env.ethNode));
}

web3.eth.getBlockNumber((error, result) => {
  if(!error)
      console.log('Ethereum node connection established, current block number is:', result)
  else
      console.error(error)
})

module.exports = web3
