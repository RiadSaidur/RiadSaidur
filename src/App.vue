<template>
  <div>
    <Header />
    <Home />
    <Skills />
    <Projects />
    <About />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Home from "./components/Home"
import Header from "./components/Header"
import Skills from './components/Skills.vue'
import Projects from "./components/Projects"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default {
  name: 'App',
  components: {
    Header,
    Home,
    Skills,
    Projects,
    About,
    Contact,
    Footer
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
    font-weight: 300;
  }

  a {
    color: black;
    text-decoration: none;
  }

  li {
    list-style: none;
  }
</style>
