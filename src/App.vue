<template>
  <div id="nav">
    <header><a href="#">Saidur</a></header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <a href="#" id="primaryCTA">Contact Me</a>
  </div>
  <router-view/>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
    font-weight: 300;
    color: #2c3e50;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #nav {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: .5rem 0;
  }

  #nav a {
    padding: .5rem .3rem;
  }

  #nav nav a {
    font-weight: 200;
  }

  header a {
    font-family: 'Sacramento', cursive;
    font-size: 2rem;
    color: rgb(77, 77, 77);
  }

  #nav a.router-link-exact-active {
    color: indigo;
    font-weight: 400;
  }

  #primaryCTA {
    border: 1px solid gray;
    border-radius: .5rem;
    background-color: indigo;
    color: ivory;
  }

  a {
    color: black;
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  h2 {
    text-align: center;
    padding-bottom: .5rem;
    border-bottom: 1px solid rgba(128, 128, 128, 0.4);
  }
</style>
