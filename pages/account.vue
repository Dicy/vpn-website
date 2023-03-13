<template>
  <div class="flex p-32">
    <div class="max-w-screen-lg mx-auto w-full">
      <h1 class="text-h1 mb-20">Account</h1>
      <p>Questa pagina è accessibile perché hai effettuato l'accesso</p>
      <p>Se vuoi, puoi fare il logout</p>
      <Button color="blue" @click="logout" :disabled="loading" class="cursor-pointer max-w-xs mt-24">
        <router-link to="/logout">Logout</router-link>
      </Button>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"]
});
</script>

<style scoped>

</style>
