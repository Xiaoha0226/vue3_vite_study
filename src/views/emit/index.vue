<script setup>
import Button from "./button.vue";

const handleClick = (val) => {
  console.log("===handleClick", val);
};
</script>

<template>
  <!-- 如果组件里面没有定义emit参数，那么click就自带原生属性 -->
  <Button @click="handleClick" />
</template>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
