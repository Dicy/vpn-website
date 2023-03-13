<template>
  <div class="flex flex-col justify-center items-center">
    <div class="bg-gray-100 drop-shadow-xl p-16 rounded flex flex-col gap-y-16">
      <p class="text-h2">Registrazione</p>
      <div>
        <p class="font-light">Nome</p>
        <input type="text" class="rounded w-full p-4" placeholder="Quello che vuoi, non importa" v-model="name"/>
      </div>

      <div>
        <p class="font-light">Email</p>
        <input type="text" class="rounded w-full p-4" placeholder="info@pippo.com" v-model="email"/>
      </div>

      <div>
        <div>
          <p class="font-light">Password</p>
          <input type="password" class="rounded w-full p-4" placeholder="Password" v-model="password"/>
          <p v-if="password !== confirmPassword || isDifferent" class="text-tiny text-red-400">Password differenti</p>
        </div>

        <div>
          <p class="font-light">Conferma Password</p>
          <input type="password" class="rounded w-full p-4" placeholder="Conferma Password" v-model="confirmPassword"/>
        </div>
      </div>

      <Button color="green" @click="index">
        <div>Registrati</div>
      </Button>


    </div>
  </div>

</template>

<script>
export default {
  name: "register",
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      isDifferent: false
    }
  },
  methods: {
    async register() {
      if (this.password !== this.confirmPassword) {
        this.isDifferent = true
        return
      }

      await useApi().post('/v1/public/register', {
        name: this.name,
        email: this.email,
        password: this.password
      }, false).then((res) => {
        console.log(res)
      })

    }
  }
}
</script>

<style scoped>

</style>