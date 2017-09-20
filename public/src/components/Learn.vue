<template>
<v-container fluid>
  <p>{{ $t('learn.description') }}</p>
  <v-expansion-panel class="pl-1">
    <div v-for="topic in translations.learn.topics">
      <h2>{{ topic.headline }}</h2>
      <div v-for="paragraph in topic.paragraphs">
        <p>{{ paragraph.text }}</p>
      </div>
      <v-expansion-panel-content class="grey darken-2 white--text">
        <div slot="header">Links</div>
        <v-card>
          <v-card-text class="grey lighten-3 black--text">
            <div v-for="link in topic.links">
              <a :href="link.link" target="_blank" class="learnLink">{{link.title}}</a> {{link.desc}}<br>
            </div>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
      </br>
    </div>
    <h2>{{ translations.learn.FAQs.headline }}</h2>
    <p>{{ translations.learn.FAQs.description }}</p>
      <v-expansion-panel-content v-for="question in translations.learn.FAQs.questions" :key="question.question" class="grey darken-2 white--text">
        <div slot="header">{{ question.question }}</div>
        <v-card>
          <v-card-text class="grey lighten-3 black--text">
            <div>{{ question.answer }}</div></br>
            <div>Links:</div>
            <div v-for="link in question.links">
              <a :href="link.link" target="_blank" class="learnLink">{{link.title}}</a><br>
            </div>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
  </v-expansion-panel>
  </br>
  <div class="comments">
    <VueDisqus shortname="ethereumnetwork" :identifier="$route.path" :url="'https://ethereum.network' + $route.path"></VueDisqus>
  </div>
</v-container>
</template>

<script>
import VueDisqus from 'vue-disqus/VueDisqus.vue'

export default {
  name: 'learn',
  data () {
    return {
      msg: 'better formation and organization of developer resources coming soon...'
    }
  },
  components: {
    VueDisqus
  },
  computed: {
    price: function () {
      return this.$store.state.price
    },
    translations: function () {
      let key = this.$store.state['vue-i18n-manager'].currentLanguage.translationKey
      return this.$store.state['vue-i18n-manager'].translations[key] || { learn: { FAQs: {} } }
    }
  }
}
</script>

<style>
</style>
