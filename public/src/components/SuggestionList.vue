<template>
  <v-row>
    <project-item v-for="project in suggestionArray" v-bind:project="project"></project-item>
  </v-row>
</template>

<script>
  import ProjectItem from './ProjectItem.vue'
  export default {
    name: 'suggestionList',
    props: ['searchField', 'query'],
    data () {
      return {
        suggestionArray: 'the network explorer is in the works...'
      }
    },
    components: {
      ProjectItem
    },
    mounted () {
      console.log('data')
      fetch('/api/suggestions')
      .then((response) => { return response.json() })
      .then((data) => {
        console.log(data)
        this.suggestionArray = data
      })
    },
    computed: {
      filteredProjects: function () {
        let projectListArray = this.$store.state.projectList
        let searchField = this.searchField
        if (this.$route.query.q) {
          searchField = this.$route.query.q
        }
        if (!searchField || searchField.length <= 2) {
          return projectListArray
        }
        searchField = searchField.trim().toLowerCase()
        projectListArray = projectListArray.filter(function (item) {
          if (item.longDescription.toLowerCase().indexOf(searchField) !== -1) {
            return item
          }
        })
        return projectListArray
      }
    }
  }
</script>

<style>
</style>
