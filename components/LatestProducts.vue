<template>
  <section class="section my-6 container is-fullhd">
    <h1 class="is-size-2 mb-5">Os recém chegados</h1>
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-6">
        <div class="tile">
          <div v-for="product in latestProducts" :key="product.id" class="tile is-parent is-vertical">
            <NuxtLink :to="product.get_absolute_url">
              <article class="tile is-child notification is-primary">
                <p class="title">Vertical...</p>
                <p class="subtitle">Top tile</p>
              </article>
            </NuxtLink>
            <article class="tile is-child notification is-warning">
              <p class="title">...tiles</p>
              <p class="subtitle">Bottom tile</p>
            </article>
          </div>

          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-primary">
              <p class="title">Vertical...</p>
              <p class="subtitle">Top tile</p>
            </article>
            <article class="tile is-child notification is-warning">
              <p class="title">...tiles</p>
              <p class="subtitle">Bottom tile</p>
            </article>
          </div>

        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-success">
          <div class="content">
            <p class="title">Tall tile</p>
            <p class="subtitle">With even more content</p>
            <div class="content">
              <!-- Content -->
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
      latestProducts: []
    }
  },
  mounted() {
    this.getLatestProducts()
  },
  methods: {
    async getLatestProducts() {
      const response = await this.$axios
                                 .get('/api/v1/latest-products/')
      this.latestProducts = await response.data
    },
  }
}
</script>
