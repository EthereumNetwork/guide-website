<template>
  <div v-if="project">
        <v-card>
          <v-container fluid grid-list-lg>
            <v-layout row wrap>
              <v-flex md1 lg1 xs3>
                <v-card-media :src="project.logoUrl || '/NA.png'" height="60px" contain>
                </v-card-media>
              </v-flex>
              <v-flex md11 lg11 xs9>
                <div>
                  <div class="headline">{{project.title}}</div>
                </div>
              </v-flex>
              <span v-html="compiledMarkdown"></span>
            </v-layout>
          </v-container>
          <v-card-actions>
            <a v-bind:href="project.website" v-if="project.website" target="_blank"> <i class="icon-link contact-link"> </i></a>
            <a v-bind:href="project.github" v-if="project.github" target="_blank"> <i class="icon-github-squared contact-link"> </i></a>
            <a v-bind:href="project.whitepaper" v-if="project.whitepaper" target="_blank"> <i class="icon-newspaper contact-link"> </i></a>
            <a v-bind:href="project.linkedin" v-if="project.linkedin" target="_blank"> <i class="icon-linkedin-squared contact-link"> </i></a>
            <a v-bind:href="project.twitter" v-if="project.twitter" target="_blank"> <i class="icon-twitter-squared contact-link"> </i></a>
            <a v-bind:href="project.facebook" v-if="project.facebook" target="_blank"> <i class="icon-facebook-official contact-link"> </i></a>
            <a v-bind:href="project.wechat" v-if="project.wechat" target="_blank"> <i class="icon-wechat contact-link"> </i></a>
            <a v-bind:href="project.slack" v-if="project.slack" target="_blank"> <i class="icon-slack contact-link"></i> </a>
            <a v-bind:href="project.reddit" v-if="project.reddit" target="_blank"> <i class="icon-reddit contact-link"></i></a>
            <a v-bind:href="'mailto:' + project.email" v-if="project.email"> <i class="icon-mail contact-link"></i></a>
            <a v-bind:href="project.blog" v-if="project.blog" target="_blank"> <i class="icon-newspaper contact-link"></i></a>
            <a v-bind:href="project.etherianLink" v-if="project.etherianLink" target="_blank"> <i class="icon-newspaper contact-link"></i></a>
            <v-spacer></v-spacer>
            <div @click="editProject" data-wenk="Suggest edits" data-wenk-pos="left"><i class="icon-pencil contact-link"></i></div>
          </v-card-actions>
        </v-card>
    <div class="comments">
      <VueDisqus shortname="ethereumnetwork" :identifier="$route.path" :url="'https://ethereum.network' + $route.path"></VueDisqus>
    </div>
  </div>
  <div v-else>
    Unfortunately we couldn't find any information about {{$route.params.title}}
  </div>
</template>

<script>
var marked = require('marked')
import VueDisqus from 'vue-disqus/VueDisqus.vue'
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
      let toBeCompiled = ''
      if (this.$store.state['vue-i18n-manager'].currentLanguage.translationKey === 'cn') {
        toBeCompiled = this.project.longDescriptionCN
      } else {
        toBeCompiled = this.project.longDescription
      }
      return marked(toBeCompiled || '', { sanitize: true })
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
  },
  components: {
    VueDisqus
  }
}
</script>

<style >
.edit-link {
  cursor: pointer;
  cursor: hand;
}
img {
  max-width: 100%;
  max-height: 250px;
}
.project-image {
  max-height: 60px;
  max-width: 60px;
  background: #c3c5c9;
  margin-right: 10px;
}
</style>
