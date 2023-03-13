<template>
  <div class="flex justify-center items-center p-16">
    <div class="p-16 rounded flex flex-col gap-y-16 bg-gray-100 drop-shadow-xl">
      <div>
        <p class="text-h2">Recupera password</p>
        <p class="font-light">Inserisci l'email utilizzata in fase di registrazione</p>
      </div>
      <div>
        <input type="text" class="rounded outline-4 outline-gray-900 w-full p-4" v-model="email"/>
      </div>
      <Button color="green" @click="recover">
        <div>Recupera</div>
      </Button>
    </div>
  </div>
</template>

<script>
export default {
  name: "recover-password",
  data() {
    return {
      email: ''
    }
  },
  methods: {
    async recover() {
      await useApi().post('/v1/public/password/request-reset', {email: this.email }, true).then(res => {
        console.log(res);
      })
    }
  }
}
</script>

<style scoped>

</style>