<template>
  <section class="py-6 has-background-light">
    <b-field class="py-6" position="is-centered">
      <b-input custom-class="custom-input" placeholder="Receba ofertas e novidades por e-mail" type="text"
        v-model="email">
      </b-input>
      <p class="control">
        <b-button @click="onSubmit" class="is-uppercase" label="cadastrar" type="is-secondary" outlined />
      </p>
    </b-field>
  </section>
</template>
<script>
export default {
  data() {
    return {
      email: ""
    }
  },
  methods: {
    onSubmit() {
      const data = {
        email: this.email,
      }
      this.$http
        .$post(
          'https://getform.io/f/717a3f3a-a3d0-4a65-addd-eb43f0e79488',
          data,
          {
            headers: {
              Accept: 'application/json',
            },
          }
        )
        .then(
          (response) => {
            this.isSuccess = !!response.data.success
          },
        )
    },
  }
}
</script>
