<template>
  <header class="header-background">
    <div class="header-container flex items-center text-white p-8 gap-4">
      <div>LOGO</div>
      <nav aria-label="Main navigation">
        <ul class="flex gap-9">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/prices">Prezzi</nuxt-link></li>
          <li><nuxt-link to="/download">Scarica</nuxt-link></li>
        </ul>
      </nav>
    </div>
  </header>
  <div class="hero">
    <h1>Index page</h1>
    <p>Here is the content of the index page</p>
  </div>
</template>

<style>
:root {
  --header-height: 78px;
  --bg-offset: -200px;
}

.header-container {
  height: var(--header-height);
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
}

.header-background {
  background: url('@/assets/images/header-background-network.jpg') no-repeat center var(--bg-offset);
  background-size: cover;
}

.hero {
  background: url('@/assets/images/header-background-network.jpg') no-repeat center calc(var(--bg-offset) - var(--header-height));
  background-size: cover;
}
</style>
