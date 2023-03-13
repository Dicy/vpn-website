<template>
  <div class="flex flex-col gap-18 items-start">
    Login
    <input type="text" ref="email" class="shadow-lg p-8"/>
    <br>
    <input type="password" ref="password" class="shadow-lg p-8"/>

    <br>
    <br>
    <button @click="login" class="border-2 p-8">Login</button>
    <br>
    <button @click="logout" class="border-2 p-8">LOGOUT</button>

    <pre class="m-4 p-8 bg-gray-200">{{ tokenStore.token }}</pre>
    <pre class="m-4 p-8 bg-gray-200">{{ tokenStore.refreshToken }}</pre>
    <pre class="m-4 p-8 bg-gray-200">{{ tokenStore.accountId }}</pre>
    <p v-if="tokenStore.token">Sei loggato</p>
    <p v-else>NON sei loggato</p>
  </div>
</template>

<script>
import {UnauthorizedError} from "~/api/base";
import {useTokenStore} from "~/stores/useTokenStore";

export default {
  setup() {
    const tokenStore = useTokenStore()

    return {
      tokenStore
    }
  },
  methods: {
    async login() {
      const email = this.$refs.email.value;
      const password = this.$refs.password.value;
      const response = await useApi().rawRequest("/v1/public/login", {
        method: "POST",
        body: JSON.stringify({email, password}),
      }, false);
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
