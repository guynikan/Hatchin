<template>
  <div>
    <Banners/>
    <Brands/>
    <LatestProducts/>
    <SectionCategory/>
    <SectionCategory/>
    <Newsletter/>
  </div>
</template>

<script>

export default {
  name: 'HomePage',

  beforeCreate() {
    this.$store.commit('initializeStore')

    const token = this.$store.state.token

    if (token) {
        this.$axios.defaults.headers.common.Authorization = "Token " + token
    } else {
        this.$axios.defaults.headers.common.Authorization = ""
    }
  },


}
</script>
