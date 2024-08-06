<script setup>
// import { defineProps } from 'vue'

defineProps({
  bg: {
    type: String,
    default: 'bg-gray-100'
  }
});
</script>

<template>
  <div v-bind:class="`${bg} p-6 rounded-lg shadow-md`">
    <!-- Pass children inside -->
    <slot></slot>
  </div>
</template>
