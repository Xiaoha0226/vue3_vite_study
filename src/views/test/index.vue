<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import MyDirective from "@/components/MyDirective.vue";
import PropsAndEmits from "@/components/PropsAndEmits.vue";
import Expose from "@/components/Expose.vue";
import SuspenseComp from "@/components/Suspense.vue";
import { ref, onMounted } from "vue";

const exposeRef = ref(null);

onMounted(() => {
  // DOM 元素将在初始渲染后分配给 ref
  console.log(exposeRef.value);
  console.log(exposeRef.value.a);
  console.log(exposeRef.value.b);
});

const submitFun = (val) => {
  console.log("=====submitFun=====:", val);
};
</script>

<template>
  <MyDirective />
  <PropsAndEmits foo="foo" @submit="submitFun" />
  <Expose ref="exposeRef" />
  <SuspenseComp />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
