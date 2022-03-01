<template>
     <section class="container is-max-desktop">
    <form class="box is-flex is-flex-direction-column">
      <NuxtLink class="ml-auto mr-auto is-uppercase is-primary" to="/login">Entrar</NuxtLink>
      <hr>
      <b-field label="E-mail">
        <b-input
          placeholder="joao@email.com">
        </b-input>
      </b-field>

      <b-button type="is-primary" native-type="submit" class="my-6 ml-auto mr-auto is-uppercase" outlined>Solicitar recuperação</b-button>
    </form>
    </section>
</template>
<script>
export default {
  layout: "light"
}
</script>

