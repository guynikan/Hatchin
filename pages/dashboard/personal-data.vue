<template>
  <section class="section column is-8 is-desktop">
    <ValidationObserver ref="observer" v-slot="{ invalid, handleSubmit }">
      <form @submit.prevent="handleSubmit(submitForm)">
        <div class="columns">
          <ValidationProvider
              v-slot="{ errors, valid }" 
              rules="required" 
              name="Primeiro nome"
              class="column is-half" 
          >
            <b-field 
                label="Primeiro nome"
                :type="{ 'is-danger': errors[0], 'is-success': valid }"
                :message="errors"
              >
              <b-input v-model="first_name"></b-input>
            </b-field>
          </ValidationProvider>

          <b-field class="column is-half" label="Último nome">
            <b-input v-model="last_name"></b-input>
          </b-field>
        </div>

        <div class="columns">
          <b-field class="column is-two-thirds" label="CPF">
            <b-input v-model="cpf"></b-input>
          </b-field>

          <b-field class="column" label="Data de nascimento">
            <b-datepicker
              v-model="birthdate"
              :locale="locale"
              placeholder="Clique para selecionar"
              icon="calendar-today"
              :icon-right="birthdate ? 'close-circle' : ''"
              icon-right-clickable
              trap-focus>
              @icon-right-click="clearDate"
            </b-datepicker>
          </b-field>
        </div>

        <div class="columns">
          <b-field class="column is-half" label="Telefone">
            <b-input v-model="phone"></b-input>
          </b-field>
          <b-field class="column is-half" label="E-mail">
            <b-input v-model="email"></b-input>
          </b-field>
        </div>

        <div class="columns">
          <b-field class="column is-half" label="Senha atual">
            <b-input type="password"
              placeholder="********"
              password-reveal
            >
            </b-input>
          </b-field>

          <b-field class="column is-half" label="Nova senha">
            <b-input type="password"
              placeholder="********"
              password-reveal
            >
            </b-input>
          </b-field>
        </div>
        <b-button :disabled="invalid" type="is-primary" native-type="submit" class="my-6 ml-auto mr-auto" outlined>Salvar alterações</b-button>
      </form>
    </ValidationObserver>
  </section>
</template>
<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import { mapMutations } from 'vuex';
import { mapFields } from '../../store/helpers';

export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },
  layout: "authenticated",

  data: () => {
    return {
      locale: "pt-BR" ,
    }
  },

  computed: {
    ...mapFields({ fields: [ "id", "first_name", "last_name", "cpf", "birthdate", "phone", "email" ], 
                   base: "customer", 
                   mutation: "setCustomer"
                })
    
  },

  mounted() {
    this.getPersonalData()
  },  

  methods: {
    ...mapMutations([ "setCustomer"]),

    async getPersonalData(){
      const response = await this.$axios
                                  .get('/api/v1/customer/')
      const formData = await response.data

      formData.forEach(data => { 
        this.setCustomer({ id: data.id, 
                           first_name: data.first_name, 
                           last_name: data.last_name, 
                           cpf: data.cpf,
                           birthdate: new Date(data.birthdate),
                           phone: data.phone,
                           email: data.email
                        })
      })

    },
    async submitForm() {
      const formData = {
        first_name: this.first_name,
        last_name: this.last_name,
        cpf: this.cpf,
        birthdate: "1995-05-06",
        phone: this.phone,
        email: this.email,
      }

      if(this.id) {
        try {
          await this.$axios.patch(`/api/v1/customer/${this.id}/`, formData)
          // TODO add toast success message
        } catch(error) {
          // TODO handling errors messages in validation fields messages
          console.log('deu ruim', error.response.data)
        }
      } else {
        try {
          const response = await this.$axios.post('/api/v1/customer/', formData)
          // TODO add toast success message
          console.log('tome', response)

        } catch(error) {
          // TODO handling errors messages in validation fields messages
          console.log('deu ruim', error.response.data)
        }
      }

    }
  }
}
</script>
