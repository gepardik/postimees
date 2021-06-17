export const state = () => ({
    section: null
})

export const mutations = {
    setSection(state, section) {
        state.section = section
    }
}

export const actions = {
    async fetchSection({commit}) {
        const section = await this.$axios.$get('https://services.postimees.ee/rest/v1/sections/81')
        commit('setSection', section)
    }
}

export const getters = {
    section: s => s.section
}
