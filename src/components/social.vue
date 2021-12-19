<template>
  <div class="social">
    <a v-for="(social, idx) in socials" :key="idx" :href="social.link" target="_blank" rel="noopener">
      <img :src="getImageURL(social.title)" :alt="social.title" :title="social.title">
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        {
          link: 'https://github.com/RiadSaidur',
          title: 'github'
        },
        {
          link: 'https://twitter.com/RiadSaidur',
          title: 'twitter'
        },
        {
          link: 'https://www.linkedin.com/in/riadsaidur/',
          title: 'linkedin'
        },
        {
          link: 'https://dribbble.com/RiadSaidur',
          title: 'dribbble'
        },
        {
          link: 'https://riadsaidur.medium.com/',
          title: 'medium'
        },
      ]
    }
  },
  methods: {
    getImageURL(logo) {
      return require(`../assets/social/${logo}.png`);
    }
  },
}
</script>

<style scoped>
  .social {
    text-align: center;
  }

  .social a {
    display: inline-block;
    padding: 1rem;
  }

  .social img {
    width: 24px;
    height: 24px;
  }

  .social a:first-child, a:last-child {
    filter: invert();
  }
</style>