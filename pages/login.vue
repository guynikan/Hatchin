<template>
  <section class="container is-max-desktop">
    <ValidationObserver ref="observer" v-slot="{ invalid, handleSubmit }">
      <form class="box is-flex is-flex-direction-column" @submit.prevent="handleSubmit( submitForm)">
        <NuxtLink class="ml-auto mr-auto is-uppercase is-primary" to="/signup">Cadastre-se</NuxtLink>
        <hr>
        <span class="ml-auto mr-auto">Ou</span>

        <ValidationProvider v-slot="{ errors, valid }" rules="required|email" name="Email">
          <b-field 
            label="Email"
            :type="{ 'is-danger': errors[0], 'is-success': valid }"
            :message="errors"
          >
            <b-input
              v-model="email"
              placeholder="joao@email.com">
            </b-input>
          </b-field>
        </ValidationProvider>

        <b-field label="Senha">
          <b-input 
            v-model="password"
            type="password"
            placeholder="********"
            password-reveal>
          </b-input>
        </b-field>

        <b-button :disabled="invalid" type="is-primary" native-type="submit" class="my-6 ml-auto mr-auto is-uppercase" outlined>Entrar</b-button>
        <NuxtLink class="ml-auto mr-auto" to="/password-recovery">Esqueci minha senha</NuxtLink>
      </form>
    </ValidationObserver>
    </section>
</template>
<script>
import { toast } from 'bulma-toast';
import { ValidationObserver, ValidationProvider } from 'vee-validate';

export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },
  layout: "light",

  data() {
    return { 
      email: "",
      password: ""
    }
  },

  methods: {
    submitForm() {
      this.$axios.defaults.headers.common.Authorization = ""

      localStorage.removeItem("token")

      const formData = {
        email: this.email,
        password: this.password
      }

      this.$axios
        .post("/api/v1/token/login", formData)
        .then(response => {
          const token = response.data.auth_token

          this.$store.commit('setToken', token)

          this.$axios.defaults.headers.common.Authorization = "Token " + token

          localStorage.setItem("token", token)
      })
      .catch(error => {
        if (error.response) {
          toast({
            message: error.response.data.email[0],
            type: 'is-danger',
            dismissible: true,
            pauseOnHover: true,
            duration: 2000,
            position: 'bottom-right'
          })
        } else if (error.request) {
          toast({
            message: 'Erro interno, por favor contate o administrador!',
            type: 'is-danger',
            dismissible: true,
            pauseOnHover: true,
            duration: 2000,
            position: 'bottom-right'
          })
        } else {
          toast({
            message: error.message,
            type: 'is-danger',
            dismissible: true,
            pauseOnHover: true,
            duration: 2000,
            position: 'bottom-right'
          })
        }})
    }
  }
}
</script>
