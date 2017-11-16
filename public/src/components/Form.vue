<template>
    <div>
      <v-layout row wrap>
        <v-flex xs12>
          <v-text-field label="Title" id="title" name="title" v-model="project.title"  ></v-text-field>
        </v-flex>
        <v-flex xs12="xs12" sm6="sm6" md6="md6" lg6>
          <v-text-field label="English short description" id="shortDescription" name="shortDescription" v-model="project.shortDescription"></v-text-field>
        </v-flex>
        <v-flex xs12="xs12" sm6="sm6" md6="md6" lg6>
          <v-text-field label="Chinese short description" id="shortDescriptionCN" name="shortDescriptionCN" v-model="project.shortDescriptionCN"></v-text-field>
        </v-flex>
        <v-flex xs12="xs12" sm6="sm6" md6="md6" lg6>
          <v-text-field label="English tags" id="tags" name="tags" hint="tags to find this project" v-model="project.tags"></v-text-field>
        </v-flex>
        <v-flex xs12="xs12" sm6="sm6" md6="md6" lg6>
          <v-text-field label="Chinese Tags" id="tagsCN" name="tagsCN" hint="Chinese tags to find this project" v-model="project.tagsCN"></v-text-field>
        </v-flex>
        <v-flex xs12>
          English long description with
          <v-dialog v-model="dialog" lazy absolute>
            <v-flex class="dialogactivator" slot="activator">Markdown</v-flex>
            <v-card>
              <v-card-title primary-title>
                <h3 class="headline mb-0">Markdown Help</h3>
                <div>
                  Markdown in the long description will be rendered accordingly, e.g.:</br></br>
                  # headers</br>
                  **bold**</br>
                  [link](link url)</br>
                  ![](image url)</br>
                  [![](image url)](link to larger image)</br>
                  - list item 1</br>
                  - list item 2</br>
                  ```code```</br>
                  ...
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat v-on:click.native="dialog = false">Cancel</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <textarea :value="project.longDescription" @input="update"></textarea>
          Chinese long description
          <textarea :value="project.longDescriptionCN" @input="updateCN"></textarea>
          <v-checkbox v-bind:label="'Chinese translation done'" v-model="translatedCN" light></v-checkbox>
          <div v-html="compiledMarkdown"></div>
        </v-flex>
        <v-flex xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-field label="Owner" id="owner" name="owner" v-model="project.owner"></v-text-field>
        </v-flex>
        <v-flex xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-field label="Logo Url" id="logoUrl" name="logoUrl" v-model="project.logoUrl"></v-text-field>
        </v-flex>
        <v-flex xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-field label="Website" id="website" name="website" v-model="project.website"></v-text-field>
        </v-flex>
        <v-flex xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-field label="Github" id="github" name="github" v-model="project.github"></v-text-field>
        </v-flex>
        <v-flex xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-field label="Whitepaper" id="whitepaper" name="whitepaper" v-model="project.whitepaper"></v-text-field>
        </v-flex>
        <v-flex xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-field label="Twitter" id="twitter" name="twitter" v-model="project.twitter"></v-text-field>
        </v-flex>
        <v-flex xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-field label="Facebook" id="facebook" name="facebook" v-model="project.facebook"></v-text-field>
        </v-flex>
        <v-flex xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-field label="Reddit" id="reddit" name="reddit" v-model="project.reddit"></v-text-field>
        </v-flex>
        <v-flex xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-field label="Slack" id="slack" name="slack" v-model="project.slack"></v-text-field>
        </v-flex>
        <v-flex xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-field label="LinkedIn" id="linkedin" name="linkedin" v-model="project.linkedin"></v-text-field>
        </v-flex>
        <v-flex xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-field label="WeChat" id="wechat" name="wechat" v-model="project.wechat"></v-text-field>
        </v-flex>
        <v-flex xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-field label="Email" id="email" name="email" v-model="project.email"></v-text-field>
        </v-flex>
        <v-flex xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-field label="Blog" id="blog" name="blog" v-model="project.blog"></v-text-field>
        </v-flex>
        <v-flex xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-field label="etherian.world link" id="etherianLink" name="etherianLink" v-model="project.etherianLink"></v-text-field>
        </v-flex>
        <v-flex xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-field label="Mainnet Contract Address" id="contractAddrMain" name="contractAddrMain" v-model="project.contractAddrMain"></v-text-field>
        </v-flex>
        <v-flex xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-field label="Testnet Contract Address" id="contractAddrTest" name="contractAddrTest" v-model="project.contractAddrTest"></v-text-field>
        </v-flex>
        <v-flex xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-field label="License" id="license" name="license" v-model="project.license"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs3>
          <v-btn success v-on:click.native="submit()" v-if="!IsProgress">Save</v-btn>
          <v-btn error v-on:click.native="remove()" v-if="token">Delete</v-btn>
        </v-flex>
        <v-flex xs9>
          <v-alert hide-icon success dismissible v-model="success">
            {{ alertMsg }}
          </v-alert>
          <v-alert hide-icon error dismissible v-model="error">
            An error occurred: {{ alertMsg }}
          </v-alert>
          <div v-if="token">You are logged in and can update projects directly.</div>
          <div v-else>You can add and edit projects, we will integrate them within a day after checking for spam.</div>
          <div v-if="project._id">editing: {{project.title}}, {{project._id}}, last edited by {{project.creator}}</div>
          <v-btn small v-if="IsProgress"><v-progress-circular class="green--text" indeterminate></v-progress-circular>Progressing..</v-btn>
        </v-flex>
      </v-layout>
    </div>
</template>

<script>
  var marked = require('marked')
  export default {
    name: 'projectForm',
    data () {
      return {
        project: this.$store.state.projectToEdit,
        translatedCN: this.$store.state.projectToEdit.translatedCN,
        IsProgress: false,
        activeColor: 'Red',
        alertMsg: '',
        success: false,
        error: false,
        dialog: false
      }
    },
    beforeCreate () {
      this.$store.state.token = this.$cookie.get('token')
    },
    computed: {
      token () {
        return this.$store.state.token
      },
      compiledMarkdown: function () {
        return marked(this.project.longDescription || '', { sanitize: true, smartLists: false })
      }
    },
    methods: {

      submit: function () {
        this.IsProgress = true
        this.project.translatedCN = this.translatedCN
        this.project.originalId = this.project.originalId || this.project._id
        let token = this.$store.state.token
        let body = this.project
        body.auth = token
        let path = token ? 'saveprojects' : 'savesuggestion'
        fetch(('/api/' + path), {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        })
        .then((response) => { return response.json() })
        .then((data) => {
          this.alertMsg = data.message
          data.result ? this.success = true : this.error = true
          this.IsProgress = false
        })
        .catch((error) => {
          this.IsProgress = false
          if (error) { this.error = true }
        })
      },

      remove: function () {
        this.IsProgress = true
        fetch(('/api/deletesuggestion'), {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': ('JWT ' + this.$store.state.token)
          },
          body: JSON.stringify(this.project)
        })
        .then((response) => { return response.json() })
        .then((data) => {
          this.alertMsg = data.message
          data.result ? this.success = true : this.error = true
          this.IsProgress = false
        })
        .catch((error) => {
          this.IsProgress = false
          if (error) { this.error = true }
        })
      },

      update: function (e) {
        this.project.longDescription = e.target.value
      },
      updateCN: function (e) {
        this.project.longDescriptionCN = e.target.value
      }
    }
  }

</script>
<style scoped>
  textarea {
      display:inline-block;
      border: solid 1px #000;
      min-height:10px;
      width: 99%;
  }
</style>
