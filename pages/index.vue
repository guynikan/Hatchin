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
    let latestProducts
    let categoryOne
    let categoryTwo

    $axios.get('/api/v1/latest-products/').then(({ data }) => {
      latestProducts = data
    })

    $axios.get(`/api/v1/product-category/1/`).then((res) => {
      console.log('aaaaaaaaaaa', res)
      categoryOne = res
    })
    $axios.get(`/api/v1/product-category/2/`).then(({ data }) => {
      categoryTwo = data
    })

    console.log('kdddd', categoryOne)

    return {
      latestProducts,
      categoryOne,
      categoryTwo,
    }
  },
}
</script>
