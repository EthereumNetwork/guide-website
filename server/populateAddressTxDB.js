require('dotenv').config()
const db = require('./db.js')
const web3 = require('./web3.js')

let lastBlockChecked = null

function getCurrentBlock (lastBlockChecked, latestBlock) {
  web3.eth.getBlock(lastBlockChecked, true, (error, blockData) => {
    console.log('block', blockData.number, 'has', blockData.transactions.length, 'transactions')
    for (var i = 0; i < blockData.transactions.length; i++) {
      console.log('trying', blockData.transactions[i].to)
      db.Address.findOneAndUpdate(
        { address: blockData.transactions[i].to },
        {$push: {'transactions': {
          hash: blockData.transactions[i].hash,
          to: blockData.transactions[i].to,
          from: blockData.transactions[i].from,
          blockNumber: blockData.transactions[i].blockNumber,
          value: blockData.transactions[i].value
        }}},
        {upsert: true, new: true},
        function (error, model) { error ? console.error('error', error) : console.log('writting transactions', i, 'of', blockData.number) }
      )
    }
  })
}
async function populateDB () {
  await db.Address.findOne({ address: 'lastBlockChecked' })
  .then((data) => {
    lastBlockChecked = data ? data.transactions[0].blockNumber - 1 : 3000000
  })

  let latestBlock = await Math.min(web3.eth.blockNumber, 3000010)

  for (lastBlockChecked; lastBlockChecked < latestBlock; lastBlockChecked++) {
    console.log('getting block ', lastBlockChecked, 'of', latestBlock)
    getCurrentBlock(lastBlockChecked, latestBlock)
  }
  db.connection.close()
}

populateDB()
// db.Address.findOne({ address: 'lastBlockChecked' })
// .then((data, err) => {
//   if (data) {
//     lastBlockChecked = data.transactions[0].blockNumber - 1
//     console.log('continuing with block #', lastBlockChecked)
//   } else {
//     var address1 = new db.Address({ address: 'lastBlockChecked', transactions: [{ blockNumber: 1 }] })
//     address1.save((err, AdrObj) => { err ? console.error(err) : console.log('initialized with: ', AdrObj.transactions[0]) })
//   }
// })
// .then(() => web3.eth.getBlock(lastBlockChecked, true))
// .then((blockData, error) => {
//   error ? console.error('error') : console.log(blockData)
// })
// // .then((test1, test2, test3, test4) => console.log(test1, test2, test3, test4))
// .catch(reason => console.error(reason))
