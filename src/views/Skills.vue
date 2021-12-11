<template>
  <section class="container" id="skills">
    <h2>
      <span>What can I offer</span>
      Skills
    </h2>
    <div class="parent-skills" ref="skills">
      <div class="child-skills" v-for="(skills, key) in skillsLists" :key="key">
        <h3>{{ key }}</h3>
        <div class="sub-skills">
          <figure v-for="(skill, idx) in skills" :key="idx">
            <img :src="getImageURL(skill)" :alt="skill" :title="skill">
            <figcaption>{{ skill }}</figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      skillsLists: {
        web: [
          'html5',
          'css3',
          'javascript',  
        ],
        ui: [
          'bootstrap',
          'material-ui',
          'vuetify',
        ],
        frontend: [
          'vue',
          'nuxt',
          'react',  
        ],
        backend: [
          'firebase',
          'node',
          'django',  
        ],
        databases: [
          'mongo',
          'postgres',
        ],
        tools: [
          'pwa',
          'figma',
          'postman'  
        ]
      },
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
  },
  mounted() {
    // set index number for touch swipe navigation
    this.$store.dispatch("setPageIdx", 1)
  }
}
</script>

<style scoped>
  section {
    min-height: 100vh;
  }
  img {
    width: 48px;
  }

  .parent-skills {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    max-width: 900px;
    margin: 0 auto;
  }

  .child-skills {
    padding: 1rem .5rem;
    margin: 0 1rem;
  }

  figure {
    padding: 1.5rem 2rem 1rem;
  }

  figcaption {
    color: rgb(237,242,247, .8);
    font-variant: small-caps;
  }

  .sub-skills {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  h3 {
    font-variant: small-caps;
    color: #3BFFD6;
  }

</style>