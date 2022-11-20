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

  async asyncData({ $axios }) {
    const latestProducts = await $axios.get(
      'http://localhost:8000/api/v1/latest-products/'
    )

    const categoryOne = await $axios.get(`/api/v1/product-category/1/`)

    const categoryTwo = await $axios.get(`/api/v1/product-category/2/`)

    return {
      latestProducts,
      categoryOne,
      categoryTwo,
    }
  },
}
</script>
