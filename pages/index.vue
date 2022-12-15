<template>
  <div>
    <Banners />
    <Brands />
    <LatestProducts :items="latestProducts" />
    <SectionCategory :items="categoryOne" :category="categoryNameOne" />
    <SectionCategory :items="categoryTwo" :category="categoryNameTwo" />
    <Newsletter />
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  auth: false,

  async asyncData({ $http }) {
    const latestProducts = await $http.$get('/api/v1/latest-products/')

    const categoryOne = await $http.$get(`/api/v1/product-category/1/`)
    const categoryTwo = await $http.$get(`/api/v1/product-category/2/`)

    return {
      latestProducts,
      categoryOne,
      categoryTwo,
    }
  },

  computed: {
    categoryNameOne(){
      return this.categoryOne[0].type?.category[0].name
    },
    categoryNameTwo(){
      return this.categoryTwo[0].type?.category[0].name
    }
  }
}
</script>
