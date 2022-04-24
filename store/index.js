export const state = () => ({
  cart: {
    items: [],
  },
  product: {},
  sectionProducts: [],
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

  SET_PRODUCT: (state, product) => (state.product = product),

  SET_SECTION_PRODUCTS: (state, products) => (state.sectionProducts = products),

  setCustomer(state, payload) {
    state.customer = { ...state.customer, ...payload }
  },
}

const imageDefault = ({ type }) => ( type.images.find(image => image.default).url.substring(1))

export const actions = {
  getProduct({ commit }, route) {
    this.$axios.get(`/api/v1${route}`).then((product) => {
      commit('SET_PRODUCT', product.data[0])
      commit('SET_MAIN_IMAGE', imageDefault(product.data[0]))
    })

  },

  getSectionProducts({ commit, state }, categoryId) {
    this.$axios
      .get(`/api/v1/product-category/${categoryId}`)
      .then((products) => {
        commit('SET_SECTION_PRODUCTS', products.data)
      })
  },
}
