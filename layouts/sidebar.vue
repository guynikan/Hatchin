<template>
  <div>
    <TheHeader/>
    <div class="is-flex">
      <div class="menu tile is-vertical is-2">
        <div class="is-flex">
          Olá, @!
        </div>
        <ul class="menu-list">
          <NuxtLink to="/">Página inicial</NuxtLink>
          <NuxtLink to="/personal-data">Meus dados</NuxtLink>
          <NuxtLink to="/addresses">Endereços</NuxtLink>
          <NuxtLink to="/favorites">Favoritos</NuxtLink>
          <NuxtLink to="/orders">Pedidos</NuxtLink>
          <NuxtLink to="/devolutions">Trocas e devoluções</NuxtLink>
        </ul>
      </div>
      <Nuxt/>
    </div>
    <TheFooter />
  </div>
</template>
