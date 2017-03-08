<template>
  <v-container fluid class="content">
    <img class="homeImage "src="../assets/NA.png"></img>
    <v-row>
      <v-col xs1>
      </v-col>
      <v-col xs10 class="searchbar">
        <v-text-input placeholder="search for Ethereum projects, topics, txIDs, adresses, ..." v-model="searchBar"></v-text-input>
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
  }
}
</script>

<style>
.homeImage {

}
</style>
