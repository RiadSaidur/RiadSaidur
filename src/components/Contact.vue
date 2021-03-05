<template>
  <div id="contact" class="container">
    <h2>Contact</h2>
    <div class="content">
      <h3>Don't be shy, Say <span>Hi.</span> </h3>
      <div class="details">
        <span>Email: <a href="mailto:riadsaidur@gmail.com">riadsaidur@gmail.com</a></span>
        <span>Mobile: <a href="tel:+8801628381010">(+880) 1628381010</a></span>
        <div class="social">
          <a href="https://github.com/RiadSaidur" target="_blank" rel="noopener">
            <img src="@/assets/social/github.png" alt="github">
          </a>
          <a href="https://twitter.com/RiadSaidur" target="_blank" rel="noopener">
            <img src="@/assets/social/twitter.png" alt="twitter">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped>
  .container {
    padding: 3rem .5rem;
    text-align: center;
  }

  .content h3 {
    padding: 4rem;
    /* background: url("../assets/bg1.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: color-dodge;
    background-color: rgba(245, 245, 245, 0.8); */
    font-size: 1.3rem;
    width: 100vw;
    transform: translateX(-.5rem);
  }

  .content h3 span {
    display: inline-block;
    padding: 0 .2rem;
    transform: translateY(.2rem);
    /* background-color: white; */
    font-size: 2rem;
  }

  .details {
    padding-top: 2rem;
    line-height: 1.8rem;
  }

  .details span {
    display: block;
    font-size: 1.1rem;
    font-weight: 400;
    font-variant: small-caps;
  }

  .details a {
    font-size: 1.1rem;
    font-weight: 400;
    font-variant: normal;
    color: rgba(0, 197, 142, 1);
  }

  .social {
    text-align: center;
  }

  .social a {
    display: inline-block;
    padding: 1rem;
  }

  .social img {
    width: 1.5rem;
  }

  @media only screen and (min-width: 720px) {
    .content {
      display: flex;
      align-items: center;
      padding-bottom: 1rem;
    }

    .content h3 {
      flex: 1fr;
      width: 50%;
      padding: 10rem 0;
    }

    .details {
      flex: 1fr;
      width: 50%;
    }
  }
</style>