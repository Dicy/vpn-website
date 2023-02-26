<template>
  <div class="hero-background text-white">
    <div class="hero-container w-full">
      <div class="m-auto max-w-screen-xl">
        <div class="flex-col align-middle justify-center p-128 pb-192">
          <h1 class="text-h1">Accesso limitato a siti web?<br>Giochi online bloccati?</h1>
          <h2 class="text-h2 font-light mt-20">La VPN che bypassa la maggior parte dei blocchi</h2>
        </div>
        <div>
          1x<br>2x<br>3x
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.hero-background {
  background: var(--bg-overlay), url('@/assets/images/header-background-network.jpg') no-repeat center calc(var(--bg-offset) - var(--header-height));
  background-size: cover;
}

.hero-container {
  backdrop-filter: blur(5px);
}
</style>
