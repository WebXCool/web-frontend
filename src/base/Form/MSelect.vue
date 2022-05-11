<template>
  <el-select :value="value"
             @change="selChange"
             :class="pClass"
             :style="pStyle">
    <el-option v-for="item in options"
               :key="item.value"
               :label="item.label"
               :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
export default {
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    // options: Array,
    value: String | Number,
    pClass: {
      type: String,
      default: "m-select",
    },
    pStyle: {
      type: Object,
      default () {
        return {
          flex: 1,
        };
      },
    },
    options: {
      type: Array,
      default () {
        return [];
      },
    },
  },
  data () {
    return {};
  },
  created () {
    console.log("value", this.value);
  },
  methods: {
    selChange (v) {
      this.$emit("change", v);
    },
  },
};
</script>

<style lang="scss">
.m-select {
  .el-input__inner {
    border: 0;
    // padding-right: 0.3em;
    background: linear-gradient(128deg, #e6e7ed 0%, #f7f8fa 100%);
    box-shadow: torem(3) torem(3) torem(5) torem(0) #bdc1d1,
      torem(-3) torem(-3) torem(5) torem(0) #fafbfc,
      inset torem(1) torem(1) torem(16) torem(0) #e9eaf2,
      inset torem(-1) torem(-1) torem(16) torem(0) #f5f6fa;
    border-radius: torem(4);
  }
}
</style>
