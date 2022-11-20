<template>
  <div>
    <Banners />
    <Brands />
    <!-- <LatestProducts :items="latestProducts" /> -->
    <SectionCategory :items="categoryOne" />
    <!-- <SectionCategory :items="categoryTwo" /> -->
    <Newsletter />
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  auth: false,

  async asyncData({ $http }) {
    // let latestProducts
    // let categoryTwo

    // $axios.$get('/api/v1/latest-products/').then((res) => {
    //   latestProducts = res.data
    // })

    const categoryOne = await $http.$get(`/api/v1/product-category/1/`)
    // $axios.$get(`/api/v1/product-category/2/`).then((res) => {
    //   categoryTwo = res.data
    // })
    return {
      // latestProducts,
      categoryOne,
      // categoryTwo,
    }
  },
}
</script>
