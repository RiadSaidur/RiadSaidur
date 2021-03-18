<template>
  <section class="container" :class="{ 'hide-navbar': !showNavbar, 'reposition-top': !onTopY }">
    <nav>
      <ul>
        <li v-for="(link, idx) in links" :key="idx">
          <a
            :href="`#${link}`"
            :title="link"
            :class="hash === link ? 'active' : '' "
          >
            {{ link }}
          </a>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      links: [ 'skills', "projects", "about", "contact" ],
      showNavbar: true,
      onTopY: true,
      lastScrollPosition: 0
    }
  },
  computed: {
    hash() {
      return this.$route.hash.substring(1)
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
    text-transform: capitalize;
    font-variant: small-caps;
    font-size: 1.2rem;
    letter-spacing: 1px;
    transition: all 300ms ease;
  }

  .active, a:hover {
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
    background: #2c3e50;
    transform: translate3d(0, 0, 0);
    box-shadow: 0 0 10px 2px #2c3e50;
    transition: 0.1s all ease-in-out;
    z-index: 2;
  }

  .hide-navbar {
    transform: translate3d(0, -200%, 0);
  }

  .reposition-top {
    top: 0px;
  }
</style>