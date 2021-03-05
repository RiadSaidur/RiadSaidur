<template>
  <div class="container" :class="{ 'hide-navbar': !showNavbar, 'reposition-top': !onTopY }">
    <nav>
      <ul>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      showNavbar: true,
      onTopY: true,
      lastScrollPosition: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeUnmount () {
    window,removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      
      // for not to override momentum scrolling / refresh on mobile devices
      if (currentScrollPosition < 0 ) return;
      
      // to repositon navbar when at top of the screen
      this.onTopY = currentScrollPosition <= 40

      // do we need to show navbar?
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    }
  }
}
</script>

<style scoped>
  a {
    padding: 1rem .3rem;
    font-weight: 600;
    font-variant: small-caps;
    font-size: 1.2rem;
    letter-spacing: 1px;
    transition: all 300ms ease;
  }

  a:hover {
    color: rgba(0, 197, 142, 1);
  }

  ul {
    display: flex;
  }

  .container {
    position: sticky;
    top: 47.59px;
    padding: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    /* background: linear-gradient(aliceblue, whitesmoke, aliceblue); */
    background: #2f495e;
    transform: translate3d(0, 0, 0);
    box-shadow: 0 0 10px 2px #2f495e;
    transition: 0.1s all ease-in-out;
    z-index: 2;
  }

  .hide-navbar {
    transform: translate3d(0, -200%, 0);
  }

  .reposition-top {
    top: 0px;
    /* box-shadow: 0 0 10px 0 rgba(0, 197, 142, .3); */
  }
</style>