<script setup>
defineEmits({
  click: null,
});
</script>

<template>
  <button @click="$emit('click', $event)">OK</button>
</template>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
