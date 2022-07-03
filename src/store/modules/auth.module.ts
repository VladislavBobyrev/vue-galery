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
      return state.authToken = token
    },
    // удаляем токен из стэйта и локального хранилища
    REMOVE_TOKEN(state:any)
    {
      localStorage.removeItem(AUTH_TOKEN_KEY)
      return state.authToken = null
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
        const response = await fetch('https://track-api.leadhit.io/client/test_auth', {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json',
            'Api-Key': '5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo',
            'Leadhit-Site-Id': '5f8475902b0be670555f1bb3',
          },
        })

        if (response.ok)
        {
          await commit('SET_TOKEN', '5f8475902b0be670555f1bb3')
        }
      }
      catch (e) {}
    },
  },
}