<template>
  <div class="container">
    <nav>
      <ul>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
  a {
    padding: .5rem .2rem;
  }

  ul {
    display: flex;
  }

  .container {
    padding: .8rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: whitesmoke;
  }
</style>