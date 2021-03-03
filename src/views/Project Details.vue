<template>
  <div class="container">
    <button @click="$router.go(-1)" title="go back">
      <img src="@/assets/back.svg" alt="go back">
    </button>
    <section class="details">
      <div class="slideshow">
        <h2>Project Screenshots</h2>
        <ImageSlider :screenshots="projectDetails?.foundProject?.screenshots" :multiple="true" class="scr-container"/>
      </div>
      <div>
        <h2>Project Details</h2>
        <h1>{{ projectDetails?.foundProject?.name }}</h1>
        <p>{{ projectDetails?.foundProject?.description }}</p>
        <div class="additional-links">
          <a v-if="projectDetails?.foundProject?.github" :href="projectDetails?.foundProject?.github" target="_blank">
            <img src="@/assets/social/github.png" alt="github" title="github repo">
            <span>Github Repository</span>
          </a>
          <a v-if="projectDetails?.foundProject?.liveLink" :href="projectDetails?.foundProject?.liveLink" target="_blank">
            <img src="@/assets/social/link.png" alt="live link" title="live link">
            <span>Live Project</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ImageSlider from '@/components/ImageSlider';

export default {
  name: 'Project Details',
  components: {
    ImageSlider
  },
  computed: {
    projectDetails() {
      const projectName = this.$route.params.id
      return this.$store.getters.getProjectByName(projectName)
    }
  },
  watch: {
    projectDetails: function () {
      // watch for vuex getters to send project info
      // redirect if project is not found
      if(!this.projectDetails?.isFound) this.$router.push('/404')
    }
  }
}
</script>

<style scoped>
  .container {
    position: relative;
    padding: 0 .5rem;
    background: linear-gradient(50deg,aliceblue, whitesmoke, aliceblue);
    border-bottom-right-radius: 50px;
    border-top-left-radius: 50px;
  }

  .scr-container {
    margin: 0 auto;
    max-height: 80vh;
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
    flex-direction: column;
  }
  

  .details > div {
    padding: 1rem;
    width: 100%;
  }

  button {
    position: absolute;
    top: -50px;
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
  }
</style>