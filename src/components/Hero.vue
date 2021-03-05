<template>
  <div class="container">
    <div class="content">
      <h3>meet the man, the myth, the mystery</h3>
      <h1>Saidur Rahman Riad</h1>
      <h3>a web developing wizard 🍾</h3>
      <div class="ctas">
        <button>
          <a href="#projects">See My Work</a>
        </button>
        <button>
          <a href="#">Download Resume</a>
        </button>
      </div>
    </div>
  </div>
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

  /* .container::after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('../assets/home-background.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right;
    background-position-y: top;
    filter: blur(4px);
  } */

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
    /* display: flex;
    align-items: center;
    justify-content: space-evenly; */
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
      font-size: 3rem;
    }

    h3 {
      font-weight: 300;
    }
  }
</style>