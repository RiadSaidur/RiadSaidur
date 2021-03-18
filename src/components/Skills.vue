<template>
  <section class="container" id="skills">
    <h2>
      <span>What can I offer</span>
      Skills
    </h2>
    <div class="parent-skills" ref="skills">
      <div class="child-skills" v-for="(skill, idx) in skillsList" :key="idx">
        <img :src="getImageURL(skill)" :alt="skill" :title="skill">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      skillsList: [
        'html5',
        'css3',
        'javascript',
        'bootstrap',
        'material-ui',
        'vuetify',
        'logo',
        'nuxt',
        'react',
        'firebase',
        'node',
        'django',
        'pwa',
        'mongo',
        'postgres',
        'figma',
        'postman'
      ]  
    }
  },
  methods: {
    getImageURL(logo) {
      return require(`../assets/skills/${logo}.png`);
    }
  }
}
</script>

<style scoped>
  img {
    width: 48px;
  }

  .container {
    padding: 3rem .5rem;
    background: #2c3e50;
    box-shadow: 0 0 10px 2px #2c3e50;
  }

  .parent-skills {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    max-width: 1000px;
    margin: 0 auto;
  }

  .child-skills {
    padding: 1rem .5rem;
    margin: 0 1rem;
  }
</style>