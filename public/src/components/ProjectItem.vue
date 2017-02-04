<template>
  <v-col xs12="xs12" sm6="sm6" md6="md6" lg4>
    <v-card>
      <v-card-row class="indigo projectcard-title">
        <v-card-title>
          <span>{{project.title}}</span>

          <v-spacer></v-spacer>
          <!-- <div>
            <v-btn icon="icon" v-bind:v-dropdown="project.title" class="white--text">
              <i class="fa fa-ellipsis-v"></i>
            </v-btn>
            <v-dropdown v-bind:id="project.title" top right origin="top right">
              <v-dropdown-item v-bind:item="{ href: 'javascript:;', text: 'Never show rewards' }"></v-dropdown-item>
              <v-dropdown-item v-bind:item="{ href: 'javascript:;', text: 'Remove Card' }"></v-dropdown-item>
              <v-dropdown-item v-bind:item="{ href: 'javascript:;', text: 'Send Feedback' }"></v-dropdown-item>
            </v-dropdown>
          </div> -->
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
        <a v-bind:href="project.contact.website" v-if="project.contact.website" class="contact-link"> <i class="fa fa-link fa-2x project-link"> </a>
        <a v-bind:href="project.contact.github" v-if="project.contact.github" class="contact-link"> <i class="fa fa-github fa-2x project-link"> </i></a>
        <a v-bind:href="project.contact.twitter" v-if="project.contact.twitter" class="contact-link"> <i class="fa fa-twitter fa-2x project-link"> </a>
        <a v-bind:href="project.contact.facebook" v-if="project.contact.facebook" class="contact-link"> <i class="fa fa-facebook fa-2x project-link"> </a>
        <a v-bind:href="project.contact.slack" v-if="project.contact.slack" class="contact-link"> <i class="fa fa-slack fa-2x project-link"> </a>
        <a v-bind:href="project.contact.reddit" v-if="project.contact.reddit" class="contact-link"> <i class="fa fa-reddit fa-2x project-link"></a>
      </v-card-row>
    </v-card>
  </v-col>
</template>

<script>

export default {
  name: 'project-item',
  props: ['project'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
    font-size: 1em;
    margin-right: 0.2em;
}
</style>
