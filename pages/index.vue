<template>
  <div>
      <Banner />
      <Article
        v-for="(article, index) of articles"
        :key="index"
        :images="article.thumbnail.sources"
        :headline="article.headline"
        :number="index + 1"
        :text="article.editorsChoice.articleLead[0].html.substr(0, 255) + '...'"
        :link="domain + '/' + article.id"
      />
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import Article from '@/components/NewsArticle'

export default {
  async fetch({store}) {
      if (store.getters['articles/articles'].length === 0) {
        await store.dispatch('articles/fetchArticles')
      }
      if (store.getters.section === null) {
        await store.dispatch('fetchSection')
      }
    },
    computed: {
      articles() {
        return this.$store.getters['articles/articles']
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
