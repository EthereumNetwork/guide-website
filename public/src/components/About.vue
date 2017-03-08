<template>
  <div>
    <h1>Goal</h1>
    <p>Ethereum Network is a guide to help the community to better understand, use and explore <a href="https://ethereum.org/" target="_blank">Ethereum</a>, the decentralized smart contracts platform.</p>
    <p>The Learn page is a curated, up-to-date list of links to show users and developers first steps into Ethereum.<br>
    <p>The Project list gives an overview of all projects using Ethereum in some way, searchable by their keywords, technologies, developers and other criteria. Urls can link directly to <router-link to="/project/AKASHA">project details</router-link> or <router-link to="/projects?q=prediction market">search queries</router-link>.</br>Think a project is not presented (well enough)? Everyone can <router-link to="/form">add new ones</router-link> or change the details of excisiting ones, including markdown and images.</br>It's more a tools to find ideas and people with the same interests to form connections and work together, rather than a list to brag how many projects exist on Ethereum. So you will also find <router-link to="/projects?q=abandoned">abandoned</router-link> projects and the ones who never made it past the idea stage.</p>
    <p>With the Explorer you can analyze the Ethereum blockchain in detail, see transactions coming in in real time, verify smart contract code and view statistics.<br>There are already many <router-link to="/learn">quailty news websites</router-link> reportting about Ethereum, so we just link the most important article in our Twitter feed, but in our blog we report from Ethereum meetups around the world. Let us know if you want the world to get to know your group, too.<br>And about any feature you would like to see here on this website next.</p>
    <br>
    <p>This website is still being worked on, <a href="https://github.com/EthereumNetwork/guide-website/issues">let me know</a> about any issues or if you want to join me.</p>
    <h1>Team</h1>
    <h2>Michael Ilg</h2>
    <v-row>
      <img src="../assets/milg.jpg">
      <v-col xs12 sm6>
        <p> started out with programming on the Bitcoin blockchain before moving on to Ethereum to decentralize all the things.</p>
        <a href="https://github.com/misterigl" target="_blank"> <i class="icon-github-squared contact-link"> </i></a>
        <a href="https://twitter.com/misterigl" target="_blank"> <i class="icon-twitter-squared contact-link"> </a>
        <a href="https://www.reddit.com/user/misterigl/" target="_blank"> <i class="icon-reddit contact-link"></a>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'about',
  props: ['searchField'],
  data () {
    return {
      msg: 'the network explorer is in the works...'
    }
  }
}
</script>
