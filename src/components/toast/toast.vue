<template>
  <div class="toast-component">
    <div class="toast">{{msg}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: ""
    };
  }
};
</script>

<style>
.toast-component {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.toast {
  width: 200px;
  background: rgba(0, 0, 0, 0.3);
  padding: 10px;
  border-radius: 15px;
}
</style>
