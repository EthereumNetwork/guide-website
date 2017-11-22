<template>
  <!-- <table>
    <thead>
      <tr>
        <th></th>
        <th v-for="header in headers" v-text="header"></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(suggestion, index) in suggestionArray">
        <tr @click="editProject(index)">
          <td></td>
          <td>{{suggestion.title}}</td>
          <td>{{suggestion.updatedAt}}</td>
        </tr>
      </template>
    </tbody>
  </table> -->
  <v-data-table
    v-bind:headers = "headers"
    v-bind:items = "suggestionArray"
    hide-actions
    class="elevation-1"
  >
  <template slot="items" slot-scope="props">
    <td @click="editProject(props.item._id)">{{props.item.title}}</td>
    <td @click="editProject(props.item._id)">{{props.item.updatedAt}}</td>
  </template>
  <!-- <template v-for="(suggestion, index) in suggestionArray">
    <tr @click="editProject(index)">
      <td></td>
      <td>{{suggestion.title}}</td>
      <td>{{suggestion.updatedAt}}</td>
    </tr>
  </template> -->
  </v-data-table>
</template>

<script>
  export default {
    name: 'suggestionList',
    props: ['searchField', 'query'],
    data () {
      return {
        headers: [
          {text: 'Title', value: 'title', sortable: true, align: 'left'},
          {text: 'Updated', value: 'updated', sortable: false, align: 'left'},
        ],
        suggestionArray: []
      }
    },
    mounted () {
      fetch('/api/suggestions')
      .then((response) => { return response.json() })
      .then((data) => {
        this.suggestionArray = data
      })
    },
    methods: {
      editProject: function (index) {
        let idMatch = (item) => { return item._id === index }
        this.$store.commit('setProjectToEdit', { projectToEdit: this.suggestionArray.find(idMatch) })
        this.$router.push('/form')
      }
    }
  }
</script>

<style>
</style>
