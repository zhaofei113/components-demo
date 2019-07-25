<template>
  <div class="progress-container">
    <div class="progress" :style="{'width':width+'px'}">
      <div class="progress-background" :style="{'width':width2+'px'}"></div>
    </div>
    <div class="percent">{{percent}}%</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  computed:{
    width2(){
      return this.width*this.percent*0.01;
    }
  },
  props:['width','percent'],
  methods: {
  }
}
</script>
<style>
.progress-container{
  display: flex;
  align-items: center;
}
.progress{
  height:10px;
  border-radius: 5px;
  background:gray;
  position: relative;
}
.progress-background{
  background:blue;
  position: absolute;
  top:0;
  left:0;
  height:10px;
   border-radius: 5px;
}
.percent{
  font-size:12px;
}
</style>
