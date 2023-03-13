<template>
  <div class="flex flex-col justify-center items-center m-32">
    <div class="bg-gray-100 drop-shadow-xl p-32 rounded flex flex-col gap-y-16">
      <p class="text-h2">Login</p>
      <div>
        <p class="font-light">Email</p>
        <input type="email" class="rounded w-full p-4" placeholder="info@pippo.com" v-model="email"/>
      </div>

      <div>
        <p class="font-light">Password</p>
        <input type="password" class="rounded w-full p-4" placeholder="Password" v-model="password"/>
      </div>

      <Button color="green" @click="login" :disabled="loading" class="cursor-pointer">
        <div>Accedi</div>
      </Button>

      <div class="mt-32 text-small">
        Non hai un account?
        <nuxt-link to="/register" class="underline underline-offset-2">Registrati</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import {UnauthorizedError} from "~/api/base";
import {useTokenStore} from "~/stores/useTokenStore";

export default {
  data() {
    return {
      email: '',
      password: '',
      loading: false
    }
  },
  setup() {
    const tokenStore = useTokenStore()

    return {
      tokenStore
    }
  },
  methods: {
    async login() {
      this.loading = true;
      const email = this.email;
      const password = this.password;
      try {
        const response = await useApi().rawRequest("/v1/public/login", {
          method: "POST",
          body: JSON.stringify({email, password}),
        }, false);
        this.loading = false;

        if (response.status !== 200) {
          alert("Login failed");
          return;
        }
        const token = response.headers.get("X-Auth-Token");
        const refreshToken = response.headers.get("X-Auth-Refresh-Token");

        if (token) {
          const [_, payload] = token.split(".");
          const payloadDecoded = atob(payload);
          const payloadJson = JSON.parse(payloadDecoded);
          this.tokenStore.setToken(token);
          this.tokenStore.setRefreshToken(refreshToken);
          this.tokenStore.setRefreshTokenId(payloadJson.refreshTokenId);
          this.tokenStore.setAccountId(payloadJson._id);
          this.$router.push("/");
        }
      } catch (e) {
        this.loading = false;
        alert("Login failed, server/network error");
      }
    },
    logout() {
      useApi().get("/v1/logout").then(() => {
        this.tokenStore.clearToken();
      }).catch(error => {
        if (error instanceof UnauthorizedError) {
          this.tokenStore.clearToken();
        } else {
          alert("Logout failed, server/network error");
        }
      });
    }
  }
}
</script>

<style scoped>

</style>
