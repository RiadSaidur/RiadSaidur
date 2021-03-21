<template>
  <section class="container">
      <div>
        <p>Meet the man, the myth, the mystery</p>
        <h1>Saidur Rahman Riad</h1>
        <p>A web developing wizard 🍾</p>
        <div class="ctas">
          <router-link to="projects">
            <button>
              See My Works
            </button>
          </router-link>
          <a href="https://firebasestorage.googleapis.com/v0/b/saiduriad.appspot.com/o/resume%2FSaidurRahman.pdf?alt=media" download="Resume - Saidur">
            <button>
              Download Resume
            </button>
          </a>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  mounted() {
    // set index number for touch swipe navigation
    this.$store.dispatch("setPageIdx", 0)
  }
}
</script>

<style scoped>
  section {
    height: calc(100vh - 74px);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  p {
    font-size: 1.1rem;
    font-weight: 200;
    font-variant: small-caps;
  }
  
  h1 {
    font-size: 2.5rem;
    font-weight: 600;
    font-variant: small-caps;
    color: #FF485A;
  }

  .ctas {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 2rem;
  }

  .ctas a button {
    background: none;
    border: none;
    padding: .5rem 1rem;
    border-radius: 4px;
    border-radius: 4px;
    transition: all 300ms ease;
  }

  button {
    position: relative;
    overflow: hidden;
  }

  button:after {
    content: "";
    background: #3BFFD6;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s;
  }

  button:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
  }

  .ctas a:first-child button {
    background-color: #FF485A;
  }

  .ctas a:last-child button {
    border: 1px solid #FF485A;
  }

  .ctas a button {
    font-weight: 700;
    font-size: 1rem;
    letter-spacing: 1px;
    font-variant: small-caps;
  }

  @media only screen and (min-width: 720px) {
    section {
      height: 100vh;
    }
    h1 {
      font-size: 4rem;
    }

    p {
      font-weight: 300;
      font-size: 1.2rem;
    }

    .ctas a {
      font-size: 1.1rem;
    }
  }
</style>