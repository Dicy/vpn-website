<template>
  <div class="hero-background text-white">
    <div class="hero-container w-full">
      <div class="m-auto max-w-screen-xl flex">
        <div class="flex-col items-center justify-center p-128 pb-192">
          <h1 class="text-h1">Accesso limitato a siti web?<br>Giochi online bloccati?</h1>
          <h2 class="text-h2 font-light mt-20">La VPN che bypassa la maggior parte dei blocchi</h2>
        </div>
        <div class="lateral-container flex flex-col items-center justify-center p-48 gap-32">
          <div class="features">
            <ul class="flex flex-col gap-12">
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.0594 4.94061C22.6453 5.52655 22.6453 6.47811 22.0594 7.06405L10.0594 19.0641C9.47344 19.65 8.52188 19.65 7.93594 19.0641L1.93594 13.0641C1.35001 12.4781 1.35001 11.5266 1.93594 10.9406C2.52188 10.3547 3.47344 10.3547 4.05938 10.9406L9.00001 15.8766L19.9406 4.94061C20.5266 4.35468 21.4781 4.35468 22.0641 4.94061H22.0594Z" fill="#53D8FB"/>
                </svg>
                <span>Privacy nascondendo il tuo indirizzo IP reale</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.0594 4.94061C22.6453 5.52655 22.6453 6.47811 22.0594 7.06405L10.0594 19.0641C9.47344 19.65 8.52188 19.65 7.93594 19.0641L1.93594 13.0641C1.35001 12.4781 1.35001 11.5266 1.93594 10.9406C2.52188 10.3547 3.47344 10.3547 4.05938 10.9406L9.00001 15.8766L19.9406 4.94061C20.5266 4.35468 21.4781 4.35468 22.0641 4.94061H22.0594Z" fill="#53D8FB"/>
                </svg>
                <span>Non salviamo log degli accessi</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.0594 4.94061C22.6453 5.52655 22.6453 6.47811 22.0594 7.06405L10.0594 19.0641C9.47344 19.65 8.52188 19.65 7.93594 19.0641L1.93594 13.0641C1.35001 12.4781 1.35001 11.5266 1.93594 10.9406C2.52188 10.3547 3.47344 10.3547 4.05938 10.9406L9.00001 15.8766L19.9406 4.94061C20.5266 4.35468 21.4781 4.35468 22.0641 4.94061H22.0594Z" fill="#53D8FB"/>
                </svg>
                <span>Server principali in Germania e 50+ server in altri stati nel mondo</span>
              </li>
            </ul>
          </div>
          <div class="flex flex-col items-center justify-center">
            <nuxt-link to="/prices" class="btn btn-primary">Vedi i piani</nuxt-link>
            <div>
              <span class="font-light">oppure</span> <nuxt-link to="/download" class="font-medium underline underline-offset-2">Scarica DicyVPN</nuxt-link>
            </div>
          </div>
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

.lateral-container {
  background-color: rgb(0 0 0 / 25%);
}

.features ul li {
  @apply flex gap-12;
}

.features ul li svg {
  display: inline-block;
}
</style>
