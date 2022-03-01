<template>
  <b-sidebar
    class="column is-2"
    type="is-white"
    position="static"
    :mobile="mobile"
    open
  >
    <div class="p-1">
      <div class="is-flex is-justify-content-center">
        Olá, @!
      </div>
      <b-menu class="is-custom-mobile">
        <b-menu-list>
          <b-menu-item class="is-uppercase" tag="nuxt-link" to="/personal-data" label="Meus dados"></b-menu-item>
          <b-menu-item class="is-uppercase" tag="nuxt-link" to="/addresses" label="Endereços"></b-menu-item>
          <b-menu-item class="is-uppercase" tag="nuxt-link" to="/favorites" label="Favoritos"></b-menu-item>
          <b-menu-item class="is-uppercase" tag="nuxt-link" to="/orders" label="Pedidos"></b-menu-item>
          <b-menu-item class="is-uppercase" tag="nuxt-link" to="/devolutions" label="Trocas e devoluções"></b-menu-item>
          <b-menu-item class="is-uppercase" label="Sair"></b-menu-item>
        </b-menu-list>
      </b-menu>
    </div>
  </b-sidebar>
</template>

<script>
export default {
  data() {
    return {
      expandOnHover: false,
      expandWithDelay: false,
      mobile: "hide",
    };
  }
};
</script>
<style lang="scss">
$sidebar-box-shadow: 0px 0px;

</style>
