<template>
  <table>
    <thead>
      <tr>
        <th></th>
        <th v-for="header in headers" v-text="header"></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(translation, index) in translationsCNArray">
        <tr @click="editProject(index)">
          <td></td>
          <td>{{translation.title}}</td>
          <td>{{translation.updatedAt}}</td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script>
  export default {
    name: 'translationsCN',
    props: ['searchField', 'query'],
    data () {
      return {
        headers: ['title', 'updated'],
        translationsCNArray: []
      }
    },
    mounted () {
      fetch('api/translationsCN')
      .then((response) => { return response.json() })
      .then((data) => {
        this.translationsCNArray = data
      })
    },
    methods: {
      editProject: function (index) {
        console.log('hey', index)
        this.$store.commit('setProjectToEdit', { projectToEdit: this.translationsCNArray[index] })
        this.$router.push('/form')
      }
    }
  }
</script>

<style>
</style>
