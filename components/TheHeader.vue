<template>
  <header class="mb-6">
    <div>
      <ul class="has-background-light px-6 is-flex is-hidden-mobile  is-justify-content-space-between is-align-content-center">
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
    <div class="p-6">
      <b-navbar>
        <template #brand>
          <b-navbar-item class="pl-0 pr-6" tag="router-link" :to="{ path: '/' }">
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
          <b-navbar-dropdown label="Roupas">
            <b-navbar-item href="#">
              Roupas
            </b-navbar-item>
          </b-navbar-dropdown>

            <b-navbar-item href="#">
              Vestidos
            </b-navbar-item>
          <b-navbar-dropdown label="Acessórios">
            <b-navbar-item href="#">
              Acessórios 
            </b-navbar-item>
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
              <NuxtLink to="/login">
                <span class="icon">
                  <i class="material-icons-outlined">person</i>
                </span>
              </NuxtLink>

            </b-navbar-item>

            <b-navbar-item tag="div">
              <NuxtLink to="/personal-data">
                <span class="icon">
                  <i class="material-icons-outlined">shopping_bag</i>
                </span>
              </NuxtLink>
            </b-navbar-item>
        </template>
          </b-navbar>
    </div>
    <section>
      <Search/>
    </section>
  </header>
</template>

<script>
export default {
}
</script>
