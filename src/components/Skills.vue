<template>
  <div class="container">
    <h2>Skills</h2>
    <div class="parent-skills">
      <div class="child-skills" v-for="(skill, idx) in skillsList" :key="idx">
        <img :src="getImageURL(skill)" :alt="skill">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      skillsList: [
        'html5',
        'css3',
        'bootstrap',
        'material-ui',
        'vuetify',
        'javascript',
        'logo',
        'nuxt',
        'react',
        'pwa',
        'node',
        'django',
        'firebase',
      ]  
    }
  },
  methods: {
    getImageURL(logo) {
      return require(`../assets/${logo}.png`)
    }
  }
}
</script>

<style scoped>
  img {
    width: 48px;
  }

  h2 {
    font-weight: 200;
  }

  .container {
    padding: 4rem .5rem;
  }

  .parent-skills {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  .child-skills {
    padding: 1rem .5rem;
    margin: 0 1rem;
  }
</style>