<template>
  <v-row>
    <project-item v-for="project in filteredProjects" v-bind:project="project"></project-item>
  </v-row>
</template>

<script>
  import ProjectItem from './ProjectItem.vue'
  export default {
    name: 'projectList',
    props: ['searchField'],
    components: {
      ProjectItem
    },
    computed: {
      filteredProjects: function () {
        let projectListArray = this.$store.state.projectList
        let searchField = this.searchField
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
