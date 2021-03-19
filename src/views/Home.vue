<template>
  <section class="container" ref="hero">
    <div class="content">
      <p>Meet the man, the myth, the mystery</p>
      <h1>Saidur Rahman Riad</h1>
      <p>A web developing wizard 🍾</p>
      <div class="ctas">
        <router-link to="projects">
          <button>
            See My Works
          </button>
        </router-link>
        <a href="#">
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
  name: 'Hero'
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

  p {
    font-size: 1.1rem;
    font-weight: 200;
    font-variant: small-caps;
  }
  
  h1 {
    font-size: 2.5rem;
    font-weight: 600;
    font-variant: small-caps;
    /* color: #00c58e; */
    color: rgb(108,99,255);
  }

  .ctas {
    width: 100%;
    margin-top: 2rem;
  }

  .ctas a button {
    background: none;
    border: none;
    padding: .5rem 1rem;
    margin: .5rem .5rem;
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
    /* background: #00c58d7c; */
    background: rgb(108,99,255);
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
    /* background-color: #00c58e; */
    background-color: rgb(108,99,255);
    /* box-shadow: 0 0 10px 2px #2f495e; */
    box-shadow: 0 0 10px 2px rgb(44, 39, 136);
  }

  .ctas a:last-child button {
    /* border: 1px solid #00c58e; */
    border: 1px solid rgb(108,99,255);
  }

  .ctas a button {
    font-weight: 700;
    font-size: 1rem;
    letter-spacing: 1px;
    font-variant: small-caps;
  }

  @media only screen and (min-width: 720px) {
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