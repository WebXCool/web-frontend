<template>
  <div @click="$emit('click')"
       :class="[pClass, type]"
       :style="{ width }"
       class="flex_center">
    <slot></slot>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: {
    pClass: {
      type: String,
      default: "btn",
    },
    type: {
      type: String,
      default: "",
    },
    width: {
      type: String,
      default: "1.8rem",
    },
  },
};
</script>

<style lang="scss">
body {
  .large-btn {
    cursor: pointer;
    background-size: cover;
    background-position: center;
    width: 1.8rem;
    height: 0.6rem;
  }
  .btn {
    height: 0.4rem;
    border-radius: 0.08rem;
    min-height: torem(32);
  }
  .primary {
    box-shadow: torem(3) torem(3) torem(10) torem(0) rgba(116, 228, 159, 0.81);
    background: #1dd061;
    color: #fff;
    &:hover {
      color: #fff;
    }

    &:hover,
    &:focus {
      background: #4ad981;
      border-color: #4ad981;
      color: #ffffff;
    }
  }

  .defult {
    background: linear-gradient(128deg, #e6e7ed 0%, #f7f8fa 100%)
      linear-gradient(147deg, #40485d 0%, #606a82 100%);
    box-shadow: torem(4) torem(3) torem(5) torem(0) #bdc1d1,
      torem(-3) torem(-3) torem(5) torem(0) #fafbfc,
      torem(1) torem(1) torem(16) torem(0) #e9eaf2,
      torem(-1) torem(-1) torem(16) torem(0) #f5f6fa;
    color: #757e95;
  }
}
</style>
