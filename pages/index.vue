<template>
  <div class="hero-background text-white">
    <div class="hero-container w-full">
      <div class="m-auto max-w-screen-xl flex">
        <div class="flex-col items-center justify-center p-128 pb-192 pr-64">
          <h1 class="text-h1">Accesso limitato a siti web?<br>Giochi online bloccati?</h1>
          <h2 class="text-h2 font-light mt-20">La VPN che bypassa la maggior parte dei blocchi</h2>
        </div>
        <div class="lateral-container flex flex-col items-center justify-center p-48 gap-32 max-w-[32rem]">
          <div class="features">
            <ul class="flex flex-col gap-8">
              <li>
                <div class="check-icon"><fa-check/></div>
                <span>Privacy nascondendo il tuo indirizzo IP reale</span>
              </li>
              <li>
                <div class="check-icon"><fa-check/></div>
                <span>Non salviamo log degli accessi</span>
              </li>
              <li>
                <div class="check-icon"><fa-check/></div>
                <span>Server principali in Germania e 50+ server in altri stati nel mondo</span>
              </li>
            </ul>
          </div>
          <div class="flex flex-col items-center justify-center">
            <Button theme="dark" color="blue" size="big">
              <nuxt-link to="/prices" class="override-px px-36">Vedi i piani</nuxt-link>
            </Button>
            <div class="mt-16">
              <span class="font-light">oppure</span> <nuxt-link to="/download" class="font-medium underline underline-offset-2">Scarica DicyVPN</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-background {
  background: var(--bg-overlay), url('@/assets/images/header-background-network.jpg') no-repeat center calc(var(--bg-offset) - var(--header-height));
  background-size: cover;
}

.hero-container {
  backdrop-filter: blur(5px);
}

.lateral-container {
  background-color: rgb(0 0 0 / 25%);
}

.features ul li {
  @apply flex gap-12;
}
</style>
