<template>
  <header>
    <div>
      <ul class="has-background-primary-light px-6 is-flex is-hidden-mobile  is-justify-content-space-between is-align-content-center">
        <li class="is-flex is-align-content-center py-3 ">
          <span class="icon pr-2">
            <i class="material-icons-outlined">
              local_shipping
            </i>
          </span>
          <span>Frete gratís</span></li>
        <li class="is-flex is-align-content-center py-3 ">
          <span class="icon pr-2">
            <i class="material-icons-outlined">
              change_circle
            </i>
          </span>
          <span>Troca gratís</span></li>
        <li class="is-flex is-align-content-center py-3 ">
          <span class="icon pr-2">
            <i class="material-icons-outlined">
              credit_card
            </i>
          </span>
          <span>Até 10x sem juros</span></li>
        <li class="is-flex is-align-content-center py-3 ">
          <span class="icon pr-2">
            <i class="material-icons-outlined">
              inventory_2
            </i>
          </span>
          <span>Entrega rápida</span></li>
      </ul>
    </div>
    <div class="p-6 has-background-primary">
      <b-navbar type="is-primary" class="has-background-primary">
        <template #brand>
          <b-navbar-item class="pl-0 pr-6" tag="nuxt-link" to="/">
            <h1 class="is-size-2">
              EVABEL
            </h1>
          </b-navbar-item>
        </template>

        <template #start>
          <b-navbar-item href="#">
            Novidades
          </b-navbar-item>
          <b-navbar-item href="#">
            Jeans
          </b-navbar-item>
          <b-navbar-dropdown type="is-primary" collapsible label="Roupas">
            <article class="media">
              <div class="media-content">
                <div class="content">
                  <b-navbar-item style="padding-right: 10rem!important;" class="py-5">Roupas</b-navbar-item>
                  <b-navbar-item style="padding-right: 10rem!important;" class="py-5">Roupas</b-navbar-item>
                  <b-navbar-item style="padding-right: 10rem!important;" class="py-5">Roupas</b-navbar-item>
                  <b-navbar-item style="padding-right: 10rem!important;" class="py-5">Roupas</b-navbar-item>
                  <b-navbar-item style="padding-right: 10rem!important;" class="py-5">Roupas</b-navbar-item>
                </div>
              </div>

              <div class="media-right is-hidden-mobile">
                <figure class="image is-348x348">
                  <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
                </figure>
              </div>
            </article>
          </b-navbar-dropdown>

          <b-navbar-item href="#">
            Vestidos
          </b-navbar-item>
          <b-navbar-dropdown type="is-primary" collapsible label="Acessórios">
            <article class="media">
              <div class="media-content">
                <div class="content">
                  <b-navbar-item style="padding-right: 10rem!important;" class="py-5">Acessórios</b-navbar-item>
                  <b-navbar-item style="padding-right: 10rem!important;" class="py-5">Acessórios</b-navbar-item>
                  <b-navbar-item style="padding-right: 10rem!important;" class="py-5">Acessórios</b-navbar-item>
                  <b-navbar-item style="padding-right: 10rem!important;" class="py-5">Acessórios</b-navbar-item>
                  <b-navbar-item style="padding-right: 10rem!important;" class="py-5">Acessórios</b-navbar-item>
                </div>
              </div>

              <div class="media-right is-hidden-mobile">
                <figure class="image is-348x348">
                  <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
                </figure>
              </div>
            </article>
          </b-navbar-dropdown>

          <b-navbar-item href="#">
            Liquidação
          </b-navbar-item>
        </template>

        <template #end>
            <b-navbar-item tag="div">
              <NuxtLink to="/favorites">
                <span class="icon">
                  <i class="material-icons-outlined">favorite_border</i>
                </span>
              </NuxtLink>

            </b-navbar-item>


            <b-navbar-item tag="div">
              <NuxtLink v-if="loggedIn" to="/dashboard/personal-data">
                <span class="icon">
                  <i class="material-icons-outlined">person</i>
                </span>
              </NuxtLink>

              <NuxtLink v-else to="/login">
                <span class="icon">
                  <i class="material-icons-outlined">person</i>
                </span>
              </NuxtLink>

            </b-navbar-item>

            <b-navbar-item tag="div">
              <NuxtLink to="/dashboard/personal-data">
                <span class="icon">
                  <i class="material-icons-outlined">shopping_bag</i>
                </span>
              </NuxtLink>
            </b-navbar-item>
        </template>
          </b-navbar>
    </div>
      <Search/>
  </header>
</template>

<script>
import { mapState } from 'vuex';

export default {

  computed: {
    ...mapState('auth', ['loggedIn'])
  },

}
</script>
