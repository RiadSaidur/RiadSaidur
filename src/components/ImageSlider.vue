<template>
  <div>
    <img :src="currentImage" :alt="currentImage" class="currentImage">
    <div v-if="legend" class="legend">
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
    'legend'
  ],
  data() {
    return {
      currentImage: '',
      currentIdx: 0,
      interval: ''
    }
  },
  mounted() {
    this.interval = setInterval(this.changeImage, 3000)
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
    border: 1px solid #2c3e50;
    border-radius: 50%;
    margin: .5rem;
  }

  .fill {
    background-color: #2c3e50;
    transition: all 300ms ease-in-out;
  }

  button {
    background: none;
    border: none;
  }
</style>