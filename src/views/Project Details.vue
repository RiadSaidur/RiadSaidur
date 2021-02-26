<template>
  <div class="container">
    <button @click="$router.go(-1)" title="go back">
      <img src="@/assets/back.svg" alt="go back">
    </button>
    <section class="details">
      <img src="https://media.giphy.com/media/fXDqamyZLsDqNAcJEf/giphy.gif" alt="gif">
      <div>
        <h1>{{ $route.params.id }}</h1>
        <p>{{ projectDetails.description }}</p>
        <div class="additional-links">
          <a :href="projectDetails.github" target="_blank">
            <img src="@/assets/social/github.png" alt="github" title="github repo">
            <span>Github Repository</span>
          </a>
          <a :href="projectDetails.liveLink" target="_blank">
            <img src="@/assets/social/link.png" alt="live link" title="live link">
            <span>Live Project</span>
          </a>
        </div>
      </div>
    </section>
    <h2>Project Screenshots</h2>
    <section class="scr-container" v-for="(screenshot, idx) in projectDetails.screenshots" :key="idx">
      <img :src="screenshot" :alt="screenshot">
    </section>
  </div>
</template>

<script>
export default {
  name: 'Project Details',
  computed: {
    projectDetails() {
      const projectName = this.$route.params.id
      return this.$store.getters.getProjectByName(projectName)
    }
  }
}
</script>

<style scoped>
  .container {
    padding: 2rem .5rem;
  }

  .scr-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    max-width: 90%;
    max-height: 80vh;
  }

  .scr-container img {
    padding: .5rem;
    margin-bottom: 1rem;
    box-shadow: 0 0 0 2px hsl(0, 0%, 80%);
    border-radius: 10px;
  }

  h1 {
    font-weight: 400;
    font-size: 1.7rem;
  }

  p {
    font-size: 1.1rem;
  }

  .details {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 1.5rem;
  }
  

  .details > div {
    padding: 1rem;
    width: 100%;
  }

  button {
    position: fixed;
    top: 30px;
    right: 30px;
    background: none;
    border: none;
    color: aliceblue;
  }

  button img {
    width: 2rem;
  }

  .additional-links {
    margin-top: 2rem;
  }

  .additional-links a {
    display: flex;
    align-items: center;
    padding: .2rem 1rem .2rem 0rem;
    font-weight: 200;
  }

  .additional-links img {
    width: 24px;
    margin-right: .5rem;

  }

  @media only screen and (min-width: 720px) {
    .details {
      flex-direction: row;
      justify-content: space-evenly;
    }

    .details > div {
      width: 50%;
    }
  }
</style>