<template>
<v-container fluid>
  <p>Ethereum is still a young project. When you consult the resources on our site, please keep in mind that most of it is designed to help developers. In the future, we plan to add more information and step-by-step guides to help less technical users to understand Ethereum.</p>
  <v-expansion-panel>
    <h2>What is Ethereum?</h2>
    <p>The Ethereum project aims to do for human collaboration what the internet did for information. It is part of a world computer, where everyone can publish and access content, write and use applications, send value and make agreements.</p>
    <p>This is done through so called smart contracts and decentralized applications (dapps), open, tamper proof, opt-in, self executing applications that run exactly as programmed and all share one common, append-only "truth", the Ethereum blockchain, while ensuring that there is no downtime, censorship, fraud or third party interference.<br>This decentralized environment allows all people, programs, IoT devices, markets, registries and other things to collaborate without the need for explicit trust. That's why people also call it the trust machine, it is not just an upgrade to our databases and Internet, but rather a tool to re-architect social, financial and political systems.</p>
    <p>While that all just sounds a lot like a long list of awesome buzzwords, it is very actively developed by tens of thousand of developers around the world and happening right now. Below you'll find some links to instruction guides and videos that will help you get started. Once you're a bit more familiar with Ethereum, dive in deeper and read the other sections</p>
    <v-expansion-panel-content class="grey darken-2 white--text">
      <div slot="header">Links</div>
      <v-card>
        <v-card-text class="grey lighten-3 black--text">
          <a href="http://blockgeeks.com/guides/what-is-ethereum/" target="_blank" class="learnLink">A beginner's guide</a> to Ethereum<br>
          <a href="http://blockgeeks.com/guides/what-is-ethereum/" target="_blank" class="learnLink">What is Ethereum?</a> A Step-by-Step Beginners Guide<br>
          <a href="https://youtu.be/A1Vbrxkqjwc" target="_blank" class="learnLink">Video "New Kids on the Blockchain"</a> What can you use it for?<br>
          <a href="https://youtu.be/j23HnORQXvs" target="_blank" class="learnLink">Video "Ethereum, the world computer"</a> How the internet will work in the future<br>
          <a href="https://youtu.be/66SaEDzlmP4" target="_blank" class="learnLink">Video "Ethereum in 25 minutes"</a> by Vitalik Buterin<br>
          <a href="https://www.youtube.com/channel/UCNOfzGXD_C9YMYmnefmPH0g/videos" target="_blank" class="learnLink">Videos from Ethereum DevCon 2</a> Sep. 2016 in Shanghai<br>
          <a href="https://medium.com/ethlance/using-the-decentralized-web-3936dc5daac1" target="_blank" class="learnLink">Using the Decentralized Web</a> Interact with decentralized applications without understanding Ethereum<br>
          <a href="https://steemit.com/ethereum/@cryptomancer/ethereum-for-dummies-introducing-the-next-great-technological-leap-forward" target="_blank" class="learnLink">Ethereum for Dummies</a> introducing the next great technological leap forward<br>
          <a href="https://www.youtube.com/watch?v=U_LK0t_qaPo" target="_blank" class="learnLink">Ethereum for Dummies 2</a> a less up-to-date version by Dr. Gavin Wood, still relevant<br>
          <a href="https://media.consensys.net/introduction-to-ethereum-the-internets-government-35bdd25f572a" target="_blank" class="learnLink">Introduction to Ethereum</a> as the Internet’s Government<br>
          <a href="https://blog.coinbase.com/app-coins-and-the-dawn-of-the-decentralized-business-model-8b8c951e734f" target="_blank" class="learnLink">Blockchain Tokens</a> and the dawn of the Decentralized Business Model<br>
          <a href="https://bitsonblocks.net/2016/10/02/a-gentle-introduction-to-ethereum/" target="_blank" class="learnLink">A gentle introduction to Ethereum</a><br>
          <a href="https://bitsonblocks.net/2016/10/02/a-gentle-introduction-to-ethereum/" target="_blank" class="learnLink">Blockchain stack #1</a> Installing Ethereum Geth and your first smart contract<br>
          <a href="https://www.meetup.com/topics/ethereum/" target="_blank" class="learnLink">Ethereum meetups around the world</a> Every meetup is welcoming and happy to help, as you can read in <a href="https://blog.ethereum.network/latest" target="_blank" class="learnLink">our blog</a><br>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
    <br>
    <h2>Wallets and Browsers</h2>
    <p>Wallets and browsers are your windows to the Ethereum world. The former works just like your normal wallet, i.e. it allows you to store, add and spend money via different currencies and payment systems. It contains one or more Ethereum addresses (long hexadecimal strings that uniquely identifies them) and can receive and send ether (the underlying Ethereum currency) or other tokens running on top of Ethereum. Before taking the plunge and spending any money on ether, please read the information provided by the first link in the security section.</p>
    <p>As we said already, Ethereum is much more than just a crypto-currency blockchain. The main porpuse is hosting and running smart contracts, storing distributed data (swarm), decentralized communication (whisper) and much more. This begs the question: “How can I access all these cool features?”. This is where browser plugins such as Metamask and Ethereum browsers like Mist come in.</p>
    <v-expansion-panel-content class="grey darken-2 white--text">
      <div slot="header">Links</div>
      <v-card>
        <v-card-text class="grey lighten-3 black--text">
          <a href="https://github.com/ethereum/mist/releases" target="_blank" class="learnLink">Mist</a> Official Ethereum browser and wallet<br>
          <a href="https://metamask.io/" target="_blank" class="learnLink">MetaMask</a> Chrome plugin to access Ethereum dapps<br>
          <a href="https://www.myetherwallet.com/" target="_blank" class="learnLink">MyEtherWallet</a> client-side Ethereum online wallet and smart contract execution<br>
          <a href="https://github.com/ethcore/parity/wiki/Parity-Wallet" target="_blank" class="learnLink">Parity Wallet</a> Parity also includes a bundled wallet application<br>
          <a href="https://jaxx.io/" target="_blank" class="learnLink">Jaxx</a> Wallet for multiple currencieson on multiple platforms<br>
          <a href="https://status.im/" target="_blank" class="learnLink">Status</a> Ethereum browser/messenger/wallet for mobile phones<br>
          <a href="https://www.inzhoop.com/" target="_blank" class="learnLink">LETH</a> A mobile Ethereum wallet with chat function<br>
          <a href="https://token.im/" target="_blank" class="learnLink">imToken</a> A smart digital wallet for mobile phones<br>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
    <br>
    <h2>Developer Resources and Tools</h2>
    <p>Now that you have a wallet and have probably installed Mist and/or Metamask, it’s time roll up your sleeves and get your hands dirty. There are tons of frameworks, tools and resources that you will help you create your very own first Ðapp.</p>
    <p>Ethereum nodes each run an EVM (Ethereum Virtual Machine). This is where the smart contracts run. To run code on the EVM, you will want to pick a language to write them in. As Solidity can be considered the reference implementation in terms of smart-contract programming languages, it is a good place to start. However, don’t stop there: other smart contract languages exist such as Serpent (a smart contract programming language for pythonistas).</p>
    <p>Once you have gotten familiar with a language and maybe even compiled your first smart contract using Solc, you will want to look at Ðapp development frameworks such as Truffle, Embark or Dapple.</p>
    <p>Below you'll find some links to instruction guides and videos that will help you on your path to becoming a Ðapp developer.</p>
    <v-expansion-panel-content class="grey darken-2 white--text">
      <div slot="header">Links</div>
      <v-card>
        <v-card-text class="grey lighten-3 black--text">
          <a href="https://ethereum.org/" target="_blank" class="learnLink">Ethereum Website</a> Browser and first tutorials from the Ethereum Foundation<br>
          <a href="https://github.com/ethereum/wiki/wiki/White-Paper" target="_blank" class="learnLink">White Paper</a> The formal proposal of Ethereum<br>
          <a href="https://github.com/ethereum/yellowpaper" target="_blank" class="learnLink">Yellow Paper</a> The formal specification of the Ethereum protocol<br>
          <a href="https://solidity.readthedocs.io/en/latest/" target="_blank" class="learnLink">Solidity Docs</a> learn the contract-oriented, high-level language for the Ethereum Virtual Machine<br>
          <a href="http://www.ethdocs.org/en/latest/index.html" target="_blank" class="learnLink">Homestead Documentation</a> the current version of Ethereum<br>
          <a href="http://ethereum.stackexchange.com" target="_blank" class="learnLink">Ethereum StackExchange</a> get answers for all your Ethereum questions<br>
          <a href="https://github.com/ethereum/web3.js" target="_blank" class="learnLink">Ethereum JavaScript API</a><br>
          <a href="http://truffleframework.com/" target="_blank" class="learnLink">Truffe</a> Development framework for Ethereum<br>
          <a href="https://github.com/iurimatias/embark-framework" target="_blank" class="learnLink">Embark</a> Framework to develop and deploy DApps<br>
          <a href="http://dapple.readthedocs.io/en/master/" target="_blank" class="learnLink">Dapple</a> Development framework for Ethereum<br>
          <a href="https://github.com/nexusdev/projectle" target="_blank" class="learnLink">Projectle</a> EVM contract system developer multi-tool<br>
          <a href="https://github.com/blockapps/bloc" target="_blank" class="learnLink">BlockApps</a> REST API and Javascript and Mobile SDK to Ethereum blockchains.<br>
          <a href="https://infura.io/" target="_blank" class="learnLink">Infura</a> APIs to Ethereum and IPFS nodes<br>
          <a href="https://ethereum.github.io/browser-solidity/" target="_blank" class="learnLink">Browser Solidity</a> Solidity Realtime compiler and IDE<br>
          <a href="https://github.com/ethereum/viper" target="_blank" class="learnLink">Viper</a> Experimental EVM programming language with several security features<br>
          <a href="https://github.com/SilentCicero/wafr" target="_blank" class="learnLink">Wafr</a> A super simple Solidity test harness for Ethereum smart-contracts.<br>
          <a href="https://www.reddit.com/r/ethereum/comments/5q4at2/psa_add_this_git_webhook_to_your_solidity/" target="_blank" class="learnLink">git webhook to your solidity codebases</a> for the Ethereum Function Signature Registry<br>
          <a href="https://live.ether.camp/" target="_blank" class="learnLink">Ether Camp</a> Blockchain explorer<br>
          <a href="https://etherscan.io/" target="_blank" class="learnLink">Etherscan</a> Blockchain explorer<br>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
    <br>
    <h2>Clients and Implementations</h2>
    <p>some text about Clients and Implementations</p>
    <v-expansion-panel-content class="grey darken-2 white--text">
      <div slot="header">Links</div>
      <v-card>
        <v-card-text class="grey lighten-3 black--text">
          <a href="https://geth.ethereum.org/" target="_blank" class="learnLink">Geth Ethereum Client</a> Ethereum client developed in Go<br>
          <a href="https://ethcore.io/parity.html" target="_blank" class="learnLink">Parity Ethereum Client</a> Ethereum client developed in Rust<br>
          <a href="http://ethereumjs.github.io/" target="_blank" class="learnLink">ethereumJS</a> Javascript gateway to Ethereum<br>
          <a href="https://github.com/ethereum/wiki/wiki/JavaScript-API" target="_blank" class="learnLink">Web3</a> Javascript API to interact with Ethereum<br>
          <a href="https://github.com/Nethereum/Nethereum" target="_blank" class="learnLink">Nethereum</a> .Net integration library for Ethereum<br>
          <a href="https://github.com/web3j/web3j" target="_blank" class="learnLink">web3j</a> Java and Android Ethereum library<br>
          <a href="https://github.com/ethereum/pyethereum" target="_blank" class="learnLink">pyethereum</a> Python core library of the Ethereum project<br>
          <a href="http://machinomy.com/" target="_blank" class="learnLink">Machinomy</a> JS library for micropayments in Ether over HTTP<br>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
    <br>
    <h2>Security</h2>
    <p>some text about Security</p>
    <v-expansion-panel-content class="grey darken-2 white--text">
      <div slot="header">Links for online and wallet security</div>
      <v-card>
        <v-card-text class="grey lighten-3 black--text">
          <a href="https://medium.com/@pipermerriam/my-guide-to-solid-digital-security-fb76cb19c536#.cliexcgpg" target="_blank" class="learnLink">Guide to securing your digital life</a> necessary when dealing with cryptocurrencies<br>
          <a href="https://www.ledgerwallet.com/products/12-ledger-nano-s" target="_blank" class="learnLink">Ledger Nano</a> Hardware wallet to store your ether and <a href="https://ledger.groovehq.com/knowledge_base/topics/how-to-secure-your-eth-tokens-augur-rep-dot-dot-dot-with-your-nano-s" target="_blank" class="learnLink">Tokens</a><br>
          <a href="http://doublenegative.com/ethereum-security-and-wallets/" target="_blank" class="learnLink">Wallet Security</a> and how to secure them<br>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
    <v-expansion-panel-content class="grey darken-2 white--text">
      <div slot="header">Links for smart contract security</div>
      <v-card>
        <v-card-text class="grey lighten-3 black--text">
          <a href="https://www.kingoftheether.com/contract-safety-checklist.html" target="_blank" class="learnLink">Contract Safety and Security Checklist</a> by King of the Ether<br>
          <a href="https://github.com/ConsenSys/smart-contract-best-practices" target="_blank" class="learnLink">Smart contract best practices</a> by ConsenSys<br>
          <a href="http://hackingdistributed.com/2016/06/18/analysis-of-the-dao-exploit/" target="_blank" class="learnLink">Analysis of theDAO exploit</a> How a bug caused a theft of $50 million<br>
          <a href="http://vessenes.com/deconstructing-thedao-attack-a-brief-code-tour/" target="_blank" class="learnLink">Deconstructing theDAO Attack</a> The bug that caused the theft<br>
          <a href="https://github.com/raineorshine/solgraph" target="_blank" class="learnLink">Solgraph</a> Visualize Solidity control flow for smart contract security analysis.<br>
          <a href="https://medium.com/zeppelin-blog/zeppelin-v1-0-0-4e593c505345#.bv6yubf7v" target="_blank" class="learnLink">Zeppelin</a> framework to build secure smart contracts in the Solidity language<br>
          <a href="https://ethereum.stackexchange.com/questions/tagged/security" target="_blank" class="learnLink">Stack exhange security tag</a> see what people ask about security<br>
          <a href="https://www.reddit.com/r/ethereum/comments/4uu9fb/formal_verification_for_solidity/?st=irj5anka&sh=c23052c7" target="_blank" class="learnLink">Formal Verification For Solidity</a><br>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
    <br>
    <h2>Guides and Tips:</h2>
    <p>some text about Guides and Tips</p>
    <v-expansion-panel-content class="grey darken-2 white--text">
      <div slot="header">Links</div>
      <v-card>
        <v-card-text class="grey lighten-3 black--text">
          <a href="https://medium.com/@ConsenSys/a-101-noob-intro-to-programming-smart-contracts-on-ethereum-695d15c1dab4#.tcmcvxugj" target="_blank" class="learnLink">101 Noob Intro</a> to Programming Smart Contracts<br>
          <a href="http://blockgeeks.com/guides/smart-contracts-the-blockchain-technology-that-will-replace-lawyers/" target="_blank" class="learnLink">Smart Contracts</a> Beginner’s Guide<br>
          <a href="https://truffle-box.github.io/" target="_blank" class="learnLink">Truffle Box</a>A Set of Truffle + Webpack + React Boilerplates<br>
          <a href="https://medium.com/metamask/developing-ethereum-projects-with-truffle-and-metamask-aa8ad7e363ba" target="_blank" class="learnLink">Developing Ethereum Projects</a> with Truffle and MetaMask<br>
          <a href="https://medium.com/@timothyjcoulter/truffle-tricks-for-ethereum-development-dispelling-8-myths-first-impressions-880f66bf3320" target="_blank" class="learnLink">Truffle Tricks for Ethereum Development</a> Dispelling Myths and First Impressions<br>
          <a href="http://blog.nexusdev.us/dapple-tutorial/" target="_blank" class="learnLink">Creating an Upgradeable Token</a> With Dapple and Dappsys<br>
          <a href="http://blog.nexusdev.us/saving-time-and-sanity-using-the-next-generation-of-dapple-testing-tools/" target="_blank" class="learnLink">Dapple’s Next-Generation Testing Tools</a> Saving Time and Sanity<br>
          <a href="https://www.youtube.com/channel/UCNOfzGXD_C9YMYmnefmPH0g/videos" target="_blank" class="learnLink">Devcon2 videos</a> and <a href="https://ethereumfoundation.org/devcon/?page_id=14" target="_blank" class="learnLink">slides</a><br>
          <a href="https://medium.com/@mvmurthy/ethereum-for-web-developers-890be23d1d0c" target="_blank" class="learnLink">Ethereum for web developers</a> including a Full Stack Hello World Voting Ethereum Dapp Tutorial <a href="https://medium.com/@mvmurthy/full-stack-hello-world-voting-ethereum-dapp-tutorial-part-1-40d2d0d807c2#.q932mbg6o" target="_blank" class="learnLink">part1</a> and <a href="https://medium.com/@mvmurthy/full-stack-hello-world-voting-ethereum-dapp-tutorial-part-2-30b3d335aa1f#.x5pslrvs0" target="_blank" class="learnLink">part2</a><br>
          <a href="http://blockgeeks.com/decentralized-applications-development-net-developers/" target="_blank" class="learnLink">Decentralized applications development</a> for .NET developers using Microsoft Visual Studio<br>
          <a href="https://www.youtube.com/watch?v=2184nCGMxyQ" target="_blank" class="learnLink">Building a DApp and write contracts</a> video by Alex Van de Sande and Christian Reitwiessner<br>
          <a href="https://www.youtube.com/watch?v=9_coM_g7Dbg&list=PLH4m2oS2ratdoHFEkGvwvd7TkeTv4sa7Z" target="_blank" class="learnLink">Building an Ethereum dapp using Solidity</a> video series by Shlomi Zeltsinger<br>
          <a href="https://medium.com/@mvmurthy/ethereum-for-web-developers-890be23d1d0c" target="_blank" class="learnLink">iEx.ec EDCON series</a> 10 blog posts to understand the technology behind the Ethereum decentralized cloud<br>
          <a href="https://blog.ethereum.org/2016/07/12/build-server-less-applications-mist/" target="_blank" class="learnLink">How to build severless applications</a> for Mist<br>
          <a href="http://blockchainers.org/index.php/2016/11/27/ethereum-usecase-claim-and-endorse" target="_blank" class="learnLink"> A generic “Claim and Endorse” Contract</a><br>
          <a href="https://souptacular.gitbooks.io/ethereum-tutorials-and-tips-by-hudson/content/private-chain.html" target="_blank" class="learnLink">Set up a private chain</a> for testing purposes<br>
          <a href="https://medium.com/@ConsenSys/very-deep-dive-on-ethereum-reading-list-f5b1122e5990#.d9mtt32ic" target="_blank" class="learnLink">Ethereum Reading List</a> for more in depth learning<br>
          <a href="https://zupzup.org/smart-contract-solidity/" target="_blank" class="learnLink">Getting Started with Smart Contracts</a> using Solidity<br>
          <a href="https://monax.io/docs/tutorials/solidity/solidity_1_the_five_types_model/" target="_blank" class="learnLink">Solidity series on Eris</a> different blockchain, same smart contract language<br>
          <a href="https://medium.com/@codetractio/try-out-ethereum-using-only-nodejs-and-npm-eabaaaf97c80" target="_blank" class="learnLink">Try out Ethereum</a> using only nodejs and npm<br>

          <a href="http://decypher.tv/series/ethereum-development" target="_blank" class="learnLink">Video Series</a> for Ethereum Ðapp Development (paid)<br>
          <a href="https://academy.b9lab.com/" target="_blank" class="learnLink">Certified Online Course</a> for Ethereum Developer (paid)<br>
          <a href="http://exosphe.re/#blockchain" target="_blank" class="learnLink">8 week immersive program</a> for Blockchain App Dev (paid)<br>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
    <br>
    <h2>News and communities</h2>
    <p>some text about news and communities</p>
    <v-expansion-panel-content class="grey darken-2 white--text">
      <div slot="header">Links</div>
      <v-card>
        <v-card-text class="grey lighten-3 black--text">
          <a href="https://blog.ethereum.org/" target="_blank" class="learnLink">Official Ethereum blog</a> by the Ethereum Foundation<br>
          <a href="https://media.consensys.net/" target="_blank" class="learnLink">ConsenSys Blog</a> Blog of the Ethereum powerhouse <a href="https://consensys.net/" target="_blank" class="learnLink">ConsenSys</a><br>
          <a href="https://www.ethnews.com/" target="_blank" class="learnLink">ETHNews</a> News Website<br>
          <a href="https://cointelegraph.com/" target="_blank" class="learnLink">Cointelegraph</a> News Website<br>
          <a href="http://www.coindesk.com/?s=ethereum#" target="_blank" class="learnLink">Coindesk</a> News Website<br>
          <a href="http://www.weekinethereum.com/" target="_blank" class="learnLink">The week in Ethereum</a> Newsletter by Evan Van Ness<br>
          <a href="https://www.reddit.com/r/ethereum/" target="_blank" class="learnLink">Ethereum subreddit</a> Daily news, development Most news about Ethereum can be found here daily<br>
          <a href="https://www.reddit.com/r/ethtrader/" target="_blank" class="learnLink">Ethtrader subreddit</a> Ether price and trading discussions<br>
          <a href="https://www.reddit.com/r/ethdev/" target="_blank" class="learnLink">EthDev subreddit</a> Discussions about Ethereum development<br>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
    <br>
    <h2>Exchanges</h2>
    <p>Even though there are no borders in the Ethereum world, you would need some ether to use the services and decentralized apps there. Like exchanging into the local currency in a foreign country you're visiting. Exchanges provide a means to move in or out of ether by trading it for fiat money ($, €, ¥, £) or other crypto-currencies.<br>Some of the exchanges directly offer fiat money trades via bank transfers, while others only handle trades between crypto-currencies. And then there are the decentralized ones. You'll need to run an Ethereum client, such as Mist or MetaMask, but they never hold costumer funds and generally have lower fees than the normal ones.<br>Before getting in crypto-currencies, be sure to read the wallet and online security related parts in the section above.</p>
    <v-expansion-panel-content class="grey darken-2 white--text">
      <div slot="header">Links</div>
      <v-card>
        <v-card-text class="grey lighten-3 black--text">
          <a href="https://www.coinbase.com/" target="_blank" class="learnLink">Coinbase</a> Exchange based in the US<br>
          <a href="https://www.kraken.com/" target="_blank" class="learnLink">Kraken</a> Exchange base in the US<br>
          <a href="https://www.bitfinex.com/" target="_blank" class="learnLink">Bitfinex</a> Exchange based in China<br>
          <a href="https://yunbi.com/" target="_blank" class="learnLink">Yunbi</a> Exchange based in China<br>
          <a href="http://www.poloniex.com/" target="_blank" class="learnLink">Poloniex</a> Cryptocurrency only Exchange<br>
          <a href="https://www.bittrex.com/" target="_blank" class="learnLink">Bittrex</a> Cryptocurrency only Exchange<br>
          <a href="https://mkr.market/" target="_blank" class="learnLink">Maker Market</a> Decentralized Cryptocurrency Exchange<br>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
    <br>
    <h2>FAQs</h2>
    <p>Answers to some of the questions you might enconter while getting to know Ethereum. Another good place is the <a href="http://ethereum.stackexchange.com/" target="_blank" class="learnLink">Ethereum StackExchange</a>.</p>
    <v-expansion-panel-content class="grey darken-2 white--text">
      <div slot="header">Where do I start?</div>
      <v-card>
        <v-card-text class="grey lighten-3 black--text">
          <p>The Ethereum network can be very overwhelming, so that is a good question and completely depends what you're looking for. If you are a developer looking into blockchain programming and the creation of decentralized apps, most of the sections here are directed towards you. Let me know if you run into any trouble or out-dated info.<br> As a curious user, on <router-link to="/projects">the projects page</router-link> use any decentralized app that you find interesting. Then complain to the developers about any user experience difficulties that you encounter, and otherwise give helpful feedback.<br> Generally be curious and engage in the community, either through <a href="https://www.meetup.com/topics/ethereum/" target="_blank" class="learnLink">meetups</a> or the ones mentioned in the section above</p>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
    <v-expansion-panel-content class="grey darken-2 white--text">
      <div slot="header">What is the current roadmap?</div>
      <v-card>
        <v-card-text class="grey lighten-3 black--text">
          <p>Both the Ethereum Foundatin and the <a href="https://www.reddit.com/r/ethereum/comments/5wo6hy/ethereum_enterprise_alliance_live_updates/" target="blank">Enterprise Ethereum Alliance</a> are working on it.</p>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
    <v-expansion-panel-content class="grey darken-2 white--text">
      <div slot="header">Can ether be used as a currency?</div>
      <v-card>
        <v-card-text class="grey lighten-3 black--text">
          <p>Answer</p>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
    <v-expansion-panel-content class="grey darken-2 white--text">
      <div slot="header">What is Ethereum Classic?</div>
      <v-card>
        <v-card-text class="grey lighten-3 black--text">
          <p>Answer</p>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
    <v-expansion-panel-content class="grey darken-2 white--text">
      <div slot="header">Does Ethereum have an "infinite attack surface"?</div>
      <v-card>
        <v-card-text class="grey lighten-3 black--text">
          <p>Answer</p>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
    <v-expansion-panel-content class="grey darken-2 white--text">
      <div slot="header">Question?</div>
      <v-card>
        <v-card-text class="grey lighten-3 black--text">
          <p>Answer</p>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
    <v-expansion-panel-content class="grey darken-2 white--text">
      <div slot="header">Question?</div>
      <v-card>
        <v-card-text class="grey lighten-3 black--text">
          <p>Answer</p>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</v-container>
</template>

<script>
export default {
  name: 'learn',
  data () {
    return {
      msg: 'better formation and organization of developer resources coming soon...'
    }
  }
}
</script>

<style>
.content {
  margin-left: 0.4vmin;
}
</style>
