import toast from './toast.vue';
import Vue from 'vue';


const constructor = Vue.extend(toast);
const vm = new constructor().$mount();
vm.quene = [];
vm.run = false,
  vm.current = {},

  function show(option) {
    vm.quene.push(option);
    if (!vm.run) {
      show2();
    }
  }

function show2() {
  const a = vm.quene.shift();
  if (a != undefined) {
    vm.run = true;
    vm.$data.msg = a.msg;
    document.body.appendChild(vm.$el);
    setTimeout(function () {
      document.body.removeChild(vm.$el);
      show2();
    }, a.time);
  } else {
    vm.run = false;
  }
}

// function hide() {
//   if (vm.show) {
//     document.body.removeChild(vm.$el);
//     vm.show = false;
//   }
// }

export default {
  show,
};
