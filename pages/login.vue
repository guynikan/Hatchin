<template>
     <section class="container is-max-desktop">
    <form class="box is-flex is-flex-direction-column">
      <NuxtLink class="ml-auto mr-auto" to="/signup">Cadastre-se</NuxtLink>
      <hr>
        <span class="ml-auto mr-auto">Ou</span>
      <b-field label="E-mail">
        <b-input
          placeholder="joao@email.com">
        </b-input>
      </b-field>

      <b-field label="Senha">
        <b-input type="password"
          placeholder="********"
          password-reveal>
        </b-input>
        </b-field>

        <b-button type="is-primary" native-type="submit" class="my-6 ml-auto mr-auto" outlined>Entrar</b-button>
        <NuxtLink class="ml-auto mr-auto" to="/password-recovery">Esqueci minha senha</NuxtLink>
    </form>
    </section>
</template>
<script>
export default {
  layout: "light"
}
</script>
