<template>
  <section class="container" ref="hero">
    <div class="content">
      <h3>meet the man, the myth, the mystery</h3>
      <h1>Saidur Rahman Riad</h1>
      <h3>a web developing wizard 🍾</h3>
      <div class="ctas">
        <button>
          <a href="#projects">See My Works</a>
        </button>
        <button>
          <a href="#">Download Resume</a>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  mounted() {
    this.addIntersectionObserver()
  },
  methods: {
    addIntersectionObserver() {
      const heroSection = this.$refs.hero

      const observer = new IntersectionObserver(entries => {
        const isIntersecting = entries[0].isIntersecting
        if(isIntersecting) this.$router.push('/')
      })

      observer.observe(heroSection)
    }
  }
}
</script>

<style scoped>
  .container {
    position: relative;
    padding: 10rem .5rem;
    text-align: center;
    height: calc(100vh - 250px);
  }

  .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  h3 {
    font-weight: 200;
  }
  
  h1 {
    font-size: 2.5rem;
    font-weight: 600;
    font-variant: small-caps;
    color: #00c58e;
  }

  .ctas {
    width: 100%;
    margin-top: 2rem;
  }

  .ctas button {
    background: none;
    border: none;
    padding: .5rem 1rem;
    margin: .5rem .5rem;
    border-radius: 4px;
    border-radius: 4px;
  }

  .ctas button:first-child {
    background-color: rgb(0,197,142);
    box-shadow: 0 0 10px 2px #2f495e;
  }

  .ctas button:last-child {
    border: 1px solid rgb(0,197,142);
  }

  .ctas a {
    font-weight: 600;
    font-size: 1rem;
    letter-spacing: 1px;
  }

  @media only screen and (min-width: 720px) {
    h1 {
      font-size: 4rem;
    }

    h3 {
      font-weight: 300;
    }
  }
</style>