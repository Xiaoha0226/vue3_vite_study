<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  foo: {
    type: String,
    default: "",
  },
});

const emit = defineEmits({
  click: null,
  submit: (payload) => {
    if (payload.email && payload.password) {
      return true;
    } else {
      console.warn(`Invalid submit event payload!`);
      return false;
    }
  },
});

const submitButtonClick = () => {
  emit("submit", {});
};
</script>

<template>
  <div>{{ foo }}</div>
  <button @click="submitButtonClick">submit</button>
</template>
