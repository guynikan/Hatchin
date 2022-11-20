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

  asyncData({ $axios }) {
    let latestProducts;
    $axios.get(
      '/api/v1/latest-products/'
    ).then(({ data }) => { latestProducts = data})

    // const categoryOne = await $axios.get(`/api/v1/product-category/1/`)

    // const categoryTwo = await $axios.get(`/api/v1/product-category/2/`)

    return {
      latestProducts,
    }
  },
}
</script>
