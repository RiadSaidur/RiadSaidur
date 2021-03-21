<template>
  <section class="container" id="projects">
    <h2>
      <span>My works</span>
      Projects
    </h2>
    <p v-if="!isOnline" class="network-error">you're offline</p>
    <div class="showcase" ref="projects">
      <button v-if="!projects.length && isOnline" @click="refreshProjects" title="refresh projects">
        <img src="@/assets/refresh.svg" alt="assets" class="refresh">
      </button>
      <div v-for="(project, idx) in projects" :key="idx">
        <ImageSlider :screenshots="project.screenshots[0]" :multiple="false" class="scr-container" />
        <div class="show-on-hover">
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
          <router-link :to="'/project/'+project.name" class="details">
            Details
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ImageSlider from "@/components/ImageSlider"
import { mapState } from 'vuex'

export default {
  name: "Projects",
  components: {
    ImageSlider
  },
  data() {
    return {
      isOnline: false
    }
  },
  computed: {
    ...mapState([
      'projects'
    ])
  },
  mounted() {
    // check if the user is online
    this.isOnline = navigator.onLine ? true : false
    window.addEventListener('online', this.updateStatus)
    window.addEventListener('offline', this.updateStatus)
    // intersection obserever for project showcase animation
    this.addIntersectionObserver()
  },
  beforeUnmount() {
    window.removeEventListener('online', this.updateStatus)
    window.removeEventListener('offline', this.updateStatus)
  },
  methods: {
    updateStatus(e) {
      this.isOnline = (e.type === 'online')
    },
    refreshProjects() {
      this.$store.dispatch('getProjectPreviews')
    },
    addIntersectionObserver() {
      const projectsSection = this.$refs.projects

      const observer = new IntersectionObserver(entries => {
        const isIntersecting = entries[0].isIntersecting
        
        if(isIntersecting) {
          projectsSection.classList.add('fade-in')
        }
        else projectsSection.classList.remove('fade-in')
      })

      observer.observe(projectsSection)
    }
  }
}
</script>

<style scoped>
  .showcase {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    max-width: 1500px;
    margin: 0 auto;
  }

  .showcase > div {
    position: relative;
    padding: .5rem;
  }

  .scr-container {
    max-width: 320px;
  }

  .show-on-hover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem 0 1rem 1rem;
    visibility: hidden;
    opacity: 0;
    transition: all 0s, opacity 0.5s linear;
  }

  .show-on-hover p {
    padding-bottom: 1rem;
  }

  .scr-container:hover + .show-on-hover, .show-on-hover:hover, .details {
    background: rgba(0, 0, 0, 0.7);
    height: 100%;
    border-radius: 10px;
    visibility: visible;
    opacity: 1;
  }

  h3 {
    font-size: 1.5rem;
    padding-bottom: .5rem;
    font-weight: 400;
    font-variant: small-caps;
  }

  .details {
    padding: .3rem 1rem;
    border-radius: 3px;
    font-weight: 600;
    font-size: 1.1rem;
    letter-spacing: 1px;
    border: 1px solid #FF485A;
    transition: all 300ms ease-in-out;
    font-variant: small-caps;
  }

  .details:hover {
    box-shadow: 0 0 4px 2px rgba(0, 197, 142, .2);
  }

  .details {
    position: relative;
    overflow: hidden;
  }

  .details:after {
    content: "";
    background: #FF485A;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s;
  }

  .details:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
  }

  .network-error {
    padding: .5rem;
    font-weight: 400;
    text-align: center;
    border: 1px solid coral;
    color: coral;
    border-radius: 4px;
    z-index: 3;
  }

  button {
    background: none;
    border: none;
  }

  .refresh {
    width: 48px;
  }

  .fade-in {
    animation: go-fade 1s;
  }

  @keyframes go-fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media only screen and (min-width: 720px) {
    .scr-container {
      max-width: 380px;
    }
  }
</style>