<template>
  <v-row>
    <project-item v-for="project in filteredProjects" v-bind:project="project"></project-item>
  </v-row>
</template>

<script>
  import ProjectItem from './components/ProjectItem.vue'
  export default {
    name: 'projectList',
    props: ['searchField'],
    data () {
      return {
        projectList: [{
          title: 'No project data found',
          shortDescription: 'please refresh the page to get the newest project data',
          contact: {}
        }]
      }
    },

    beforeCreate () {
      fetch('/api/projects')
      .then((response) => { return response.json() })
      .then((data) => { this.projectList = data })
      this.$store.state.token = this.$cookie.get('token')
    },

    computed: {
      filteredProjects: function () {
        let projectListArray = this.projectList
        let searchField = this.searchField

        if (!searchField) {
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
    },

    components: {
      ProjectItem
    }
  }
</script>

<style>
</style>
