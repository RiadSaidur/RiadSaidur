<template>
  <div class="container" id="projects">
    <h2>Projects</h2>
    <div class="showcase">
      <div v-for="(project, idx) in projects" :key="idx">
        <img :src="getImageURL(project.screenshot)" :alt="project.screenshot">
        <div class="show-on-hover">
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
          <a href="#" id="details">details</a>
        </div>
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
    display: flex;
    align-items: center;
    max-width: 1500px;
    margin: 0 auto;
  }

  .showcase > div {
    position: relative;
    padding: 2rem 1rem 0;
  }

  img {
    max-width: 320px;
  }

  .show-on-hover {
    position: absolute;
    top: 10%;
    left: 0;
    padding: 1rem 0 1rem 1rem;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
  }

  .show-on-hover p {
    padding-bottom: 1rem;
    font-weight: 200;
  }

  .show-on-hover p, .show-on-hover h3 {
    color: aliceblue;
  }

  img:hover + .show-on-hover, .show-on-hover:hover {
    background-color: rgba(76, 0, 130, 0.9);
    height: 100%;
    border-radius: 10px;
    visibility: visible;
    opacity: 1;
  }

  h3 {
    font-size: 1.5rem;
    padding-bottom: .5rem;
    font-weight: 400;
  }

  #details {
    background-color: white;
    padding: .3rem 1rem;
    border-radius: 10px;
    font-weight: 400;
  }
</style>