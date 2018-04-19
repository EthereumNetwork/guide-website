<template>
  <v-container fluid grid-list-xl>
  <v-layout row justify-space-around wrap>
    <v-flex xs12 sm5 md4>
      <v-card>
        <router-link to="/learn">
          <v-card-media src="Vitalik_explaining.jpeg" height="150px"></v-card-media>
        </router-link>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Learn about Ethereum</h3>
            <div>A big collection of videos, guides and tutorials to get you started</div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
    <v-flex xs12 sm5 md4>
      <v-card>
        <router-link to="/projects">
          <v-card-media src="xEther.jpeg" height="150px"></v-card-media>
        </router-link>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Ethereum projects</h3>
            <div>Projects using Ethereum</div>
          </div>
        </v-card-title>
        <!-- <v-card-actions>
          <v-btn flat color="orange"><router-link to="/form">Add Project</router-link></v-btn>
        </v-card-actions> -->
      </v-card>
    </v-flex>
    <v-flex xs12 sm5 md4>
      <v-card>
        <router-link to="/map">
          <v-card-media src="worldmap.jpeg" height="150px"></v-card-media>
        </router-link>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Map (coming soon)</h3>
            <div>Find Ethereum nodes, meetups and ether-cash trades</div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
    <v-flex xs12 sm5 md4>
      <v-card>
        <router-link to="/explorer">
          <v-card-media src="dotes_connected.jpeg" height="150px"></v-card-media>
        </router-link>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Blockchain Explorer (beta)</h3>
            <v-text-field v-on:keyup.enter.native="submit" v-model="searchBar" label="Search by address"></v-text-field>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
    <v-flex xs12 sm5 md4>
      <v-card>
        <router-link to="/social">
          <v-card-media src="xEther.jpeg" height="150px"></v-card-media>
        </router-link>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Social</h3>
            <div>Ethereum news and discussions</div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
// const toChecksumAddress = require('ethereumjs-util').toChecksumAddress
// import { toChecksumAddress } from 'ethereumjs-util'
// both include the whole library
export default {
  name: 'home',
  props: ['searchField'],
  data () {
    return {
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
