<template>
  <div>
    <Banners />
    <Brands />
    <LatestProducts />
    <SectionCategory :items="categoryOne" />
    <SectionCategory :items="categoryTwo" />
    <Newsletter />
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  auth: false,

  data() {
    return {
      categoryOne: [],
      categoryTwo: [],
    }
  },

  mounted() {
    this.getProductsByCategory()
  },

  methods: {
    getProductsByCategory() {
      this.$axios.get(`/api/v1/product-category/1/`)
      .then((products) => {
          this.categoryOne = products.data
        })

      this.$axios.get(`/api/v1/product-category/2/`)
      .then((products) => {
          this.categoryTwo = products.data
        })
    },
  },
}
</script>
