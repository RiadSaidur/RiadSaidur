<template>
  <div class="container">
    <footer>
      <p>©️ 2021 Saidur Rahman Riad</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'footer-component'
}
</script>

<style scoped>
  footer {
    /* background: linear-gradient(aliceblue, whitesmoke, aliceblue); */
    background-color: rgba(44, 62, 80, 1);
    box-shadow: 0 0 10px 2px #2f495e;
  }

  footer p {
    text-align: center;
    font-weight: 400;
    padding: .5rem 0;
    font-variant: small-caps;
  }
</style>