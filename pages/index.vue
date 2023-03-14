<template>
  <div class="relative text-white">
    <img class="hero-bg" src="/images/hero/w_1000-header-background-network.jpg" alt=""
         sizes="(max-width: 768px) 200px, (max-width: 1024px) 400px, 1000px"
         srcset="/images/hero/w_200-header-background-network.jpg 200w, /images/hero/w_400-header-background-network.jpg 400w, /images/hero/w_1000-header-background-network.jpg 1000w">
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
  <section class="max-w-screen-xl my-48 mx-auto flex gap-32 items-stretch justify-center">
    <div class="feature-card">
      <div class="feature-illustration">
        <img src="@/assets/images/feature-illustration-1.svg" draggable="false" alt="File con dati criptati e lavoro al computer">
      </div>
      <h3 class="text-subtitle mt-36">Traffico criptato, ovunque sei</h3>
      <p class="mt-36">Sei protetto se ti connetti tramite WiFi pubbliche o reti sconosciute</p>
    </div>
    <div class="feature-card">
      <div class="feature-illustration">
        <img src="@/assets/images/feature-illustration-2.svg" draggable="false" alt="Sito web bloccato">
      </div>
      <h3 class="text-subtitle mt-36">Raggiungi destinazioni bloccate</h3>
      <p class="mt-36">Non amiamo la censura, con la nostra VPN raggiungi server bloccati e siti filtrati</p>
    </div>
    <div class="feature-card">
      <div class="feature-illustration">
        <img src="@/assets/images/feature-illustration-3.svg" draggable="false" alt="Computer, tablet e telefono con DicyVPN">
      </div>
      <h3 class="text-subtitle mt-36">Proteggi fino a 4 dispositivi</h3>
      <p class="mt-36">Per ora il client è disponibile solo per Windows, ma almeno puoi proteggere 4 computer</p>
    </div>
  </section>
</template>

<style scoped>
.hero-bg {
  @apply w-full h-full absolute inset-0 object-cover -z-10;
  object-position: center calc(var(--bg-offset) - var(--header-height));
}

.hero-container {
  background: var(--bg-overlay);
  backdrop-filter: blur(5px);
}

.lateral-container {
  background-color: rgb(0 0 0 / 25%);
}

.features ul li {
  @apply flex gap-12;
}

.feature-card {
  @apply border-2 border-gray-100/20 rounded-lg shadow-4 shadow-blue-100/25 flex-1 p-36 pb-64 max-w-[22rem] text-center;
}

.feature-illustration img {
  margin: auto;
  height: 10rem;
  width: auto;
  user-select: none;
}
</style>
