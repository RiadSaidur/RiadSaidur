<template>
  <section id="contact" class="container">
    <h2>
      <span>Stay in touch</span>
      Contact
    </h2>

    <div class="content">
      <div>
        <h3>Don't be shy, Say <span>Hi.</span> </h3>
        <div class="form">
          <form @submit.prevent="sendMessage">
            <div v-for="(inputField, idx) in inputFields" :key="idx">
              <label :for="inputField.name">
                <span>{{ inputField.name }}</span>
                <input :type="inputField.type" :id="inputField.name" :name="inputField.name" v-model="inputData[inputField.name]">
              </label>

            </div>
            <div>
              <label for="message">
                <span>message</span>
                <textarea name="message" id="message" cols="10" rows="10" v-model="inputData.message"></textarea>
              </label>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      
      <div class="details" ref="contact">
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
  </section>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      inputFields: [
        {
          name: 'name',
          type: 'text',
        },
        {
          name: 'email',
          type: 'email',
        },
      ],
      inputData: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  mounted() {
    this.addIntersectionObserver()
  },
  methods: {
    addIntersectionObserver() {
      const contactSection = this.$refs.contact

      const observer = new IntersectionObserver(entries => {
        const isIntersecting = entries[0].isIntersecting
        if(isIntersecting) this.$router.push('/#contact')
      })

      observer.observe(contactSection)
    },
    sendMessage(e) {
      console.log(e);
    }
  }
}
</script>

<style scoped>
  .container {
    padding: 3rem .5rem;
  }

  .content {
    text-align: center;
  }

  .content h3 {
    margin-top: .5rem;
    margin-bottom: 2rem;
    font-size: 1.3rem;
    transform: translateX(-.5rem);
  }

  .content h3 span {
    display: inline-block;
    padding: 0 .2rem;
    transform: translateY(.2rem);
    font-size: 2rem;
    color: rgba(0, 197, 142, 1);
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

  input, textarea {
    background: none;
    border: none;
    border-bottom: 1px solid grey;
    resize: none;
    width: 100%;
    padding: .5rem 1rem;
    margin-bottom: 1rem;
  }

  textarea {
    height: 10rem;
  }

  input:focus, textarea:focus {
    outline: none;
    border-bottom: 2px solid rgba(0, 197, 142, 1);
  }

  button {
    border: none;
    background: none;
    border: 1px solid rgba(0, 197, 142, 1);
    padding: .5rem 1rem;
  }

  .form {
    text-align: left;
    width: 100%;
    position: relative;
    padding-bottom: 2.5rem;
  }

  button {
    position: absolute;
    right: 0;
    border-radius: 4px;
  }

  label span {
    display: block;
    text-transform: capitalize;
    font-variant: small-caps;
  }

  @media only screen and (min-width: 720px) {
    .content {
      display: flex;
      align-items: center;
      padding-bottom: 1rem;
    }

    .content > div:first-child {
      flex: 1fr;
      width: 50%;
      margin-left: 4rem;
    }

    .details {
      flex: 1fr;
      width: 50%;
    }

    .form {
      padding: 0;
    }
  }
</style>