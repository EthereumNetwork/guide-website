<template>
  <v-container fluid grid-list-sm>
    <v-layout row wrap>
      <v-flex xs10 offset-xs1>
        <v-text-field label="filter projects" v-model="searchField" hint="type in names, topics, industries, ..." single-line clearable v-if="!$route.query.q"></v-text-field>
      </v-flex>
      <v-flex xs12 sm6 md4 pb-2 v-for="project in filteredProjects" :key="project.title">
        <project-item v-bind:project="project" ></project-item>
      </v-flex>
      <v-flex xs12 class="showall">
        <infinite-loading v-if="!searchField" @infinite="infiniteHandler" ref="infiniteLoading" spinner="bubbles"></infinite-loading>
        <div v-else @click="showAllProjects" data-wenk="Show All Projects"><i class="icon-resize-full-alt"></i></div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import ProjectItem from './ProjectItem.vue'
  import InfiniteLoading from 'vue-infinite-loading'

  export default {
    name: 'projectList',
    props: ['query'],
    data () {
      return {
        searchField: '',
        maxProjects: 0
      }
    },
    components: {
      ProjectItem,
      InfiniteLoading
    },
    computed: {
      filteredProjects: function () {
        let projectListArray = this.$store.state.projectList
        let translationKey = this.$store.state['vue-i18n-manager'].currentLanguage.translationKey
        if (this.$route.query.q) {
          this.searchField = this.$route.query.q
        }
        let minSearchchar = (translationKey === 'cn') ? 0 : 2
        if (!this.searchField || this.searchField.length <= minSearchchar ) {
          return projectListArray.slice(0, this.maxProjects)
        }
        let searchArray = this.searchField.trim().toLowerCase().split(' ')

        projectListArray = projectListArray.filter(function (item) {
          let fieldToCheck = (translationKey === 'cn') ? item.tagsCN || '' : item.tags || ''
          let found = true
          for (var i = 0; i < searchArray.length; i++) {
            if (fieldToCheck.toLowerCase().indexOf(searchArray[i]) === -1) {
              found = false
            }
          }
          return found
        })

        return projectListArray
      }
    },
    methods: {
      infiniteHandler () {
        setTimeout(() => {
          if (this.$store.state.projectList.length >= this.maxProjects) {
            this.maxProjects = this.maxProjects + 50
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
          } else if (this.$store.state.projectList.length) {
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete')
          }
        }, 300)
      },
      showAllProjects () {
        this.searchField = ''
        this.$router.push('/')
      }
    }
  }
</script>

<style>
.showall {
    color: grey;
    font-size: 2em;
    text-align: center;
    cursor: pointer;
    cursor: hand;
}
</style>
