export const state = () => ({
  articles: []
})

export const mutations = {
  setArticles(state, articles) {
    state.articles = articles
  }
}

export const actions = {
  async fetchArticles({commit}) {
    const articles = await this.$axios.$get('https://services.postimees.ee/rest/v1/sections/81/editorsChoice/articles?limit=5')
    commit('setArticles', articles)
  }
}

export const getters = {
  articles: s => s.articles
}
