<script setup>

const email = 'email'

const props = defineProps({
  foo: String
})

const emit = defineEmits({
    click: null,
    submit: payload => {
      if (payload.email&& payload.password) {
        return true
      } else {
        console.warn(`Invalid submit event payload!`)
        return false
      }
    }
})

const submitButtonClick = ()=>{
    emit('submit',{})
}

</script>

<template lang="">
    <div>{{foo}}</div>
    <button @click="submitButtonClick">submit</button>
</template>
