<template>
  <div id="nav">
    <header>
      <router-link to="/">
        Saidur
      </router-link>
    </header>
    <nav-links />
  </div>
  <router-view v-slot="{ Component }">
    <transition name="fade-slide" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <a class="back-to-top" :class="{ 'hideButton': !showButton }" href='#'>
    <img src="@/assets/top.svg" alt="go to top">
  </a>
</template>

<script>
import NavLinks from "@/components/NavLinks"
export default {
  components: {
    NavLinks
  },
  data() {
    return {
      showButton: false
    }
  },
  beforeCreate() {
    this.$store.dispatch('getProjectPreviews')
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      this.showButton = currentScrollPosition > window.innerHeight;
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700&display=swap');

  html {
    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
    font-weight: 300;
    color: #edf2f7;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    position: relative;
    min-height: 100vh;
    background: url("./assets/background.png");
  }

  #nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: .5rem 0;
  }

  header a {
    font-family: 'Sacramento', cursive;
    font-size: 2rem;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  h2 {
    padding-bottom: 1rem;
    padding-left: 2rem;
    border-bottom: 2px solid rgba(128, 128, 128, 0.4);
    margin-bottom: 1rem;
    font-weight: 600;
    font-variant: small-caps;
  }

  h2 span {
    display: block;
    font-weight: 200;
    font-size: 1rem;
    color: rgb(237,242,247, .8);
  }

  section {
    padding: 0em .5rem 3rem;
  }

  .back-to-top {
    position: fixed;
    bottom: 40px;
    right: 30px;
    background: none;
    border: none;
    width: 2rem;
    transition: visibility 0s, opacity 0.5s linear;
  }

  button:focus {
    outline: none;
  }

  button:hover {
    cursor: pointer;
  }

  .hideButton {
    visibility: none;
    opacity: 0;
  }

  .fade-slide-enter-from, .fade-slide-leave-to {
    opacity: 0;
  }

  .fade-slide-enter-active, .fade-slide-leave-active {
    transition: all 300ms ease-out;
  }

  h1, h2 {
    letter-spacing: 4px;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, .7);
  }
  
  ::-webkit-scrollbar-thumb {
    background: rgb(108,99,255);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgb(73, 64, 245);
  }

  @media only screen and (min-width: 720px) {
    h2 {
      padding-left: 6rem;
      font-size: 2.5rem;
    }
  }
</style>
