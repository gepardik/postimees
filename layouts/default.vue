<template>
  <div>
    <Navbar
      :facebook="social.facebook"
      :twitter="social.twitter"
      :email="email"
      :domain="domain"
    />
    <Nuxt />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  computed: {
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
    Navbar
  }
}
</script>

<style>
  @import url(//db.onlinewebfonts.com/c/cde4f9e112364abddc313cbe503012f5?family=Tabac+Sans);
  @import url(//db.onlinewebfonts.com/c/3abe290b3b44073f5dd869929fd4a28e?family=Tabac+Sans+Light);
  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Tabac Sans Light';
    font-size: 16px;
  }
  a {
    text-decoration: none;
  }
</style>
