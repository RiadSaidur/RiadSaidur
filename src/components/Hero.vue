<template>
  <div class="container">
    <div class="content">
      <h3>meet the man, the myth, the mystery</h3>
      <h1>Saidur Rahman Riad</h1>
      <h3>a web developing wizard 🍾</h3>
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
  }

  .container::after {
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
    font-size: 2.3rem;
    font-weight: 600;
    font-variant: small-caps;
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