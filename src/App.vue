<template>
  <div id="app">
    <!-- <z-progress width="200" percent="20"></z-progress> -->
    <z-rate v-model="rate" @onclick="fn" :readonly="true"></z-rate>
  </div>
</template>

<script>
import zProgress from "@/components/zProgress";
import zRate from "@/components/zRate";
export default {
  components: { zProgress, zRate },
  data() {
    return {
      rate: 3
    };
  },
  methods: {
    fn(p) {
      console.log(p);
    }
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  padding: 50px;
}
</style>
