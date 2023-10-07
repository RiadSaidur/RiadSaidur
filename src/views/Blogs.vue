<template>
  <section class="container" id="blogs">
    <h2>
      <span>My logbook</span>
      Blogs
    </h2>
    <p v-if="!isOnline" class="network-error">you're offline</p>
    <div class="showcase" ref="blogs">
      <button v-if="!blogs.length && isOnline" @click="refreshBlogs" title="refresh to read my blogs">
        <img src="@/assets/refresh.svg" alt="assets" class="refresh">
      </button>
      <div v-for="(blog, idx) in blogs" :key="idx">
        <ImageSlider :screenshots="blog.thumbnail" :multiple="false" class="scr-container" />
        <div class="show-on-hover">
          <h3>{{ blog.title }}</h3>
          <a :href="blog.link" class="details" target="_blank">
            Read More
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ImageSlider from "@/components/ImageSlider"

export default {
  name: "Blogs",
  components: {
    ImageSlider
  },
  data() {
    return {
      isOnline: false,
      blogs: []
    }
  },
  mounted() {
    // check if the user is online
    this.isOnline = navigator.onLine ? true : false
    window.addEventListener('online', this.updateStatus)
    window.addEventListener('offline', this.updateStatus)
    // intersection obserever for project showcase animation
    this.addIntersectionObserver()
    // set index number for touch swipe navigation
    this.$store.dispatch("setPageIdx", 5)
    this.refreshBlogs()
  },
  beforeUnmount() {
    window.removeEventListener('online', this.updateStatus)
    window.removeEventListener('offline', this.updateStatus)
  },
  methods: {
    updateStatus(e) {
      this.isOnline = (e.type === 'online')
    },
    async refreshBlogs() {
      const blogsRes = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@RiadSaidur')
      const blogData = await blogsRes.json()
      
      this.blogs = blogData.items
    },
    addIntersectionObserver() {
      const blogsSection = this.$refs.blogs

      const observer = new IntersectionObserver(entries => {
        const isIntersecting = entries[0].isIntersecting
        
        if(isIntersecting) {
          blogsSection.classList.add('fade-in')
        }
        else blogsSection.classList.remove('fade-in')
      })

      observer.observe(blogsSection)
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
    border: 1px solid #FF485A;
    color: #FF485A;
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