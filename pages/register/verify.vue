<template>
  <div class="flex justify-center items-center p-16">
    <div class="p-16 rounded flex flex-col gap-y-16 bg-gray-100 drop-shadow-xl">
      <div class="flex flex-col" v-if="loading">
        <div class="flex items-baseline text-h2">
          <p>Verifica email in corso</p>
          <div class="flex">
            <div v-for="i in 3">
              <p v-if="i <= index">.</p>
              <p v-else>&nbsp;</p>
            </div>
          </div>
        </div>
        <p>Attendi un attimo</p>
      </div>
      <div v-else>
        <p class="text-h2">{{ message }}</p>
        <p class="font-light" v-if="verified">Ora puoi accedere al tuo account</p>
      </div>
    </div>
  </div>
</template>

<script>
import {ResponseError} from "~/api/base";

export default {
  name: "verify-email",
  data() {
    return {
      index: 3,
      loading: true,
      verified: false,
      message: ''
    }
  },
  mounted() {
    setInterval(() => {
      this.index = this.index % 3 + 1
    }, 500)

    this.verify().then(() => {
    })
  },
  methods: {
    async verify() {
      try {
        await useApi().post('/v1/public/verify-email', {verificationToken: this.$route.query.token}, true)
        this.loading = false
        this.verified = true
        this.message = 'Email Verificata'

      } catch (e) {
        this.loading = false
        if (e instanceof ResponseError) {
          if (e.status === 401) {
            this.message = 'Link scaduto o non valido'
            return
          } else if (e.status === 409) {
            this.message = 'Esiste già un account con questa email'
            return
          }
        }
        this.message = 'Errore sconosciuto'

      }

    }
  }
}
</script>

<style scoped>

</style>