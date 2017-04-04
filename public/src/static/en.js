const en = {
  learn: {
    description: "Ethereum is still a young and experimental project, it isn't safe or scalable yet. Most resources here are for developers not afraid to try out new things. In the future, there will be more information and step-by-step guides to help less technical users to understand Ethereum.",
    topics: [
      {
        headline: 'What is Ethereum?',
        paragraphs: [
          { text: 'The Ethereum project aims to do for human collaboration what the internet did for information. It is part of a world computer, where everyone can publish and access content, write and use applications, send value and make agreements.' },
          { text: "This is done through so called smart contracts and decentralized applications (dapps), open, tamper proof, opt-in, self executing applications that run exactly as programmed and all share one common, append-only 'truth', the Ethereum blockchain, while ensuring that there is no downtime, censorship, fraud or third party interference." },
          { text: "This decentralized environment allows all people, programs, IoT devices, markets, registries and other things to collaborate without the need for explicit trust. That's why people also call it the trust machine, it is not just an upgrade to our databases and Internet, but rather a tool to re-architect social, financial and political systems." },
          { text: "While that all just sounds a lot like a long list of awesome buzzwords, it is very actively developed by tens of thousand of developers around the world and happening right now. Below you'll find some links to instruction guides and videos that will help you get started. Once you're a bit more familiar with Ethereum, dive in deeper and read the other sections" }
        ],
        links: [
          { link: 'http://blockgeeks.com/guides/what-is-ethereum/', title: 'What is Ethereum?', desc: 'A Step-by-Step Beginners Guide' },
          { link: 'https://blog.coinbase.com/a-beginners-guide-to-ethereum-46dd486ceecf', title: 'A beginner’s guide to Ethereum', desc: 'by Coinbase' },
          { link: 'https://youtu.be/Pl8OlkkwRpc', title: 'Video "How the blockchain is changing money and business"', desc: 'by Don Tapscott' },
          { link: 'https://youtu.be/j23HnORQXvs', title: 'Video "Ethereum, the world computer"', desc: 'How the internet will work in the future' },
          { link: 'https://youtu.be/66SaEDzlmP4', title: 'Video "Ethereum in 25 minutes"', desc: 'by Vitalik Buterin' },
          { link: 'https://www.youtube.com/channel/UCNOfzGXD_C9YMYmnefmPH0g/videos', title: 'Videos from Ethereum DevCon 2', desc: 'Sep. 2016 in Shanghai' },
          { link: 'https://medium.com/ethlance/using-the-decentralized-web-3936dc5daac1', title: 'Using the Decentralized Web', desc: 'Interact with decentralized applications without understanding Ethereum' },
          { link: 'https://steemit.com/ethereum/@cryptomancer/ethereum-for-dummies-introducing-the-next-great-technological-leap-forward', title: 'Ethereum for Dummies', desc: 'introducing the next great technological leap forward' },
          { link: 'https://www.youtube.com/watch?v=U_LK0t_qaPo', title: 'Ethereum for Dummies 2', desc: 'a less up-to-date version by Dr. Gavin Wood, still relevant' },
          { link: 'https://media.consensys.net/introduction-to-ethereum-the-internets-government-35bdd25f572a', title: 'Introduction to Ethereum', desc: 'as the Internet’s Government' },
          { link: 'https://blog.coinbase.com/app-coins-and-the-dawn-of-the-decentralized-business-model-8b8c951e734f', title: 'Blockchain Tokens', desc: 'and the dawn of the Decentralized Business Model' },
          { link: 'https://bitsonblocks.net/2016/10/02/a-gentle-introduction-to-ethereum/', title: 'A gentle introduction to Ethereum' },
          { link: 'https://bitsonblocks.net/2016/10/02/a-gentle-introduction-to-ethereum/', title: 'Blockchain stack #1', desc: 'Installing Ethereum Geth and your first smart contract' },
          { link: 'https://www.meetup.com/topics/ethereum/', title: 'Ethereum meetups around the world', desc: 'Every meetup is welcoming and happy to help, as you can read in our blog' }
        ]
      },
      {
        headline: 'Wallets and Browsers',
        paragraphs: [
          { text: 'Wallets and browsers are your windows to the Ethereum world. The former works just like your normal wallet, i.e. it allows you to store, add and spend money via different currencies and payment systems. It contains one or more Ethereum addresses (long hexadecimal strings that uniquely identifies them) and can receive and send ether (the underlying Ethereum currency) or other tokens running on top of Ethereum. Before taking the plunge and spending any money on ether, please read the information provided by the first link in the security section.' },
          { text: 'As we said already, Ethereum is much more than just a crypto-currency blockchain. The main purpose is hosting and running smart contracts, storing distributed data (swarm), decentralized communication (whisper) and much more. This begs the question: “How can I access all these cool features?”. This is where browser plugins such as Metamask and Ethereum browsers like Mist come in.' }
        ],
        links: [
            { link: 'https://github.com/ethereum/mist/releases', title: 'Mist', desc: 'Official Ethereum browser and wallet' },
            { link: 'https://metamask.io/', title: 'MetaMask', desc: 'Chrome plugin to access Ethereum dapps' },
            { link: 'https://www.myetherwallet.com/', title: 'MyEtherWallet', desc: 'client-side Ethereum online wallet and smart contract execution' },
            { link: 'https://github.com/ethcore/parity/wiki/Parity-Wallet', title: 'Parity Wallet', desc: 'Parity also includes a bundled wallet application' },
            { link: 'https://jaxx.io/', title: 'Jaxx', desc: 'Wallet for multiple currencieson on multiple platforms' },
            { link: 'https://status.im/', title: 'Status', desc: 'Ethereum browser/messenger/wallet for mobile phones' },
            { link: 'https://www.inzhoop.com/', title: 'LETH', desc: 'A mobile Ethereum wallet with chat function' },
            { link: 'https://token.im/', title: 'imToken', desc: 'A smart digital wallet for mobile phones' }
        ]
      },
      {
        headline: 'Guides and Tips:',
        paragraphs: [
          { text: 'Every day there are new blog posts, tutorials, research article and discussions about how to develop smart contracts and decentralized applications. I try to keep the best and most up-to-date ones here, please let me know about new ones I should add or old ones to remove.' },
          { text: "Below you'll find some links to instruction guides and videos that will help you on your path to becoming a Ðapp developer." }
        ],
        links: [
            { link: 'https://medium.com/@ConsenSys/a-101-noob-intro-to-programming-smart-contracts-on-ethereum-695d15c1dab4#.tcmcvxugj', title: '101 Noob Intro', desc: 'to Programming Smart Contracts' },
            { link: 'http://blockgeeks.com/guides/smart-contracts-the-blockchain-technology-that-will-replace-lawyers/', title: 'Smart Contracts', desc: 'Beginner’s Guide' },
            { link: 'https://truffle-box.github.io/', title: 'Truffle Box', desc: ' Set of Truffle + Webpack + React Boilerplates' },
            { link: 'https://medium.com/metamask/developing-ethereum-projects-with-truffle-and-metamask-aa8ad7e363ba', title: 'Developing Ethereum Projects', desc: 'with Truffle and MetaMask' },
            { link: 'https://medium.com/@timothyjcoulter/truffle-tricks-for-ethereum-development-dispelling-8-myths-first-impressions-880f66bf3320', title: 'Truffle Tricks for Ethereum Development', desc: 'Dispelling Myths and First Impressions' },
            { link: 'http://blog.nexusdev.us/dapple-tutorial/', title: 'Creating an Upgradeable Token', desc: 'With Dapple and Dappsys' },
            { link: 'http://blog.nexusdev.us/saving-time-and-sanity-using-the-next-generation-of-dapple-testing-tools/', title: 'Dapple’s Next-Generation Testing Tools', desc: 'Saving Time and Sanity' },
            { link: 'https://www.youtube.com/channel/UCNOfzGXD_C9YMYmnefmPH0g/videos', title: 'Devcon2 videos' },
            { link: 'https://ethereumfoundation.org/devcon/?page_id=14', title: 'Devcon2 slides' },
            { link: 'https://medium.com/@mvmurthy/full-stack-hello-world-voting-ethereum-dapp-tutorial-part-3-331c2712c9df', title: 'Full Stack Hello World Voting Ethereum Dapp Tutorial ', desc: 'for web developer' },
            { link: 'http://blockgeeks.com/decentralized-applications-development-net-developers/', title: 'Decentralized applications development', desc: 'for .NET developers using Microsoft Visual Studio' },
            { link: 'https://www.youtube.com/watch?v=2184nCGMxyQ', title: 'Building a DApp and write contracts', desc: 'video by Alex Van de Sande and Christian Reitwiessner' },
            { link: 'https://www.youtube.com/watch?v=9_coM_g7Dbg&list=PLH4m2oS2ratdoHFEkGvwvd7TkeTv4sa7Z', title: 'Building an Ethereum dapp using Solidity', desc: 'video series by Shlomi Zeltsinger' },
            { link: 'https://medium.com/@mvmurthy/ethereum-for-web-developers-890be23d1d0c', title: 'iEx.ec EDCON series', desc: '10 blog posts to understand the technology behind the Ethereum decentralized cloud' },
            { link: 'https://blog.ethereum.org/2016/07/12/build-server-less-applications-mist/', title: 'How to build severless applications', desc: 'for Mist' },
            { link: 'http://blockchainers.org/index.php/2016/11/27/ethereum-usecase-claim-and-endorse', title: ' A generic “Claim and Endorse” Contract' },
            { link: 'https://souptacular.gitbooks.io/ethereum-tutorials-and-tips-by-hudson/content/private-chain.html', title: 'Set up a private chain', desc: 'for testing purposes' },
            { link: 'https://medium.com/@ConsenSys/very-deep-dive-on-ethereum-reading-list-f5b1122e5990#.d9mtt32ic', title: 'Ethereum Reading List', desc: 'for more in depth learning' },
            { link: 'https://zupzup.org/smart-contract-solidity/', title: 'Getting Started with Smart Contracts', desc: 'using Solidity' },
            { link: 'https://monax.io/docs/tutorials/solidity/solidity_1_the_five_types_model/', title: 'Solidity series on Eris', desc: 'different blockchain, same smart contract language' },
            { link: 'https://medium.com/@codetractio/try-out-ethereum-using-only-nodejs-and-npm-eabaaaf97c80', title: 'Try out Ethereum', desc: 'using only nodejs and npm' },
            { link: 'https://hackernoon.com/how-to-create-a-token-factory-with-ethereum-part-1-85e84d1f38fc', title: 'How to create a Token Factory', desc: 'with Ethereum' },
            { link: 'http://decypher.tv/series/ethereum-development', title: 'Video Series', desc: 'for Ethereum Ðapp Development (paid)' },
            { link: 'https://academy.b9lab.com/', title: 'Certified Online Course', desc: 'for Ethereum Developer (paid)' },
            { link: 'http://exosphe.re/#blockchain', title: '8 week immersive program', desc: 'for Blockchain App Dev (paid)' }
        ]
      },
      {
        headline: 'Developer Resources and Tools',
        paragraphs: [
          { text: 'Now that you have a wallet and have probably installed Mist and/or Metamask, it’s time roll up your sleeves and get your hands dirty. There are tons of frameworks, tools and resources that you will help you create your very own first Ðapp.' },
          { text: 'Ethereum nodes each run an EVM (Ethereum Virtual Machine). This is where the smart contracts run. To run code on the EVM, you will want to pick a language to write them in. As Solidity can be considered the reference implementation in terms of smart-contract programming languages, it is a good place to start. Once you have gotten familiar with it and maybe even compiled your first smart contract using Solc, you will want to look at Ðapp development frameworks such as Truffle, Embark or Dapple.' }
        ],
        links: [
          { link: 'https://ethereum.org/', title: 'Ethereum Website', desc: 'Browser and first tutorials from the Ethereum Foundation' },
          { link: 'https://github.com/ethereum/wiki/wiki/White-Paper', title: 'White Paper', desc: 'The formal proposal of Ethereum' },
          { link: 'https://github.com/ethereum/yellowpaper', title: 'Yellow Paper', desc: 'The formal specification of the Ethereum protocol' },
          { link: 'https://solidity.readthedocs.io/en/latest/', title: 'Solidity Docs', desc: 'learn the contract-oriented, high-level language for the Ethereum Virtual Machine' },
          { link: 'http://www.ethdocs.org/en/latest/index.html', title: 'Homestead Documentation', desc: 'the current version of Ethereum' },
          { link: 'http://ethereum.stackexchange.com', title: 'Ethereum StackExchange', desc: 'get answers for all your Ethereum questions' },
          { link: 'https://github.com/ethereum/web3.js', title: 'Ethereum JavaScript API' },
          { link: 'http://truffleframework.com/', title: 'Truffe', desc: 'Development framework for Ethereum' },
          { link: 'https://github.com/iurimatias/embark-framework', title: 'Embark', desc: 'Framework to develop and deploy DApps' },
          { link: 'http://dapple.readthedocs.io/en/master/', title: 'Dapple', desc: 'Development framework for Ethereum' },
          { link: 'https://github.com/nexusdev/projectle', title: 'Projectle', desc: 'EVM contract system developer multi-tool' },
          { link: 'https://github.com/blockapps/bloc', title: 'BlockApps', desc: 'REST API and Javascript and Mobile SDK to Ethereum blockchains.' },
          { link: 'https://infura.io/', title: 'Infura', desc: 'APIs to Ethereum and IPFS nodes' },
          { link: 'https://ethereum.github.io/browser-solidity/', title: 'Browser Solidity', desc: 'Solidity Realtime compiler and IDE' },
          { link: 'https://github.com/ethereum/viper', title: 'Viper', desc: 'Experimental EVM programming language with several security features' },
          { link: 'https://github.com/SilentCicero/wafr', title: 'Wafr', desc: 'A super simple Solidity test harness for Ethereum smart-contracts.' },
          { link: 'https://www.reddit.com/r/ethereum/comments/5q4at2/psa_add_this_git_webhook_to_your_solidity/', title: 'git webhook to your solidity codebases', desc: 'for the Ethereum Function Signature Registry' },
          { link: 'https://live.ether.camp/', title: 'Ether Camp', desc: 'Blockchain explorer' },
          { link: 'https://etherscan.io/', title: 'Etherscan', desc: 'Blockchain explorer' }
        ]
      },
      {
        headline: 'Clients and Implementations',
        paragraphs: [
          { text: 'Clients directly (node as part of the network) or indirectly (remote connection to a node) connect to the Ethereum network and are used by browsers and wallets to allow the user to interact with it.' }
        ],
        links: [
          { link: 'https://geth.ethereum.org/', title: 'Geth Ethereum Client', desc: 'Ethereum client developed in Go' },
          { link: 'https://ethcore.io/parity.html', title: 'Parity Ethereum Client', desc: 'Ethereum client developed in Rust' },
          { link: 'http://ethereumjs.github.io/', title: 'ethereumJS', desc: 'Javascript gateway to Ethereum' },
          { link: 'https://github.com/ethereum/wiki/wiki/JavaScript-API', title: 'Web3', desc: 'Javascript API to interact with Ethereum' },
          { link: 'https://github.com/Nethereum/Nethereum', title: 'Nethereum', desc: '.Net integration library for Ethereum' },
          { link: 'https://github.com/web3j/web3j', title: 'web3j', desc: 'Java and Android Ethereum library' },
          { link: 'https://github.com/ethereum/pyethereum', title: 'pyethereum', desc: 'Python core library of the Ethereum project' },
          { link: 'http://machinomy.com/', title: 'Machinomy', desc: 'JS library for micropayments in Ether over HTTP' }
        ]
      },
      {
        headline: 'Smart contract security',
        paragraphs: [
          { text: "Security. Security. Security. Do it! Follow the guidelines, both for general online security as well as for saver smart contract programming. Your and other people's money might depend on it." }
        ],
        links: [
            { link: 'https://github.com/ConsenSys/smart-contract-best-practices', title: 'Smart contract best practices', desc: 'by ConsenSys' },
            { link: 'https://ethereum.stackexchange.com/questions/tagged/security', title: 'Stack exhange security tag', desc: 'see what people ask about security' },
            { link: 'https://www.kingoftheether.com/contract-safety-checklist.html', title: 'Contract Safety and Security Checklist', desc: 'by King of the Ether' },
            { link: 'http://hackingdistributed.com/2016/06/18/analysis-of-the-dao-exploit/', title: 'Analysis of theDAO exploit', desc: 'How a bug caused a theft of $50 million' },
            { link: 'http://vessenes.com/deconstructing-thedao-attack-a-brief-code-tour/', title: 'Deconstructing theDAO Attack', desc: 'The bug that caused the theft' },
            { link: 'https://github.com/raineorshine/solgraph', title: 'Solgraph', desc: 'Visualize Solidity control flow for smart contract security analysis.' },
            { link: 'https://medium.com/zeppelin-blog/zeppelin-v1-0-0-4e593c505345#.bv6yubf7v', title: 'Zeppelin', desc: 'framework to build secure smart contracts in the Solidity language' },
            { link: 'https://www.reddit.com/r/ethereum/comments/4uu9fb/formal_verification_for_solidity/?st=irj5anka&sh=c23052c7', title: 'Formal Verification For Solidity' }
        ]
      },
      {
        headline: 'Online and wallet Security',
        paragraphs: [
          { text: "Security. Security. Security. Do it! Follow the guidelines, both for general online security as well as for saver smart contract programming. Your and other people's money might depend on it." }
        ],
        links: [
            { link: 'https://medium.com/@pipermerriam/my-guide-to-solid-digital-security-fb76cb19c536#.cliexcgpg', title: 'Guide to securing your digital life', desc: 'necessary when dealing with cryptocurrencies' },
            { link: 'https://ledger.groovehq.com/knowledge_base/topics/how-to-secure-your-eth-tokens-augur-rep-dot-dot-dot-with-your-nano-s', title: 'Ledger Nano', desc: 'Hardware wallet to store your ether and tokens' },
            { link: 'http://doublenegative.com/ethereum-security-and-wallets/', title: 'Wallet Security', desc: 'and how to secure them' }
        ]
      },
      {
        headline: 'News and communities',
        paragraphs: [
          { text: 'There are many quality news outlet reporting about Ethereum and the decentralization of the web. Check them out or follow us via the links in the footer for the most important news articles of the day.' }
        ],
        links: [
            { link: 'https://blog.ethereum.org/', title: 'Official Ethereum blog', desc: 'by the Ethereum Foundation' },
            { link: 'https://www.ethnews.com/', title: 'ETHNews', desc: 'News Website' },
            { link: 'https://cointelegraph.com/tags/ethereum', title: 'Cointelegraph', desc: 'News Website' },
            { link: 'https://media.consensys.net/', title: 'ConsenSys Blog', desc: 'Blog of the Ethereum powerhouse ConsenSys' },
            { link: 'https://www.cryptocoinsnews.com/ethereum-news/', title: 'CryptocoinsNews', desc: 'News Website' },
            { link: 'https://bitcoinmagazine.com/sections/ethereum/', title: 'Bitcoin Magazine', desc: 'News Website' },
            { link: 'http://www.coindesk.com/?s=ethereum', title: 'Coindesk', desc: 'News Website' },
            { link: 'http://www.ibtimes.co.uk/topics/ethereum', title: 'International Business Times', desc: 'News Website' },
            { link: 'http://www.weekinethereum.com/', title: 'The week in Ethereum', desc: 'Newsletter by Evan Van Ness' },
            { link: 'https://www.reddit.com/r/ethereum/', title: 'Ethereum subreddit', desc: 'Daily news, development Most news about Ethereum can be found here daily' },
            { link: 'https://www.reddit.com/r/ethtrader/', title: 'Ethtrader subreddit', desc: 'Ether price and trading discussions' },
            { link: 'https://www.reddit.com/r/ethdev/', title: 'EthDev subreddit', desc: 'Discussions about Ethereum development' }
        ]
      },
      {
        headline: 'Exchanges',
        paragraphs: [
          { text: "Even though there are no borders in the Ethereum world, you would need some ether to use the services and decentralized apps there. Like exchanging into the local currency in a foreign country you're visiting. Exchanges provide a means to move in or out of ether by trading it for fiat money ($, €, ¥, £) or other crypto-currencies." },
          { text: "Some of the exchanges directly offer fiat money trades via bank transfers, while others only handle trades between crypto-currencies. And then there are the decentralized ones. You'll need to run an Ethereum client, such as Mist or MetaMask, but they never hold costumer funds and generally have lower fees than the normal ones." },
          { text: 'Before getting in crypto-currencies, be sure to read the wallet and online security related parts in the section above.' }
        ],
        links: [
            { link: 'https://www.coinbase.com/', title: 'Coinbase', desc: 'Exchange based in the US' },
            { link: 'https://www.kraken.com/', title: 'Kraken', desc: 'Exchange base in the US' },
            { link: 'https://www.bitfinex.com/', title: 'Bitfinex', desc: 'Exchange based in China' },
            { link: 'https://yunbi.com/', title: 'Yunbi', desc: 'Exchange based in China' },
            { link: 'http://www.poloniex.com/', title: 'Poloniex', desc: 'Cryptocurrency only Exchange' },
            { link: 'https://www.bittrex.com/', title: 'Bittrex', desc: 'Cryptocurrency only Exchange' },
            { link: 'https://mkr.market/', title: 'Maker Market', desc: 'Decentralized Cryptocurrency Exchange' }
        ]
      }
    ],
    FAQs: {
      headline: 'FAQs',
      description: 'Answers to some of the questions you might enconter while getting to know Ethereum. More questions and answers can be found at the http://ethereum.stackexchange.com/ Ethereum StackExchange',
      questions: [
        { question: 'Where do I start?', answer: "The Ethereum network can be very overwhelming, so that is a good question and completely depends what you're looking for. If you are a developer looking into blockchain programming and the creation of decentralized apps, most of the sections here are directed towards you. Let me know if you run into any trouble or out-dated info.", answer2: "As a curious user, on <router-link to='/projects'>the projects page</router-link> use any decentralized app that you find interesting. Then complain to the developers about any user experience difficulties that you encounter, and otherwise give helpful feedback.", answer3: 'Generally be curious and engage in the communities mentioned in the section above' },
        { question: 'What is the current roadmap?', answer: "Both the 'https://www.ethnews.com/ethereums-road-map-for-2017>Ethereum Foundatin and the <a href=https://www.reddit.com/r/ethereum/comments/5wo6hy/ethereum_enterprise_alliance_live_updates/ >Enterprise Ethereum Alliance are working on it" },
        { question: 'Can ether be used as a currency like bitcoin?', answer: "Bitcoin tried to create the perfect 'coin', with a lot of focus on the monetary properties itself (how much are there, what is the increase schedule, etc...). It tries to compete with the Dollar, the Euro, the Yuan, gold, etc to buy things and thus make it valuable.", answer2: "Ethereum's focus is different, it is the ecosystem itself. It is trying to create an economy that has never existed before, it’s creating its own ocean.", answer3: 'The paradox is that by not making that the center and competing in the existing ocean, but rather focusing on its own world, it’s creating value well above and beyond any other token-centric coin — which gives it real value.', answer4: "Why use it for things you can buy with Dollars? When you think about it, it mainly shines in areas you can't use Dollar, like gambling, drugs and international money transfers.", answer5: "Bitcoin: waiting for 'X' to accept Bitcoin. Ethereum: building the new X.", answer6: "Another problem for actually buying stuff with bitcoin or ether is their volatility. Merchants and service provider with bills to pay have to instantly convert crypto to fiat and prices need to be updated as the exchange rate changes. A better solution would be <router-link to='/projects?q=stable coin'>stable coins</router-link> which track the value of one or more fiat currencies and will probably end up being the primary payment mechanism on Ethereum. Ether's function is more seen as investment in the network itself (used for all transactions, generating a return though staking, very low inflation), as technical payments between devices or as collateral deposits." },
        { question: 'What is Ethereum Classic, SOILcoin, Expanse or any of the other Ethereum forks?', answer: 'Because every Ethereum implementation is completely open-source, anyone can just run their own version with all kind of variations. The mentioned projects either moved away for some changes or stayed behind when the community moved on. They are all legit efforts with more or less noble causes, just be aware what you want to use.", answer2: "All the projects shown on <router-link to="/projects">/projects</router-link> use the real Ethereum, currently valued at about $ {{price.USD}}, while most others might end up with almost no value eventually.' }
      ]
    }
  }
}

export default en
