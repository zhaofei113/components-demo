<template>
  <div>
    <div>{{value}}</div>
    <div @click="fn2">ffff</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props:['value'],
  methods: {
      fn2(){
        this.$emit('input','fff');
      }
  }
}
</script>
<style>
</style>
