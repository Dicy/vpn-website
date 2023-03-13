<template>
  <div class="flex justify-center items-center p-16">
    <div class="p-16 rounded flex flex-col gap-y-16 bg-gray-100 drop-shadow-xl">
      <div>
        <p class="text-h2">Resetta Password</p>
        <p class="font-light">Inserisci la nuova password</p>
      </div>
      <div>
        <div>
          <p>Nuova Password</p>
          <input type="password" class="rounded w-full p-4" v-model="password"/>
          <p v-if="password !== confirmPassword || isDifferent" class="text-tiny text-red-400">Password differenti</p>
        </div>
        <div>
          <p>Conferma Password</p>
          <input type="password" class="rounded w-full p-4" v-model="confirmPassword"/>
        </div>
      </div>


      <Button color="green" @click="reset">
        <div>Resetta</div>
      </Button>
    </div>
  </div>

</template>

<script>
export default {
  name: "change-password",
  data() {
    return {
      password: '',
      confirmPassword: '',
      isDifferent: false
    }
  },
  setup() {
    definePageMeta({
      middleware: ["non-auth"]
    });
  },
  methods: {
    async reset() {
      if (this.password !== this.confirmPassword) {
        this.isDifferent = true
        return
      }

      await useApi().post('/v1/public/password/reset', {
        password: this.password,
        resetToken: this.$route.query.resetToken,
        resetId: this.$route.query.resetId
      }, true).then(res => {
        console.log(res);
      })
    }
  }
}
</script>

<style scoped>

</style>
