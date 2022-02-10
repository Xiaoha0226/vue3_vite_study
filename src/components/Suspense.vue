<template>
  <suspense>
    <template #default>
      <TodoList />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </suspense>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
const TodoList = defineAsyncComponent(() => import("./TodoList.vue"));
</script>
