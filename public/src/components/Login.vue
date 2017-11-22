<template>
      <v-layout row wrap>
        <v-flex>
          <v-text-field label="Username" id="username" name="username" v-model="username"></v-text-field>
          <v-text-field label="Password" id="password" name="password" v-model="password" ></v-text-field>
        </v-flex>
        <v-flex>
        <p>For adding new projects, you have to be logged in.</p>
        <v-btn color="success" v-on:click.native="submit()">Login</v-btn>
        <router-link to="/form">Form</router-link> <router-link to="/suggestions">Suggestions</router-link>
        <v-alert color="success" icon="check_circle" dismissible v-model="success">
          Login successful!
        </v-alert>
        <v-alert color="error" icon="warning" dismissible v-model="error">
          Error logging in!
        </v-alert>
      </v-flex>
    </v-layout>
</template>

<script>
  export default {
    name: 'LoginForm',
    data () {
      return {
        username: '',
        password: '',
        success: false,
        error: false
      }
    },
    methods: {
      submit: function () {
        var dataToSend = {
          username: this.username,
          password: this.password
        }

        fetch(('/api/login'), {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(dataToSend)
        })
        .then((response) => { return response.json() })
        .then((data) => {
          data.token ? this.success = true : this.error = true
          this.$store.commit('setToken', {token: data.token})
          this.$cookie.set('token', data.token, { expires: '1M' })
        })
        .catch((error) => {
          if (error) { this.error = true }
        })
      }
    }
  }

</script>
<style>
</style>
