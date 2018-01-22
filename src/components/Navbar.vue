<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img src="/static/img/FF-Website-Logo.png" />
        </router-link>

        <button class="button navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item" href="#" v-scroll-to="'#home'">Home</a>
          <a class="navbar-item" href="#" v-scroll-to="'#about'">About</a>
          <a class="navbar-item" href="#" v-scroll-to="'#mechanics'">Mechanics</a>
          <a class="navbar-item" href="#" v-scroll-to="'#join'">Join</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
  .navbar-brand img {
    max-height: 3rem;
  }
</style>
