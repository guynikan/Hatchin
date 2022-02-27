<template>
  <section class="container">
    <form>
      <div class="columns">
        <div class="column is-half">
          <b-field label="Primeiro nome">
            <b-input v-model="firstname"></b-input>
          </b-field>
        </div>

        <div class="column is-half">
          <b-field label="Último nome">
            <b-input v-model="lastname"></b-input>
          </b-field>
        </div>
      </div>
      <div class="columns">
        <div class="column is-three-quarters">
          <b-field label="CPF">
            <b-input v-model="cpf"></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field label="Data de nascimento">
            <b-datepicker
              v-model="selected"
              :show-week-number="showWeekNumber"
              :locale="pt-BR"
              placeholder="Clique para selecionar"
              icon="calendar-today"
              :icon-right="selected ? 'close-circle' : ''"
              icon-right-clickable
              @icon-right-click="clearDate"
              trap-focus>
            </b-datepicker>
          </b-field>
        </div>
      </div>
      <div class="columns">
        <div class="column is-half">
          <b-field label="Telefone">
            <b-input v-model="telefone"></b-input>
          </b-field>
        </div>
        <div class="column is-half">
          <b-field label="E-mail">
            <b-input v-model="email"></b-input>
          </b-field>
        </div>
      </div>
      <div class="columns">
        <div class="column is-half">
          <b-field label="Senha atual">
            <b-input type="password"
              placeholder="********"
              password-reveal
            >
            </b-input>
          </b-field>
        </div>

        <div class="column is-half">
          <b-field label="Nova senha">
            <b-input type="password"
              placeholder="********"
              password-reveal
            >
            </b-input>
          </b-field>
        </div>
      </div>
        <b-button type="is-primary" native-type="submit" class="my-6 ml-auto mr-auto" outlined>Salvar alterações</b-button>
    </form>
  </section>
</template>
<script>
export default {
  layout: "sidebar"
}
</script>
