import {useTokenStore} from "~/stores/useTokenStore";

export default defineNuxtRouteMiddleware((to, from) => {
  const tokenStore = useTokenStore()
  if (tokenStore.token) {
    return navigateTo('/logout')
  }
})
