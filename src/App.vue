<template>
  <div id="app">
    <z-progress width="200" percent="20"></z-progress>
  </div>
</template>

<script>
import zProgress from '@/components/zProgress';
export default {
  components:{zProgress}
}
</script>

<style>
*{
    padding:0;
    margin:0;
}
</style>
