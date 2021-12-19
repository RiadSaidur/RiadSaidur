<template>
  <section id="contact" class="container">
    <h2>
      <span>Stay in touch</span>
      Contact
    </h2>

    <div class="content">
      <div>
        <h3>Don't be shy, Say <span>Hi.</span> </h3>
        <p class="status" v-if="messageStatus" :class="messageStatus.success ? 'success' : 'error' ">{{ messageStatus.message }}</p>
        <div class="form">
          <form @submit.prevent="sendMessage">
            <div v-for="(inputField, idx) in inputFields" :key="idx">
              <label :for="inputField.name">
                <span>{{ inputField.name }}</span>
                <input :type="inputField.type" :id="inputField.name" :name="inputField.name" v-model="inputData[inputField.name]" required>
              </label>

            </div>
            <div>
              <label for="message">
                <span>message</span>
                <textarea name="message" id="message" cols="10" rows="10" v-model="inputData.message" required></textarea>
              </label>
            </div>
            <button type="submit" :disabled="loading">
              <img src="@/assets/loading.svg" alt="loading" title="loading" v-if="loading">
              <span v-if="!loading">Send Message</span>
            </button>
          </form>
        </div>
      </div>
      
      <div class="details" ref="contact">
        <span>Email: <a href="mailto:riadsaidur@gmail.com">riadsaidur@gmail.com</a></span>
        <span>Mobile: <a href="tel:+8801628381010">(+880) 1628381010</a></span>
        <social />
      </div>

    </div>
  </section>
</template>

<script>
import { messageCollection } from '@/firebase'
import social from '../components/social.vue'
export default {
  components: { social },
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
      },
      loading: false,
      messageStatus: undefined
    }
  },
  mounted() {
    // set index number for touch swipe navigation
    this.$store.dispatch("setPageIdx", 4)
  },
  methods: {
    clearInputData() {
      this.inputData.name = ''
      this.inputData.email = ''
      this.inputData.message = ''
    },
    async sendMessage() {
      this.loading = true

      if(!this.inputData.name && !this.inputData.email && !this.inputData.message) return this.loading = false

      this.inputData.createdAt = new Date().toLocaleString()

      try {
        await messageCollection.add(this.inputData)
        this.messageStatus = {
          success: true,
          message: "I will get back to you as soon as possible"
        }
        this.clearInputData()
      } catch (error) {
        this.messageStatus = {
          success: false,
          message: "Facing some issues right now, try emailing me directly"
        }
        console.log(error);
      }

      setTimeout(() => {
        this.messageStatus = undefined
      }, 5000)

      this.loading = false
    }
  }
}
</script>

<style scoped>
  section {
    min-height: 100vh;
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
    color: #3BFFD6;
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
    color: #3BFFD6;
  }

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

  .social a:first-child {
    filter: invert();
  }

  input, textarea {
    background: none;
    border: none;
    border-bottom: 1px solid grey;
    resize: none;
    width: 100%;
    padding: .5rem 1rem;
    margin-bottom: 1rem;
    font-size: 1rem;
  }

  textarea {
    height: 5rem;
  }

  input:focus, textarea:focus {
    outline: none;
    border-bottom: 1px solid #20B394;
  }

  button {
    position: absolute;
    right: 0;
    border: none;
    background: none;
    border: 1px solid #3BFFD6;
    padding: .5rem 1rem;
    font-variant: small-caps;
    letter-spacing: 1px;
    border-radius: 4px;
    font-size: 1rem;
  }

  button span {
    font-weight: 600;
    color: #3BFFD6;
  }

  .form {
    text-align: left;
    width: 100%;
    position: relative;
    padding-bottom: 2.5rem;
  }

  button img {
    width: 1.5rem;
    animation: rotate infinite 3000ms ease alternate;
  }

  button:disabled {
    border: none;
  }

  label span {
    display: block;
    text-transform: capitalize;
    font-variant: small-caps;
  }

  .status {
    border-radius: 4px;
    padding: .3rem;
    margin-bottom: 1.5rem;
    opacity: 0;
    font-variant: small-caps;
    transition: all 300ms ease;
  }

  .success {
    opacity: 1;
    border: 1px solid #20B394;
    color: #20B394;
  }

  .error {
    opacity: 1;
    border: 1px solid #FF485A;
    color: #FF485A;
  }


  @keyframes rotate {
    0% {
      opacity: 0;
      transform: rotate(0deg);
    }
    40% {
      transform: rotate(120deg);
    }
    60% {
      transform: rotate(240deg);
    }
    100% {
      opacity: 1;
      transform: rotate(360deg);
    }
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