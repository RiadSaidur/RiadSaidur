<template>
  <div class="container">
    <button @click="$router.go(-1)" title="go back">🔙</button>
    <section class="details">
      <img src="https://media.giphy.com/media/fXDqamyZLsDqNAcJEf/giphy.gif" alt="gif">
      <div>
        <h1>{{ $route.params.id }}</h1>
        <p>{{ projectDetails.description }}</p>
      </div>
    </section>
    <h2>Project Screenshots</h2>
    <section class="scr-container" v-for="(screenshot, idx) in projectDetails.screenshots" :key="idx">
      <img :src="getImageURL(screenshot)" :alt="screenshot">
    </section>
  </div>
</template>

<script>
export default {
  name: 'Project Details',
  data() {
    return {
      projectDetails: {
        name: "Net Jobs",
        description: "Find jobs near you and work just to die with earthly possesion",
        screenshots: [
          "net-jobs-1",
          "net-jobs-2",
          "net-jobs-4"
        ]
      }
    }
  },
  methods: {
    getImageURL(screenshot) {
      return require(`@/assets/project-shots/${screenshot}.png`);
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
  }

  .details div {
    padding-bottom: 1rem;
  }

  button {
    position: fixed;
    top: 30px;
    right: 30px;
    background: none;
    border: none;
    color: aliceblue;
    font-size: 2rem;
  }

  @media only screen and (min-width: 720px) {
    .details {
      flex-direction: row;
      justify-content: space-evenly;
    }
  }
</style>