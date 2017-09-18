<template>
  <v-flex>
    <v-col xs12="xs12" sm4="sm4" md6="md6" lg4 pb-2 @click="showProject" >
      <v-card>
          <v-card-title class="projectTitle grey darken-1" grey >
            <span>{{project.title}}</span>
          </v-card-title>
        <v-card-text>
            <img v-bind:src="project.logoUrl || '/NA.png'" class="project-image">
            <div>
              <p>{{project.shortDescription}}</p>
              <p>{{project.shortDescriptionCN}}</p>
            </div>
        </v-card-text>
      </v-card>

    </v-col>
  </v-flex>
</template>

<script>
var marked = require('marked')
export default {
  name: 'project-item',
  props: ['project'],
  methods: {
    showProject: function () {
      this.$router.push('/project/' + this.project.title.replace(/\s+/g, '_'))
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
.projectTitle {
  font-size: 1.2em;
  cursor: pointer;
  cursor: hand;
}
</style>
