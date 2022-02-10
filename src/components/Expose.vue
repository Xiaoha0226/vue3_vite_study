<script setup>
import { ref, defineExpose } from "vue";

const a = 1;
const b = ref(2);

defineExpose({
  a,
  b,
});
</script>

<template lang="">
  <div>{{ a }}</div>
  <div>{{ b }}</div>
</template>
