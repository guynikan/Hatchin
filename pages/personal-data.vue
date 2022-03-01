<template>
  <section class="section column is-8 is-desktop">
    <form>
      <div class="columns">
        <b-field class="column is-half" label="Primeiro nome">
        <b-input v-model="firstname"></b-input>
        </b-field>

        <b-field class="column is-half" label="Último nome">
          <b-input v-model="lastname"></b-input>
        </b-field>
      </div>

      <div class="columns">
        <b-field class="column is-three-quarters" label="CPF">
          <b-input v-model="cpf"></b-input>
        </b-field>

        <b-field class="column" label="Data de nascimento">
          <b-datepicker
            v-model="selected"
            :locale="locale"
            placeholder="Clique para selecionar"
            icon="calendar-today"
            :icon-right="selected ? 'close-circle' : ''"
            icon-right-clickable
            trap-focus>
            @icon-right-click="clearDate"
          </b-datepicker>
        </b-field>
      </div>

      <div class="columns">
        <b-field class="column is-half" label="Telefone">
          <b-input v-model="telefone"></b-input>
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
        <b-button type="is-primary" native-type="submit" class="my-6 ml-auto mr-auto" outlined>Salvar alterações</b-button>
    </form>
  </section>
</template>
<script>
export default {
  layout: "authenticated",

  data: () => {
    return {
      firstname: "",
      lastname: "",
      cpf: "",
      selected: null,
      telefone: "",
      email: "",
      locale: "pt-BR" ,

    }
  }
}
</script>
