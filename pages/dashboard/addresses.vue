<template>
  <section class="section column is-8 is-desktop">
    <form v-for="(address, index) in addresses" :key="index" @submit.prevent="submitForm(index)">
      <div class="columns">
        <b-field class="column is-four-fifths" label="Rua">
        <b-input v-model="address.street"></b-input>
        </b-field>

        <b-field class="column" label="Número">
          <b-input v-model="address.number"></b-input>
        </b-field>
      </div>

      <div class="columns">
        <b-field class="column is-two-fifths" label="Complemento">
          <b-input v-model="address.complement"></b-input>
        </b-field>

        <b-field class="column" label="Referência">
          <b-input v-model="address.refer"></b-input>
        </b-field>
      </div>

      <div class="columns">
        <b-field class="column is-two-fifths" label="CEP">
          <b-input v-model="address.zip_code"></b-input>
        </b-field>

        <b-field class="column is-one-third" label="Estado">
          <b-input v-model="address.state"></b-input>
        </b-field>

        <b-field class="column" label="Cidade">
          <b-input v-model="address.city"></b-input>
        </b-field>
      </div>

      <div class="columns">
        <b-field class="column is-half" label="Bairro">
          <b-input v-model="address.district"></b-input>
        </b-field>

        <b-tooltip square class="column is-half" label="O nome do recebedor é quem poderá receber a sua encomenda neste endereço">
          <b-field label="Nome do recebedor">
            <b-input v-model="address.recipient_name"></b-input>
          </b-field>
        </b-tooltip>
      </div>
      <div class="columns">
        <b-field class="column is-half">
          <div class="control">
            <label class="radio">
              <input type="radio" name="answer">
                Endereço principal
            </label>
          </div>
        </b-field>
      </div>
        <div class="is-flex is-justify-content-space-between">
        <b-button type="is-primary" native-type="submit" class="my-6" outlined>Salvar endereço</b-button>
        </div>
    </form>
        <b-button type="is-secondary" class="my-6 is-pulled-right" outlined @click="addNewAddress">Adicionar novo</b-button>
  </section>
</template>
<script>
import { mapState } from 'vuex';

const address = {
  street: "",
  number: "",
  complement: "",
  refer: "",
  zip_code: "",
  state: "",
  city: "",
  district: "",
  recipient_name: "",
}

export default {
  layout: "authenticated",

  data() {
    return {
      addresses: []
    }
  },

  computed: {
    ...mapState(["customer"])
  },

  mounted() {
    this.getAddresses()
  },

  methods: {
    addNewAddress(){
      this.addresses.push(address)
    },
    async getAddresses(){
      const response = await this.$http
                                 .$get('api/v1/address')
      const formData = await response.data

      if(!formData) {
          this.addresses.push(address)
      }

      formData.forEach((data, index) => {
        this.addresses.push(data)
      })

    },

    async submitForm(index){

      console.log('receba', index)

      const formData = this.addresses[index]
      formData.customer = this.customer.id

      if(formData.id) {
        try {
          await this.$http.$patch(`/api/v1/address/${formData.id}/`, formData)
          // TODO add toast success message
        } catch(error) {
          // TODO handling errors messages in validation fields messages
          console.log(error.response)
        }
      } else {
        try {
          await this.$http.$post('/api/v1/address/', formData)
          // TODO add toast success message
        } catch(error) {
          // TODO handling errors messages in validation fields messages
          console.log(error.response)
        }
      }

    }
  }
}
</script>
