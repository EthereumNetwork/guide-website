<template>
  <div v-if="project">
    <div @click="editProject" v-if="this.$store.state.token" class="text-xs-right"><i class="fa fa-pencil project-link"></div>
    <v-card>
      <v-card-text>
        <h1 class="text-xs-center">{{project.title}}</h1>
        <v-row>
          <v-col lg12>
            <div v-html="compiledMarkdown"></div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
  <div v-else>
    Unfortunately we couldn't find any information about {{$route.params.title}}
  </div>
</template>

<script>
var marked = require('marked')
export default {
  name: 'project',
  data () {
    return {
      msg: 'the network explorer is in the works...'
    }
  },
  computed: {
    project: function () {
      let title = this.$route.params.title.replace(/\s+/g, '').toLowerCase()
      return this.$store.state.projectList.find((project) => project.title.replace(/\s+/g, '').toLowerCase() === title)
    },
    compiledMarkdown: function () {
      return marked(this.project.longDescription || '', { sanitize: true })
    }
  },
  methods: {
    editProject: function () {
      console.log(this.project)
      this.$store.commit('setProjectToEdit', { projectToEdit: this.project })
      this.$router.push('/form')
    }
  }
}
</script>
