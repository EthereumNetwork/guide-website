<template>
  <li>
    <h5>{{dapp.title}}</h5>
    <p>{{dapp.description}}</p>
  </li>
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
