<script setup>
import { ref } from "vue";

const h1Text = ref("");
let text = "123";

const vMyDirective = {
  beforeMount: (el) => {
    // 在元素上做些操作
    h1Text.value = el.innerText;
    text = "222";
    console.log("=====text:", text);
  },
};
</script>

<template lang="">
  <h1 v-my-directive>This is a Heading</h1>
  <div>{{ h1Text }}</div>
  <div>{{ text }}</div>
</template>

<style lang=""></style>
