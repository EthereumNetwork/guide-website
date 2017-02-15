<template>
  <div>
    <p>some text about {{$route.params.title}}</p>
    {{projectToShow}}
  </div>
</template>

<script>
export default {
  name: 'project',
  data () {
    return {
      msg: 'the network explorer is in the works...'
    }
  },
  computed: {
    projectToShow: function () {
      let title = this.$route.params.title.trim().toLowerCase()
      return this.$store.state.projectList.find((project) => project.title.trim().toLowerCase() === title)
    }
  }
}
</script>
