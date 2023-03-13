<template>
  <div class="flex flex-col justify-center items-center m-32">
    <div class="bg-gray-100 drop-shadow-xl p-32 rounded flex flex-col gap-y-16">
      <h2 class="text-h2">Logout</h2>
      <p>Sei sicuro di voler fare il logout?</p>

      <Button color="blue" @click="logout" :disabled="loading" class="cursor-pointer max-w-xs mt-24">
        <div>Logout</div>
      </Button>

      <div class="mt-32 text-small">
        <p class="underline underline-offset-2 cursor-pointer" @click="$router.go(-1)">Torna indietro</p>
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
      loading: false
    }
  },
  setup() {
    definePageMeta({
      middleware: ["auth"]
    });
    const tokenStore = useTokenStore()

    return {
      tokenStore
    }
  },
  methods: {
    logout() {
      this.loading = true;
      useApi().get("/v1/logout").then(() => {
        this.loading = false;
        this.tokenStore.clearToken();
        this.$router.push("/");
      }).catch(error => {
        this.loading = false;
        if (error instanceof UnauthorizedError) {
          this.tokenStore.clearToken();
          this.$router.push("/");
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
