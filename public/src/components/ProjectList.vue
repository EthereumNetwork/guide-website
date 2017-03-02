<template>
  <v-row>
    <project-item v-for="project in filteredProjects" v-bind:project="project"></project-item>
  </v-row>
</template>

<script>
  import ProjectItem from './ProjectItem.vue'
  export default {
    name: 'projectList',
    props: ['searchField', 'query'],
    components: {
      ProjectItem
    },
    computed: {
      filteredProjects: function () {
        let projectListArray = this.$store.state.projectList
        if (this.$route.query.q) {
          this.searchField = this.$route.query.q
        }
        if (!this.searchField || this.searchField.length <= 2) {
          return projectListArray
        }
        let searchArray = this.searchField.trim().toLowerCase().split(' ')

        projectListArray = projectListArray.filter(function (item) {
          // if (item.longDescription.toLowerCase().indexOf(searchArray) !== -1) {
          //   return item
          // }
          let found = true
          for (var i = 0; i < searchArray.length; i++) {
            if (item.longDescription.toLowerCase().indexOf(searchArray[i]) === -1) {
              console.log(searchArray[i])
              found = false
            }
          }
          return found
        })

        return projectListArray
      }
    }
  }
</script>

<style>
</style>
