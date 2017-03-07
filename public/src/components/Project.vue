<template>
  <div v-if="project">
    <v-card>
      <v-card-row>
        <v-card-title>
          <span>{{project.title}}</span>
        </v-card-title>
      </v-card-row>
      <v-card-text>
        <v-card-row>
            <div v-html="compiledMarkdown"></div>
        </v-card-row>
      </v-card-text>
      <v-card-row actions>
        <a v-bind:href="project.website" v-if="project.website" target="_blank"> <i class="fa fa-link contact-link"> </a>
        <a v-bind:href="project.github" v-if="project.github" target="_blank"> <i class="fa fa-github contact-link"> </i></a>
        <a v-bind:href="project.linkedin" v-if="project.linkedin" target="_blank"> <i class="fa fa-linkedin contact-link"> </i></a>
        <a v-bind:href="project.twitter" v-if="project.twitter" target="_blank"> <i class="fa fa-twitter contact-link"> </a>
        <a v-bind:href="project.facebook" v-if="project.facebook" target="_blank"> <i class="fa fa-facebook contact-link"> </a>
        <a v-bind:href="project.wechat" v-if="project.wechat" target="_blank"> <i class="fa fa-weixin contact-link"> </a>
        <a v-bind:href="project.slack" v-if="project.slack" target="_blank"> <i class="fa fa-slack contact-link"> </a>
        <a v-bind:href="project.reddit" v-if="project.reddit" target="_blank"> <i class="fa fa-reddit contact-link"></a>
        <a v-bind:href="'mailto:' + project.email" v-if="project.email"> <i class="fa fa-at contact-link"></a>
        <a v-bind:href="project.blog" v-if="project.blog" target="_blank"> <i class="fa fa-newspaper-o contact-link"></a>
        <v-spacer></v-spacer>
        <div @click="editProject" data-wenk="Suggest edits" data-wenk-pos="left"><i class="fa fa-pencil contact-link"></div>
      </v-card-row>
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
      msg: 'the network explorer is in the works...',
      project: {}
    }
  },
  computed: {
    // project: function () {
    //   let title = this.$route.params.title.replace(/\s+/g, '').toLowerCase()
    //   return this.$store.state.projectList.find((project) => project.title.replace(/\s+/g, '').toLowerCase() === title)
    // },
    compiledMarkdown: function () {
      return marked(this.project.longDescription || '', { sanitize: true })
    }
  },
  methods: {
    editProject: function () {
      this.$store.commit('setProjectToEdit', { projectToEdit: this.project })
      this.$router.push('/form')
    }
  },
  created () {
    fetch('/api/project/' + this.$route.params.title)
    .then((response) => { return response.json() })
    .then((data) => {
      this.project = data
    })
  }
}
</script>

<style>
.edit-link {
  cursor: pointer;
  cursor: hand;
}
.contact-link {
    color: black;
    text-shadow: 1px 1px 1px #ccc;
    font-size: 1.4em;
    margin-left: 0.3em;
}
img[alt=projectImage] { width: 250px; }
</style>
