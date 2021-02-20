<template>
  <div class="container">
    <h3>meet the man, the myth, the mystery</h3>
    <h1>Saidur Rahman Riad</h1>
    <span>a web developing wizard 🍾</span>
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
    background: url('../assets/home-background.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,.8);
    text-align: center;
  }

  h3, span {
    font-weight: 200;
    color: rgba(240, 248, 255, 0.7);
  }
  
  h1 {
    font-size: 2.3rem;
    font-weight: 400;
    color: aliceblue;
  }
</style>