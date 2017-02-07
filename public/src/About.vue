<template>
  <div>
    <p>some about text</p>
  </div>
</template>

<script>
export default {
  name: 'explorer',
  props: ['searchField'],
  data () {
    return {
      msg: 'the network explorer is in the works...',
      blockNumber: 0
    }
  },

  beforeCreate () {
    fetch('/api/blocknumber')
    .then((response) => { return response.json() })
    .then((data) => { this.blockNumber = data })
  },
}
</script>
