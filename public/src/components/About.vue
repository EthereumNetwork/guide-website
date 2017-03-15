<template>
  <div>
    <h1>Goal</h1>
    <p>Ethereum Network is a guide to better understand, use and explore Ethereum, the decentralized smart contracts platform.</br>This is not the official website of the <a href="https://ethereum.org/" target="_blank">Ethereum</a> project, it is rather a guide for and by the community. That's why all code is open source and all project details are available and free to <a href="/download/projects" target="_blank">download</a>.</br>Think a project is not presented (well enough)? Everyone can <router-link to="/form">add new ones</router-link> or change the details of existing ones via the little edit symbol (still have to check for scams and spam, though).</p>

    <p>The Learn page is a curated, up-to-date list of links to show users and developers first steps into Ethereum.<br>
    <p>The Projects list gives an overview of all projects using Ethereum in some way, searchable by their keywords, technologies, developers and other criteria. URLs can link directly to <router-link to="/project/AKASHA">project details</router-link> or <router-link to="/projects?q=prediction market">search queries</router-link>.</br>It's more a tools to find ideas and people with the same interests to form connections and work together, rather than a list to brag how many projects exist on Ethereum. So you will also find <router-link to="/projects?q=abandoned">abandoned</router-link> projects and the ones which never made it past the idea stage.</p>
    <p>Through the Explorer you can analyze the Ethereum blockchain in detail, see transactions coming in in real time, verify smart contract code and view statistics (coming soon).</p>
    <p>As there are already many quality news websites reporting about Ethereum, we just link to the most important article in our Twitter feed. In our blog we report from Ethereum meetups around the world, so please et us know if you want the world to get to know your group, too.<br>And about any feature you would like to see here on this website next.</p>
    <br>
    <p>This website is still being worked on, but let us already know about <a href="https://github.com/EthereumNetwork/guide-website/issues">any issues</a>. If you want to help, just find us via the links in the footer. And donations to <router-link to="/address/0xB4AE3A54A6Ce31a09F83c38D4f4e2d9b66e30291">0xB4AE3A54A6Ce31a09F83c38D4f4e2d9b66e30291</router-link> are always appreciated.</p>
    <h1>Team</h1>
    <h2>Michael Ilg</h2>
    <v-row>
      <img src="../assets/milg.jpg">
      <v-col xs12 sm6>
        <p> living between Berlin and San Francisco, started out with programming on the Bitcoin blockchain before moving on to Ethereum to decentralize all the things.</p>
        <a href="https://github.com/misterigl" target="_blank"> <i class="icon-github-squared contact-link"> </i></a>
        <a href="https://twitter.com/misterigl" target="_blank"> <i class="icon-twitter-squared contact-link"> </a>
        <a href="https://www.reddit.com/user/misterigl/" target="_blank"> <i class="icon-reddit contact-link"></a>
        <a href="https://www.linkedin.com/in/michaelilg/" target="_blank"> <i class="icon-linkedin-squared contact-link"></a>
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
