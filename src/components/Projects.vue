<template>
  <div class="container" id="projects">
    <h2>Projects</h2>
    <div class="showcase">
      <div v-for="(project, idx) in projects" :key="idx">
        <img :src="getImageURL(project.screenshot)" :alt="project.screenshot">
        <h3>{{ project.name }}</h3>
        <p>{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {
          name: "Net Jobs",
          description: "Find jobs near you and work just to die with earthly posseion",
          screenshot: "net-jobs-1"
        },
        {
          name: "Net Jobs 2",
          description: "Find jobs near you and work just to die with earthly posseion",
          screenshot: "net-jobs-2"
        },
        {
          name: "Net Jobs 3",
          description: "Find jobs near you and work just to die with earthly posseion",
          screenshot: "net-jobs-3"
        },
        {
          name: "Net Jobs 4",
          description: "Find jobs near you and work just to die with earthly posseion",
          screenshot: "net-jobs-4"
        }
      ]
    }
  },
  methods: {
    getImageURL(screenshot) {
      return require(`../assets/project-shots/${screenshot}.png`);
    }
  }
}
</script>

<style scoped>
  .container {
    padding: 0 .5rem;
  }

  .showcase {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 1.5rem;
  }

  .showcase div {
    margin: 1rem 0;
    padding: 1rem;
    border: 1px solid rgba(128, 128, 128, 0.5);
    border-radius: 10px;
  }

  img {
    width: 100%;
  }
</style>