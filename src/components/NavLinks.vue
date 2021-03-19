<template>
  <section class="container">
    <nav>
      <ul>
        <li v-for="(link, idx) in links" :key="idx">
          <router-link :to="`/${link}`" v-text="link"></router-link>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {
  name: "nav-links",
  data() {
    return {
      links: [ 'skills', "projects", "about", "contact" ]
    }
  }
}
</script>

<style scoped>
  .router-link-exact-active {
    /* color: rgba(0, 197, 142, 1); */
    color: rgb(108,99,255);
  }

  a {
    padding: 1rem .3rem;
    font-weight: 600;
    text-transform: capitalize;
    font-variant: small-caps;
    font-size: 1.2rem;
    letter-spacing: 1px;
    transition: all 300ms ease;
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
    transform: translate3d(0, 0, 0);
    transition: 0.1s all ease-in-out;
    z-index: 2;
  }
</style>