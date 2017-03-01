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
          <div @click="editProject" data-wenk="Suggest edits"><i class="fa fa-pencil contact-link"></div>
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
