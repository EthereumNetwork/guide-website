<template>

    <v-col xs12="xs12" sm6="sm6" md6="md6" lg4 mt-3>

      <v-modal :id="project._id">
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
      </v-modal>

      <v-card>
        <v-card-row class="indigo projectcard-title">
          <v-card-title class="projectTitle">
            <span>{{project.title}}</span>

            <v-spacer></v-spacer>
              <div @click="editProject" v-if="this.$store.state.token" ><i class="fa fa-pencil project-link"></div>
              <v-btn flat small v-modal="{ value: project._id }"><i class="fa fa-info contact-link"></v-btn>
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
          <a v-bind:href="project.contact.website" v-if="project.contact.website" target="_blank" class="contact-link"> <i class="fa fa-link project-link"> </a>
          <a v-bind:href="project.contact.github" v-if="project.contact.github" target="_blank" class="contact-link"> <i class="fa fa-github project-link"> </i></a>
          <a v-bind:href="project.contact.twitter" v-if="project.contact.twitter" target="_blank" class="contact-link"> <i class="fa fa-twitter project-link"> </a>
          <a v-bind:href="project.contact.facebook" v-if="project.contact.facebook" target="_blank" class="contact-link"> <i class="fa fa-facebook project-link"> </a>
          <a v-bind:href="project.contact.slack" v-if="project.contact.slack" target="_blank" class="contact-link"> <i class="fa fa-slack project-link"> </a>
          <a v-bind:href="project.contact.reddit" v-if="project.contact.reddit" target="_blank" class="contact-link"> <i class="fa fa-reddit project-link"></a>
          <a v-bind:href="'mailto:' + project.contact.email" v-if="project.contact.email" class="contact-link"> <i class="fa fa-at project-link"></a>
          <a v-bind:href="project.contact.blog" v-if="project.contact.email" target="_blank" class="contact-link"> <i class="fa fa-newspaper-o project-link"></a>
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
      console.log(this.$store.state)
      this.$router.push('form')
    }
  }
}
</script>

<style>
.project-image {
  height: 60px;
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
}
img[alt=projectImage] { width: 250px; }
</style>
