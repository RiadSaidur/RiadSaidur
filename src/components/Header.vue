<template>
  <div class="container">
    <header><a href="#">Saidur</a></header>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
    <a href="#" id="primaryCTA">Contact Me</a>
  </div>
</template>

<style scoped>
  a {
    padding: .5rem .2rem;
  }

  header a {
    font-family: 'Sacramento', cursive;
    font-size: 2rem;
    color: rgb(77, 77, 77);
  }

  ul {
    display: flex;
  }

  .container {
    padding: .5rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: whitesmoke;
  }

  #primaryCTA {
    border: 1px solid gray;
    border-radius: .5rem;
    background-color: indigo;
    color: ivory;
  }
</style>