<template>
  <section class="container">
    <footer>
      <p>©️ 2021 Saidur Rahman Riad</p>
    </footer>
  </section>
</template>

<script>
export default {
  name: 'footer-component'
}
</script>

<style scoped>
  footer {
    background: #2c3e50;
    box-shadow: 0 0 10px 2px #2c3e50;
  }

  footer p {
    text-align: center;
    font-weight: 400;
    padding: .5rem 0;
    font-variant: small-caps;
  }
</style>