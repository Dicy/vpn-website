<template>
  <div>
    Login
    <input type="text" v-model="token" class="shadow-lg p-8" />
  </div>
</template>

<script setup>
const token = useToken()
</script>

<style scoped>

</style>
