<template>
    <transition name="fade-slide" mode="out-in">
      <nav>
        <button>
          <img src="@/assets/list.svg" alt="menu" />
        </button>
        <ul>
          <li v-for="(link, idx) in links" :key="idx">
            <router-link :to="`/${link}`" v-text="link" />
          </li>
        </ul>
      </nav>
    </transition>
</template>

<script>
export default {
  name: "nav-links",
  data() {
    return {
      links: [ 'skills', "projects", "about", "contact", "blogs" ]
    }
  }
}
</script>

<style scoped>
  .router-link-exact-active {
    color: #FF485A;
    transition: all 500ms ease;
  }

  button {
    background: none;
    border: none;
  }

  button img {
    width: 2rem;
    height: 2rem;
  }

  nav button:hover+ul {
    transform: translateX(0);
  }
  
  a {
    padding: 1rem .3rem;
    font-weight: 600;
    text-transform: capitalize;
    font-variant: small-caps;
    font-size: 1.2rem;
    letter-spacing: 3px;
    transition: all 500ms ease;
    color: rgb(237,242,247, .8);
  }

  ul {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 80vw;
    line-height: 4rem;
    z-index: 3;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(1.7rem);
    transform: translateX(-120%);
    transition: all 300ms ease;
    box-shadow: 0 0 15px 1px #ff485aa4;
  }

  ul li {
    transform: translateY(-4rem);
  }

  @media only screen and (min-width: 1000px) {
    nav button {
      display: none;
    }
    ul {
      position: initial;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: initial;
      width: auto;
      line-height: initial;
      z-index: 3;
      box-shadow: none;
      transform: translateX(0);
      background: none;
    }
    li {
      padding: 1rem 1.5rem;
      transform: translateX(0);
    }
    a {
      font-size: 1rem;
    }
    .router-link-exact-active {
      font-size: 2rem;
      letter-spacing: 2px;
    }
  }
</style>