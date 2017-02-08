<template>

    <v-col xs12="xs12" sm6="sm6" md6="md6" lg4 mt-3>
      <!-- <v-modal :id="project._id">
        <v-card>
          <v-card-text>
            <p class="text-xs-center">{{project.title}}, project id: {{project._id}}</p>
            <p class="text-xs-center">Editing not working yet! waiting for vuetify 0.8.8</p>
            <v-row>
              <v-text-input label="Title" id="title" name="title" :v-model="project.title"  ></v-text-input>
              <v-text-input label="Short description" id="shortDescription" name="shortDescription" :v-model="project.shortDescription"></v-text-input>
              <v-text-input label="Long description" id="longDescription" name="longDescription" :v-model="project.longDescription"></v-text-input>
              <v-col xs12="xs12" sm6="sm6" md6="md6" lg4>
                <v-text-input label="Logo Url" id="logoUrl" name="logoUrl" :v-model="project.logoUrl"></v-text-input>
              </v-col>
              <v-col xs12="xs12" sm6="sm6" md6="md6" lg4>
                <v-text-input label="Latest News" id="latestNews" name="latestNews" :v-model="project.latestNews"></v-text-input>
              </v-col>
              <v-col xs12="xs12" sm6="sm6" md6="md6" lg4>
                <v-text-input label="Github" id="github" name="github" :v-model="project.contact.github"></v-text-input>
              </v-col>
              <v-col xs12="xs12" sm6="sm6" md6="md6" lg4>
                <v-text-input label="Website" id="website" name="website" :v-model="project.contact.website"></v-text-input>
              </v-col>
              <v-col xs12="xs12" sm6="sm6" md6="md6" lg4>
                <v-text-input label="Twitter" id="twitter" name="twitter" :v-model="project.contact.witter"></v-text-input>
              </v-col>
              <v-col xs12="xs12" sm6="sm6" md6="md6" lg4>
                <v-text-input label="Facebook" id="facebook" name="facebook" :v-model="project.contact.facebook"></v-text-input>
              </v-col>
              <v-col xs12="xs12" sm6="sm6" md6="md6" lg4>
                <v-text-input label="Reddit" id="reddit" name="reddit" :v-model="project.contact.reddit"></v-text-input>
              </v-col>
              <v-col xs12="xs12" sm6="sm6" md6="md6" lg4>
                <v-text-input label="Slack" id="slack" name="slack" :v-model="project.contact.slack"></v-text-input>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-row actions>
            <v-btn v-on:click.native.stop="$vuetify.bus.pub('modal:toggle:modal')">Cancel</v-btn>
            <v-spacer></v-spacer>
            <v-btn v-on:click.native.stop="$vuetify.bus.pub('modal:toggle:modal')" class="green white--text">Submit</v-btn>
          </v-card-row>
        </v-card>
      </v-modal> -->

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
        </v-modal>

      <v-card>
        <v-card-row class="indigo projectcard-title">
          <v-card-title>
            <span>{{project.title}}</span>

            <v-spacer></v-spacer>
              <!-- <v-btn icon="icon" v-modal="{ value: project._id }" v-if="this.$store.state.token" class="white--text"><i class="fa fa-pencil project-link"></v-btn> -->
              <v-btn flat small v-modal="{ value: project._id }" class="white--text"><i class="fa fa-info contact-link"></v-btn>
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
          <a v-bind:href="project.contact.website" v-if="project.contact.website" class="contact-link"> <i class="fa fa-link project-link"> </a>
          <a v-bind:href="project.contact.github" v-if="project.contact.github" class="contact-link"> <i class="fa fa-github project-link"> </i></a>
          <a v-bind:href="project.contact.twitter" v-if="project.contact.twitter" class="contact-link"> <i class="fa fa-twitter project-link"> </a>
          <a v-bind:href="project.contact.facebook" v-if="project.contact.facebook" class="contact-link"> <i class="fa fa-facebook project-link"> </a>
          <a v-bind:href="project.contact.slack" v-if="project.contact.slack" class="contact-link"> <i class="fa fa-slack project-link"> </a>
          <a v-bind:href="project.contact.reddit" v-if="project.contact.reddit" class="contact-link"> <i class="fa fa-reddit project-link"></a>
          <a v-bind:href="project.contact.email" v-if="project.contact.email" class="contact-link"> <i class="fa fa-at project-link"></a>
          <a v-bind:href="project.contact.blog" v-if="project.contact.email" class="contact-link"> <i class="fa fa-newspaper-o project-link"></a>
        </v-card-row>
      </v-card>
    </v-col>
</template>

<script>
var marked = require('marked')
export default {
  name: 'project-item',
  props: ['project'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.project.longDescription || '', { sanitize: true })
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
</style>
