<template>
  <div>
    <p>some text about {{$route.params.title}}</p>
  </div>
</template>

<script>
export default {
  name: 'project',
  data () {
    return {
      msg: 'the network explorer is in the works...'
    }
  }
}
</script>
