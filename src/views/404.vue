<template>
  <div class="container">
    <img src="@/assets/404.svg" alt="404">
    <div>
      <p>don't startle me like that 👀</p>
      <h1>Please go back <a href="/">Back</a></h1>
    </div>
  </div>
</template>

<script>
export default {
  name: '404'
}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }

  img {
    height: 50vh;
    max-width: 95vw;
    padding: 1rem .5rem;
  }

  h1 {
    font-weight: 400;
  }

  p {
    font-size: 1.1rem;
    line-height: 2rem;
  }

  a {
    color: #FF485A;
    border-bottom: 1px solid thistle;
  }

  @media only screen and (min-width: 1000px) {
    .container {
      height: 100vh;
    }
  }
</style>