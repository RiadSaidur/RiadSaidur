<template>
  <div class="container">
    <img :src="currentImage" :alt="currentImage" class="currentImage">
    <div v-if="multiple" class="legend">
      <button 
        v-for="(screenshots, idx) in screenshots" 
        :key="idx"
        @click="displaySingleImage(idx)"
      >
        <div 
          class="dots" 
          :class="idx === currentIdx ? 'fill' : ''"
          ></div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageSlider",
  props: [
    'screenshots',
    'multiple'
  ],
  data() {
    return {
      currentImage: '',
      currentIdx: 0,
      interval: ''
    }
  },
  watch: {
    screenshots: function () {
      if(this.multiple) this.currentImage = this.screenshots[0]
    }
  },
  mounted() {
    if(this.multiple) {
      this.interval = setInterval(this.changeImage, 3000)
    } else {
      this.currentImage = this.screenshots
    }
  },
  beforeUnmount() {
    clearInterval(this.interval)
  },
  methods: {
    changeImage () {
      if(this.currentIdx >= this.screenshots.length -1) this.currentIdx = 0
      else this.currentIdx++
      this.currentImage = this.screenshots[this.currentIdx]
    },
    displaySingleImage(idx) {
      this.currentIdx = idx
      this.currentImage = this.screenshots[this.currentIdx]
      clearInterval(this.interval)
    }
  }
}
</script>

<style scoped>
  img {
    max-width: 100%;
    transition: all 300ms ease-in-out;
  }

  .legend {
    display: flex;
    justify-content: center;
  }

  .dots {
    display: block;
    width: .5rem;
    height: .5rem;
    border: 1px solid rgb(0,197,142);
    border-radius: 50%;
    margin: .5rem;
  }

  .fill {
    background-color: rgb(0,197,142);
    transition: all 300ms ease-in-out;
  }

  button {
    background: none;
    border: none;
  }
</style>