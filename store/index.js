export const state = () => ({
  cart: {
    items: [],
  },
  product: {},
  sectionProducts: [],
  relatedProducts: [],
  mainImage: '',
  customer: {
    id: null,
    first_name: '',
    last_name: '',
    cpf: '',
    birthdate: undefined,
    phone: '',
    email: '',
  },
  isLoading: false,
})

export const getters = {
  imageAbsoluteUrl: () => (url) => {
    return process.env.baseurl + url.substring(1)
  },

  mainImage: (state) => {
    return process.env.baseurl + state.mainImage
  },
}

export const mutations = {
  setIsLoading(state, status) {
    state.isLoading = status
  },

  SET_MAIN_IMAGE: (state, image) => (state.mainImage = image),

  SET_PRODUCT: (state, product) => {
    console.log('aqui chega')
    return (state.product = product)
  },

  SET_SECTION_PRODUCTS: (state, products) => (state.sectionProducts = products),

  SET_RELATED_PRODUCTS: (state, products) => (state.relatedProducts = products),

  setCustomer(state, payload) {
    state.customer = { ...state.customer, ...payload }
  },
}

const imageDefault = ({ type }) =>
  type.images.find((image) => image.default).url.substring(1)

export const actions = {
  async getProduct({ dispatch, commit }, route) {
    const product = await this.$http.$get(`/api/v1${route}`)

    commit('SET_PRODUCT', product[0])
    commit('SET_MAIN_IMAGE', imageDefault(product[0]))

    dispatch('getProductByCategory', product[0])
  },

  async getProductByCategory({ commit }, product) {
    const { type } = product
    const related = await this.$http
      .$get(`/api/v1/product-category/${type.category[0].id}`)


    commit('SET_RELATED_PRODUCTS', related)
  },

  getSectionProducts({ commit, state }, categoryId) {
    this.$http
      .$get(`/api/v1/product-category/${categoryId}`)
      .then((products) => {
        commit('SET_SECTION_PRODUCTS', products.data)
      })
  },
}
