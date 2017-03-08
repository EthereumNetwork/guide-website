<template>
  <v-container fluid class="content">
    <img class="homeImage "src="../assets/NA.png"></img>
    <v-row>
      <v-col xs1>
      </v-col>
      <v-col xs10 class="searchbar">
        <v-text-input v-on:keyup.enter.native="submit" v-model="searchBar" placeholder="search for Ethereum projects, topics, txIDs, adresses, ..."></v-text-input>
        <input type="text" v-on:keyup.enter="submit">
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'home',
  props: ['searchField'],
  data () {
    return {
      msg: 'the network explorer will come later...',
      searchBar: ''
    }
  },
  methods: {
    submit () {
      if (this.searchBar.length === 42 && this.searchBar.slice(0, 2) === '0x') {
        this.$router.push('/address/' + this.searchBar)
      } else if (this.searchBar.length === 66 && this.searchBar.slice(0, 2) === '0x') {
        this.$router.push('/tx/' + this.searchBar)
      } else {
        this.$router.push('/projects/?q=' + this.searchBar)
      }
    }
  }
}
</script>

<style>
.homeImage {
  max-height: 150px;
  display: block;
  margin: 20px auto;
}
</style>
