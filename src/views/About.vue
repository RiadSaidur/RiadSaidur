<template>
  <section class="container" id="about">
    <h2>
      <span>What defines me</span>
      About
    </h2>
    <div class="content">
      <img src="@/assets/-z49uda-min.jpg" alt="Saidur Riad">
      <div>
        <p>Hi, I'm Saidur, a multi-talented Developer with a passion to find simple solution to complex problems.</p>
        <p>You can also call me a Product Designer, Experience Designer, UI Designer, Content Writter.</p>
        <p>I am a tech enthusiast and a learner. I define myself by the work I want to do rather than the works I've done. I am always eager for learning new skill.</p>
        <p>Fueled by my passion for technology, I'm always inspiring and more than willing to follow my fascination. Just ideas are not enough to contain me, proper execution and acts are what keeping me alive.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
  mounted() {
    // set index number for touch swipe navigation
    this.$store.dispatch("setPageIdx", 3)
  }
}
</script>

<style scoped>
  section {
    min-height: 100vh;
  }
  .content {
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  img {
    position: relative;
    margin-bottom: 1rem;
    width: 300px;
    border-radius: 50%;
    box-shadow: 0 0 0 2px #3BFFD6;
  }

  p {
    margin-bottom: .3rem;
    line-height: 1.6rem;
    font-weight: 400;
    font-variant: small-caps;
    letter-spacing: 1px;
  }

  p:first-child {
    font-size: 1.1rem;
    font-weight: 600;
    color: #3BFFD6;
  }

  @media only screen and (min-width: 720px) {
    .content {
      flex-direction: row-reverse;
    }

    .content div {
      max-width: 500px;
    }

    img {
      margin: 0 1.5rem;
    }
  }
</style>