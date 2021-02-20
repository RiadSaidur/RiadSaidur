<template>
  <div>
    <Header />
    <Hero />
    <Skills />
    <Projects />
    <About />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Skills from '@/components/Skills.vue'
import Projects from "@/components/Projects"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default {
  name: 'Home',
  components: {
    Header,
    Hero,
    Skills,
    Projects,
    About,
    Contact,
    Footer
  }
}
</script>