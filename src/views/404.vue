<template>
  <div class="container">
    <img src="@/assets/404.svg" alt="404">
    <div>
      <h1>Please go back <a href="/">🔙</a></h1>
      <p>don't startle me like that 👀</p>
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
    width: 50%;
    padding: 1rem .5rem;
  }

  h1 {
    font-weight: 400;
  }

  p {
    font-size: 1.1rem;
    line-height: 2rem;
  }

  @media only screen and (min-witdh: 720px)  {
    .container {
      flex-direction: row;
    }
  }
</style>