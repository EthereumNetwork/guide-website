<template>
  <v-row>
    <project-item v-for="project in filteredProjects" v-bind:project="project"></project-item>
    <v-col xs12><infinite-loading :on-infinite="onInfinite" ref="infiniteLoading" spinner="waveDots"></infinite-loading></v-col>
  </v-row>
</template>

<script>
  import ProjectItem from './ProjectItem.vue'
  import InfiniteLoading from 'vue-infinite-loading'

  export default {
    name: 'projectList',
    props: ['searchField', 'query'],
    data () {
      return {
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
        if (this.$route.query.q) {
          this.searchField = this.$route.query.q
        }
        if (!this.searchField || this.searchField.length <= 2) {
          return projectListArray.slice(0, this.maxProjects)
        }
        let searchArray = this.searchField.trim().toLowerCase().split(' ')

        projectListArray = projectListArray.filter(function (item) {
          let found = true
          for (var i = 0; i < searchArray.length; i++) {
            if (item.tags.toLowerCase().indexOf(searchArray[i]) === -1) {
              found = false
            }
          }
          return found
        })

        return projectListArray
      }
    },
    methods: {
      onInfinite () {
        setTimeout(() => {
          if (this.$store.state.projectList.length > this.maxProjects) {
            this.maxProjects = this.maxProjects + 50
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
          } else {
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete')
          }
        }, 300)
      }
    }
  }
</script>

<style>
</style>
