export const state = () => ({
    articles: [],
    section: null
})

export const mutations = {
    setArticles(state, articles) {
        state.articles = articles
    },
    setSection(state, section) {
        state.section = section
    }
}

export const actions = {
    async fetchArticles({commit}) {
        const articles = await this.$axios.$get('https://services.postimees.ee/rest/v1/sections/81/editorsChoice/articles?limit=5')
        commit('setArticles', articles)
    },
    async fetchSection({commit}) {
        const section = await this.$axios.$get('https://services.postimees.ee/rest/v1/sections/81')
        commit('setSection', section)
    }
}

export const getters = {
    articles: s => s.articles,
    section: s => s.section
}