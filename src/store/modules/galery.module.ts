import { Commit } from 'vuex'


export default {
  namespaced: true,

  state()
  {
    return {
      dataGlery: [],
    }
  },
  mutations: {
    SET_DATAGALERY(state:any, data:any)
    {
      state.dataGlery = data
    },
  },
  getters: {

  },
  actions: {
    async getImage({ commit }: { commit: Commit })
    {
      // const data = await fetch('https://images.nasa.gov/')
      //   .then((item) => item.json())

      // commit('SET_DATAGALERY', data.results)
      // console.log(data.results)
      // return data
    },
  },
}