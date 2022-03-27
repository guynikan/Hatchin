export const state = () => ({
  cart: {
    items: []
  },
  customer: {
    id: null,
    first_name: "",
    last_name: "",
    cpf: "",
    birthdate: undefined,
    phone: "",
    email: ""
  },
  isLoading: false
})

export const mutations = {
  setIsLoading(state, status) {
    state.isLoading = status
  },

  setCustomer(state, payload) {
    state.customer = { ...state.customer, ...payload}
  }
}

export const actions = {

}
