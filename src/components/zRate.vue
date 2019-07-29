<template>
  <div class="rate-component">
    <div
      class="item"
      v-for="(v,k) in list"
      :key="k"
      :class="{'choose':v.id <= rate}"
      @click="fn(v.id)"
    ></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        },
        {
          id: 4
        },
        {
          id: 5
        }
      ]
    };
  },
  props: ["value", "readonly"],
  computed: {
    rate: {
      get: function() {
        return this.value;
      },
      set: function(value) {
        this.$emit("input", value);
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    fn(id) {
      if (!this.readonly) {
        this.rate = id;
        this.$emit("onclick", id);
      }
    }
  }
};
</script>
<style>
.rate-component {
  display: flex;
}
.item {
  margin-right: 10px;
  width: 30px;
  height: 30px;
  background: gray;
}
.choose {
  background: red;
}
</style>
