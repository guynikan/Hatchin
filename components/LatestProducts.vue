<template>
  <section class="section my-6 container is-fullhd">
    <h1 class="is-size-2 mb-5">Os recém chegados</h1>
    <div class="tile is-parent">
      <article v-for="item in items" :key="item.id" class="tile is-child box">
        <p class="title">{{ item.name }}</p>
        <figure class="image is-3by2">
          <a :href="item.get_absolute_url"><img :src="mainImage(item.type.images)" 
            :style="{ 'object-fit': 'cover'}" /></a>
        </figure>
      </article>
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
    mainImage(images) {
      const imgDefault = images.find((img) => img.default).url

      return this.imageAbsoluteUrl(imgDefault)
    },
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
