<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Welcome...</p>

    <!-- if showModal = true -->
    <div v-if="showModal">

      <!-- modal theme = sale with close modal function -->
      <Modal theme="sale" @close="toggleModal">

        <!-- slot, v-slot:NAME makes it a named slot -->
        <template v-slot:links>
          <a href="">Sign up now</a>
          <a href="">more info</a>
        </template>

        <!-- default content -->
        <h1>Ninja Giveaway!</h1>
        <p>Grab your ninja swag for half price!</p>
      </Modal>
    </div>

    <!-- click event with ALT to fire toggleModal function -->
    <button @click.alt="toggleModal">open modal (alt)</button>
  </div>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'My First Vue App :P',
      header: 'Sign up for the Giveaway',
      text: 'Grab your ninja swag for half price!',
      showModal: false
    }
  },
  methods: {
    handleClick() {
      const nameRef = this.$refs.name
      console.log(nameRef)
      nameRef.classList.add('active')
      nameRef.focus()
    },
    toggleModal() {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
