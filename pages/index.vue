<template>
  <div>
      <Banner />
      <Article
        v-for="(article, index) of articles"
        :key="index"
        :images="article.thumbnail.sources"
        :headline="article.headline"
        :number="index + 1"
        :text="article.editorsChoice.articleLead[0].html"
        :link="domain + '/' + article.id"
      />
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import Article from '@/components/NewsArticle'

export default {
  mounted: () => {
    const screenHeight = window.innerHeight
    const navbarHeight = document.querySelector('.navbar').offsetHeight

    const banner = document.querySelector('.banner')
    banner.style.height = (screenHeight - navbarHeight) + 'px'
  },
  async fetch({store}) {
      if (store.getters.articles.length === 0) {
        await store.dispatch('fetchArticles')
      }
      if (store.getters.section === null) {
        await store.dispatch('fetchSection')
      }
    },
    computed: {
      articles() {
        return this.$store.getters.articles
      },
      section() {
        return this.$store.getters.section
      },
      domain() {
        return this.section.domain
      },
      social() {
        return this.section.meta.social
      },
      email() {
        return this.section.editor.email
      }
    },
    components: {
      Banner,
      Article
    },
    data: () => ({
      orientation: 'landscape'
    })
}
</script>

<style>
</style>
