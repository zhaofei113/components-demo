<template>
  <div>
    <button @click="fn">dd</button>
    <!-- <z-select :optionList="optionList" v-model="val" :multi="false"></z-select> -->
    <z-progress width="400" percent="10"></z-progress>
    <svg xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="100" height="100">

    </rect>
    </svg>
    <div id="svg">

    </div>
  </div>
</template>

<script>
import zSelect from '@/components/zSelect'
import zProgress from '@/components/zProgress'
export default {
 components: { zSelect,zProgress },
  data () {
    return {
      testvalue:'12',
      val: {
        label:'菠萝',
        value: 2
      },
      optionList: [{
        label:'苹果',
        value: 1
      }, {
        label:'菠萝',
        value: 2
      }]
    }
  },
  methods: {
    fn(){
      var a = document.createElementNS('http://www.w3.org/2000/svg','svg');
      var b = document.createElementNS('http://www.w3.org/2000/svg','rect');
      b.setAttribute('x', '10');
      b.setAttribute('y', '10');
      b.setAttribute('width', '100');
      b.setAttribute('height', '100');
      a.appendChild(b);
      document.getElementById('svg').appendChild(a);
    }
  }
}
</script>
<style>
</style>
