<template>
  <div id="app">
    <button @click="clickfn">dianji</button>
    <!-- <z-progress width="200" percent="20"></z-progress> -->
    <!-- <z-rate v-model="rate" @onclick="fn" :readonly="true"></z-rate> -->
    <!-- <toast></toast> -->
  </div>
</template>

<script>
import zProgress from "@/components/zProgress";
import zRate from "@/components/zRate";
import Toast from "@/components/toast/toast.js";

export default {
  components: { zProgress, zRate },
  data() {
    return {
      msg: ""
    };
  },
  created() {
    // Toast.show({ msg: Math.random(0, 1), time: 2000 });
  },
  methods: {
    clickfn() {
      // Toast.show({ msg: Math.random(0, 1), time: 2000 });
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
