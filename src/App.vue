<template>
  <div id="nav">
    <header><a href="/">Saidur</a></header>
    <!-- <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav> -->
    <!-- <a href="#contact" id="primaryCTA">Contact Me</a> -->
  </div>
  <router-view/>
  <a class="back-to-top" :class="{ 'hideButton': !showButton }" href='#'>🔝</a>
</template>

<script>
export default {
  data() {
    return {
      showButton: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
    this.$store.dispatch('getProjectPreviews')
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
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400&display=swap');

  html {
    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
    font-weight: 300;
    color: #2c3e50;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #nav {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: .5rem 0;
  }

  #nav a {
    padding: .5rem .3rem;
  }

  #nav nav a {
    font-weight: 200;
  }

  header a {
    font-family: 'Sacramento', cursive;
    font-size: 2rem;
    color: rgb(77, 77, 77);
  }

  #nav a.router-link-exact-active {
    color: indigo;
    font-weight: 400;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  h2 {
    text-align: center;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(128, 128, 128, 0.4);
    margin-bottom: 1rem;
    font-weight: 200;
  }

  #primaryCTA {
    border: 1px solid gray;
    border-radius: .5rem;
    background-color: indigo;
    color: ivory;
    padding: .5rem 1rem !important;
  }

  .back-to-top {
    position: fixed;
    bottom: 40px;
    right: 30px;
    background: none;
    border: none;
    font-size: 2rem;
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
</style>
