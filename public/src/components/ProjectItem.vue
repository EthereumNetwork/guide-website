<template>

    <v-col xs12="xs12" sm4="sm4" md6="md6" lg4>
      <v-card>
        <v-card-row class="grey darken-2 projectcard-title">
          <v-card-title @click="showProject" class="projectTitle">
            <span>{{project.title}}</span>
          </v-card-title>
        </v-card-row>
        <v-card-text>
          <v-card-row>
            <img v-bind:src="project.logoUrl || './src/assets/NA.png'" class="project-image">
            <div>
              <p>{{project.shortDescription}}</p>
            </div>
          </v-card-row>
        </v-card-text>
        <v-card-row actions>
          <div @click="editProject" v-if="this.$store.state.token" ><i class="fa fa-pencil contact-link"></div>
          <a v-bind:href="project.contact.website" v-if="project.contact.website" target="_blank"> <i class="fa fa-link contact-link"> </a>
          <a v-bind:href="project.contact.github" v-if="project.contact.github" target="_blank"> <i class="fa fa-github contact-link"> </i></a>
          <a v-bind:href="project.contact.twitter" v-if="project.contact.twitter" target="_blank"> <i class="fa fa-twitter contact-link"> </a>
          <a v-bind:href="project.contact.facebook" v-if="project.contact.facebook" target="_blank"> <i class="fa fa-facebook contact-link"> </a>
          <a v-bind:href="project.contact.slack" v-if="project.contact.slack" target="_blank"> <i class="fa fa-slack contact-link"> </a>
          <a v-bind:href="project.contact.reddit" v-if="project.contact.reddit" target="_blank"> <i class="fa fa-reddit contact-link"></a>
          <a v-bind:href="'mailto:' + project.contact.email" v-if="project.contact.email"> <i class="fa fa-at contact-link"></a>
          <a v-bind:href="project.contact.blog" v-if="project.contact.email" target="_blank"> <i class="fa fa-newspaper-o contact-link"></a>
        </v-card-row>
      </v-card>
    </v-col>
</template>

<script>
var marked = require('marked')
export default {
  name: 'project-item',
  props: ['project'],
  computed: {
    compiledMarkdown: function () {
      return marked(this.project.longDescription || '', { sanitize: true })
    }
  },
  methods: {
    editProject: function () {
      this.$store.commit('setProjectToEdit', { projectToEdit: this.project })
      this.$router.push('/form')
    },
    showProject: function () {
      this.$router.push('/project/' + this.project.title.replace(/\s+/g, ''))
    }
  }
}
</script>

<style>
.project-image {
  max-height: 60px;
  max-width: 60px;
  background: #c3c5c9;
  margin-right: 10px;
}
.contact-link {
    color: black;
    text-shadow: 1px 1px 1px #ccc;
    font-size: 1.4em;
    margin-left: 0.3em;
}
.projectTitle {
  font-size: 1.2em;
  cursor: pointer;
  cursor: hand;
}
img[alt=projectImage] { width: 250px; }
</style>
