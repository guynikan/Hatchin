export const state = () => ({
  cart: {
    items: []
  },
  isAuthenticated: false,
  token: '',
  isLoading: false
})

export const mutations = {
  initializeStore(state) {
    if(process.client) {
      if (localStorage.getItem('token')) {
        state.token = localStorage.getItem('token')
        state.isAuthenticated = true
      } else {
        state.token = ''
        state.isAuthenticated = false
      } 


    }
  },
  setIsLoading(state, status) {
    state.isLoading = status
  },
  setToken(state, token) {
    state.token = token
    state.isAuthenticated = true
  },  
  removeToken(state) {
    state.token = ''
    state.isAuthenticated = false
  },
}

export const actions = {

}
