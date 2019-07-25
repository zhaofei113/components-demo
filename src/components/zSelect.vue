<template>
  <div>
    <div class="select" @click="fn">
      <div v-if="multi === false">{{value.label}}</div>
      <div v-else>
        <div v-for="(v,k) in value" :key="k">{{v.label}}</div>
      </div>
      <div class="pull-wrapper" v-show="show">
        <div v-for="(v,k) in optionList" :key="k" class="item" @click.stop="fn1(v)">{{v.label}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      val:this.multi ===false?{}:[],
    }
  },
  props:['optionList','multi','value'],
  methods: {
    fn () {
      this.show = !this.show
    },
    fn1 (p) {
      if(this.multi ===false){
        this.val = p; 
      }else{
        this.val.push(p);  
      } 
      console.log(this.val);
      this.$emit('input',this.val);
    }
  }
}
</script>
<style>
.select{
  box-sizing: border-box;
  width:150px;
  height:30px;
  position:relative;
   border:1px solid gray;
   border-radius: 10px;
   display: flex;
   align-items: center;
   justify-content: center;
}
.select .pull-wrapper{
  box-sizing: border-box;
  position:absolute;
  top:32px;
  left:0px;
  width:100%;
  max-height:62px;
  overflow: auto;
  border:1px solid gray;
   border-radius: 5px;
}
.item{
  box-sizing: border-box;
  width:100%;
  height:20px;
  /* border-bottom:1px solid red; */
}
.item:hover{
  background:gray;
}
</style>
