<template>
  <el-input v-model="value"
            class="base_search"
            :placeholder="placeholder"
            v-on:keyup.enter.native="search">
    <el-button @click="search"
               slot="append"
               icon="el-icon-search"></el-button>
  </el-input>
</template>

<script >
export default {
  props: {
    placeholder: {
      type: String,
      default: ""
    }
  },
  data () {
    return {
      value: ""
    }
  },
  methods: {
    search () {
      this.$emit("search", this.value);
      this.value = "";
    }
  }
};
</script>

<style lang="scss" >
div.base_search {
  width: 3rem;
  margin-right: 0.2rem;
  .el-input__inner {
    border-radius: 0.17rem 0 0 0.17rem;
    border: 0;
    height: torem(34);
  }
  .el-input-group__append {
    border-radius: 0 0.17rem 0.17rem 0;
  }
}
</style>
