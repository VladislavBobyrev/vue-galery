import { Commit } from 'vuex'

const AUTH_TOKEN_KEY = 'auth-token'

export default {
  namespaced: true,

  state()
  {
    return {
      authToken: localStorage.getItem(AUTH_TOKEN_KEY),
    }
  },
  mutations: {
    // устанавливаем токен при авторизации в стэйт и локальное хранилище
    SET_TOKEN(state:any, token:any)
    {
      localStorage.setItem(AUTH_TOKEN_KEY, token)
      return state.token = token
    },
    // удаляем токен из стэйта и локального хранилища
    REMOVE_TOKEN(state:any)
    {
      localStorage.removeItem(AUTH_TOKEN_KEY)
      return state.token = null
    },
  },
  getters: {
    authToken(state:any)
    {
      return state.authToken
    },
    isAuthenticated(_:any, getters:any)
    {
      // приводим к boolean
      return !!getters.authToken
    },
  },
  actions: {
    async login({ commit }: { commit: Commit })
    {
      try
      {
        await commit('SET_TOKEN', '5f8475902b0be670555f1bb3')
      }
      catch (e) {}
    },
  },
}