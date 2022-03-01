<template>
  <section class="section column is-8 is-desktop">
    <form>
      <div class="columns">
        <b-field class="column is-four-fifths" label="Rua">
        <b-input v-model="street"></b-input>
        </b-field>

        <b-field class="column" label="Número">
          <b-input v-model="number"></b-input>
        </b-field>
      </div>

      <div class="columns">
        <b-field class="column is-two-fifths" label="Complemento">
          <b-input v-model="complement"></b-input>
        </b-field>

        <b-field class="column" label="Referência">
          <b-input v-model="refer"></b-input>
        </b-field>
      </div>

      <div class="columns">
        <b-field class="column is-two-fifths" label="CEP">
          <b-input v-model="cep"></b-input>
        </b-field>

        <b-field class="column is-one-third" label="Estado">
          <b-input v-model="state"></b-input>
        </b-field>

        <b-field class="column" label="Cidade">
          <b-input v-model="city"></b-input>
        </b-field>
      </div>

      <div class="columns">
        <b-field class="column is-half" label="Bairro">
          <b-input v-model="district"></b-input>
        </b-field>

        <b-tooltip square class="column is-half" label="O nome do recebedor é quem poderá receber a sua encomenda neste endereço">
          <b-field label="Nome do recebedor">
            <b-input v-model="recipientName"></b-input>
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
        <b-button type="is-primary" native-type="submit" class="my-6 is-pulled-left" outlined>Salvar endereço</b-button>
        <b-button type="is-secondary" native-type="submit" class="my-6 is-pulled-right" outlined>Adicionar novo</b-button>
    </form>
  </section>
</template>
<script>
export default {
  layout: "authenticated"
}
</script>
