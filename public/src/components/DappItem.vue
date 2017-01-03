<template>
<v-list-item>
    <v-list-item-avatar class="dapp-listitem-color" large>description</v-list-item-avatar>
    <v-list-item-title>
      <span>{{dapp.title}}</span>
      <v-list-item-sub-title>{{dapp.description}}</v-list-item-sub-title>
    </v-list-item-title>
<!--    <v-list-item-action>
      <v-list-item-action-title>...</v-list-item-action-title>
      <a href="#!">
        <v-icon class="grey--text darken-1">email</v-icon>
    </v-list-item-action>-->
</v-list-item>


</template>

<script>
export default {
  name: 'dapp-item',
  props: ['dapp'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style>
.dapp-item-color
{
color:red;
}
</style>
