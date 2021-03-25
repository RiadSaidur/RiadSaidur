<template>
  <div class="layout">
    <div id="nav">
      <header>
        <router-link to="/">
          Saidur
        </router-link>
      </header>
      <div class="nav-links">
        <nav-links />
      </div>
    </div>
    <div class="views">
      <router-view v-slot="{ Component }">
        <transition name="fade-slide" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
      <a class="back-to-top" :class="{ 'hideButton': !showButton }" href='#'>
        <img src="@/assets/top.svg" alt="go to top">
      </a>
    </div>
  </div>
</template>

<script>
import NavLinks from "@/components/NavLinks"
export default {
  components: {
    NavLinks
  },
  data() {
    return {
      showButton: false,
      touch: {
        startX: 0,
        endX: 0,
        startY: 0,
        endY: 0
      }
    }
  },
  computed: {
    pageIdx() {
      return this.$store.state.currentPageIdx
    }
  },
  beforeCreate() {
    this.$store.dispatch('getProjectPreviews')
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
    window.addEventListener('touchstart', this.touchstart)
    window.addEventListener('touchmove', this.touchmove)
    window.addEventListener('touchend', this.touchend)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      this.showButton = currentScrollPosition > window.innerHeight;
    },
    touchstart(e) {
      this.touch.startX = e.touches[0].clientX
      this.touch.startY = e.touches[0].clientY
      this.touch.endX = 0
      this.touch.endY = 0
    },
    touchmove(e) {
      this.touch.endX = e.touches[0].clientX
      this.touch.endY = e.touches[0].clientY
    },
    touchend() {
      const swipeDistanceX = Math.abs(this.touch.startX - this.touch.endX)
      const swipeDistanceY = Math.abs(this.touch.startY - this.touch.endY)
      
      if(swipeDistanceX < 150 || swipeDistanceY > 100 || this.touch.endX < 10) return
      
      const pages = [ "/", "/skills", "/projects", "/about", "/contact" ]

      const swipeDirection = Math.round(this.touch.startX - this.touch.endX)

      // return to project list page if on project description page
      if(this.$route.name === "Project Details") return this.$router.push("/projects")

      if(swipeDirection > 0) this.$store.dispatch("updatePageIdx", true)
      else this.$store.dispatch("updatePageIdx", false)

      this.$router.push(pages[this.pageIdx])
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
    background-image: url("./assets/background.png") ;
  }

  #nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5rem 1.5rem;
    background-color: rgba(0, 0, 0, 0.2);
  }

  header a {
    font-family: 'Sacramento', cursive;
    font-size: 2.5rem;
    color: #FF485A;
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
    color: #FF485A;
  }

  h2 span {
    display: block;
    font-weight: 200;
    font-size: 1rem;
    color: rgb(237,242,247, .8);
  }

  section {
    padding: 2rem .5rem 3rem;
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
    background: #33060b;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #FF485A;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #CC3948;
  }

  @media only screen and (min-width: 1000px) {
    h2 {
      padding-left: 6rem;
      font-size: 2.5rem;
    }
    .layout {
      display: flex;
      height: 100vh;
    }
    .layout #nav {
      display: initial;
      position: sticky;
      top: 0;
      left: 0;
      height: 100vh;
      min-width: 20rem;
      max-width: 20rem;
      padding-top: 2rem;
      background: none;
      border-radius: -100px;
    } 
    .layout .views {
      flex-grow: 8;
    }
    header {
      width: 100%;
      text-align: center;
    }
    header a {
      font-size: 3rem;
    }
    .nav-links {
      display: flex;
      height: 70%;
      align-items: center;
      justify-content: center;
    }
    section {
      padding-top: 2rem;
    }
  }
</style>
