<template>
  <section class="section my-6 container is-fullhd">
    <h1 class="is-size-2 mb-5">Os recém chegados</h1>
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-6">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <NuxtLink
              v-for="product in firstHalf"
              :key="product.id"
              :to="product.get_absolute_url"
              class="tile is-child notification is-primary"
              :style="{
                backgroundImage: `url(${getImage(product)})`,
                backgroundPosition: '50% 50%',
                backgroundSize: 'cover',
              }"
            >
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="tile is-parent">
        <article
          class="tile is-child notification is-success"
          :style="{
            backgroundImage: `url(${imageAbsoluteUrl(mainProduct.image.url)})`,
            height: '500px',
            backgroundPosition: '50% 50%',
            backgroundSize: 'cover',
          }"
        >
          <div class="content">
            <div class="content"></div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'LatestProducts',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    ...mapGetters(['imageAbsoluteUrl']),

    firstHalf() {
      const list = this.items
      const middleIndex = Math.ceil(list.length / 2)

      return list.splice(0, middleIndex)
    },

    secondHalf() {
      const list = this.items
      const middleIndex = Math.ceil(list.length / 2)

      return list.splice(-middleIndex)
    },

    mainProduct() {
      const products = this.items
      let img = { url: '/media/uploads/calca-alfaitaria.png' }

      if (products[0] && products[0].type.images) {
        img = products[0].type.images.find((img) => img.default)
      }

      return { name: '', image: img, ...products[0] }
    },
  },

  methods: {
    getImage(product) {
      const {
        type: { images },
      } = product
      const { url } = images.find((img) => img.default)
      return this.imageAbsoluteUrl(url)
    },
  },
}
</script>
