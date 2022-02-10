<script setup>
// await 的表达式会自动编译成在 await 之后保留当前组件实例上下文的格式。
const p = new Promise((resolve) => {
  setTimeout(() => {
    resolve("down");
  }, 4000);
});

await p;
</script>

<template lang=""><div>TodoList</div></template>
