<template>
  <div>
    <p>{{ msg }}</p>
    <p>then you can use the search bar to look up addresses, txIDs and other smart contract properties</p>
    <p>{{ searchField }}</p><br>
  </div>
</template>

<script>
export default {
  name: 'explorer',
  props: ['searchField'],
  data () {
    return {
      msg: 'the network explorer will come later...'
    }
  }
}
</script>
