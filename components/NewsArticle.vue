<template>
  <div class="article">
    <div class="article-image-container">
      <div class="article-number-mobile">
        <div class="article-number"><div class="number-circle">{{number}}</div></div>
      </div>
      <picture>
        <source media="(min-width: 1020px) and (max-width: 1400px) and (min-height: 1020px) and (max-height: 1400px) and (orientation: landscape)" :srcset="images.square.medium">
        <source media="(orientation: landscape)" :srcset="images.landscape.medium">
        <source media="(orientation: landscape) and (max-width: 820px)" :srcset="images.landscape.small">
        <source media="(orientation: portrait)" :srcset="images.portrait.medium">
        <source media="(orientation: portrait) and (max-width: 450px)" :srcset="images.portrait.small">
        <img :src="images.square.medium" :alt="headline">
      </picture>
    </div>
    <a
      :id="'headline-' + number"
      class="headline"
      :href="'http://' + link"
      target="_blank"
    >
      {{headline}}
    </a>
    <div class="overlay"></div>
    <div class="article-text-container">
      <div class="article-number"><div class="number-circle">{{number}}</div></div>
      <div class="article-text" :id="'article-text-' + number" v-html="text"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['images', 'headline', 'number', 'text', 'link'],
  mounted: function() {
    if (window.innerWidth <= 900) {
      return
    }

    if (this.number % 2 === 0) {
      const articleText = document.querySelector('#article-text-' + this.number)
      const articleTextOffsetLeft = articleText.offsetLeft
      const headline = document.querySelector('#headline-' + this.number)
      headline.style.marginLeft = articleTextOffsetLeft + 'px'
    }
  }
}
</script>

<style scoped>
.article {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100vh;
}

a.headline,
a.headline:hover {
  display: block;
  font-family: 'Tabac Sans';
  font-size: 6.3rem;
  line-height: 7.5rem;
  color: #fff;
  font-weight: bold;
  margin-bottom: 142px;
  margin-right: 120px;
  margin-left: 126px;
  z-index: 10;
}

.article:nth-child(even) .headline {
  margin-right: 126px;
}

.article-image-container {
  height: 100vh;
  width: 100%;
  position: absolute;
  overflow: hidden;
}

.article img {
  max-height: 100%;
  min-width: 100%;
  object-fit: cover;
}

.article-text-container {
  display: flex;
  justify-content: space-between;
  background-color: #181818;
  color: #fff;
  font-family: 'Tabac Sans Light';
  font-size: 40px;
  line-height: 48px;
  z-index: 10;
}

.article-text {
  margin: 65px 74px 65px 225px;
}

.article:nth-child(odd) .article-text {
  margin-left: 126px;
  margin-right: 112px;
}

.article-number {
  font-weight: bolder;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #1ba6e2;
  font-size: 48px;
  padding: 20px;
  width: 650px;
  height: 346px;
  min-width: 160px;
  min-height: 172px;
}

.number-circle {
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  border: 2px solid rgba(255, 255, 255, .5);
  width: 190px;
  height: 190px;
  border-radius: 50%;
  margin: auto;
}

.article:nth-child(odd) .article-number {
  order: 2;
}

.overlay {
  position: absolute;
  height: 100vh;
  width: 100%;
  background: linear-gradient(0deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.18039) 100%);
  opacity: 0.902;
}

.article-number-mobile {
  display: none;
}

@media screen and (max-width: 2200px) {
  a.headline,
  a.headline:hover {
    font-size: 90px;
    line-height: 100px;
    margin-bottom: 100px;
    margin-left: 110px;
  }
  .article:nth-child(even) .headline {
    margin-right: 80px;
  }
  .article-number {
    width: 800px;
    height: 310px;
  }
  .number-circle {
    width: 170px;
    height: 170px;
  }
  .article-text-container {
    font-size: 38px;
    line-height: 46px;
  }
  .article-text {
    margin: 60px 70px 20px 180px;
  }
  .article:nth-child(odd) .article-text {
    margin-left: 110px;
    margin-right: 100px;
  }
}

@media screen and (orientation: portrait) {
  .article-image-container img {
    object-position: top;
  }
}

@media screen and (max-width: 1920px) {
  a.headline,
  a.headline:hover {
    font-size: 68px;
    line-height: 82px;
    margin-bottom: 80px;
    margin-left: 80px;
  }
  .article:nth-child(even) .headline {
    margin-right: 80px;
  }
  .article-text-container {
    font-size: 28px;
    line-height: 38px;
  }
  .article-text {
    margin: 30px 40px 20px 70px;
  }
  .article:nth-child(odd) .article-text {
    margin-left: 80px;
    margin-right: 80px;
  }
  .article-number {
    font-size: 42px;
    padding: 10px;
    width: 500px;
    height: 220px;
  }
  .number-circle {
    width: 120px;
    height: 120px;
  }
}

@media screen and (max-width: 1540px) {
  a.headline,
  a.headline:hover {
    font-size: 60px;
    line-height: 70px;
    margin-right: 80px;
    margin-bottom: 60px;
  }
  .article-number {
    font-size: 40px;
    padding: 6px;
    width: 400px;
    height: 220px;
  }
  .number-circle {
    width: 100px;
    height: 100px;
  }
  .article-text {
    margin-top: 25px;
    margin-bottom: 15px;
    margin-left: 50px;
  }
}

@media screen and (max-width: 1300px) {
  a.headline,
  a.headline:hover {
    font-size: 58px;
    line-height: 66px;
    margin-bottom: 30px;
    margin-left: 40px;
  }
  .article-number {
    display: none;
  }
  .article-number-mobile {
    display: block;
    position: absolute;
    z-index: 100;
  }
  .article-number-mobile .article-number {
    color: #fff;
    font-size: 38px;
    display: flex;
    width: 120px;
    height: 120px;
  }
  .number-circle {
    width: 100px;
    height: 100px;
  }
  .article-text,
  .article:nth-child(odd) .article-text {
    margin-left: 40px;
    margin-right: 40px;
    width: 100%;
  }
}

@media screen and (max-width: 1100px) {
  a.headline,
  a.headline:hover {
    font-size: 48px;
    line-height: 58px;
    margin-bottom: 20px;
    margin-left: 40px;
  }
  .article-number-mobile .article-number {
    font-size: 30px;
    display: flex;
    width: 110px;
    height: 110px;
    min-width: 80px;
    min-height: 80px;
  }
  .number-circle {
    width: 80px;
    height: 80px;
  }
  .article-text,
  .article:nth-child(odd) .article-text {
    margin-left: 40px;
    margin-right: 40px;
    width: 100%;
    font-size: 20px;
  }
}

@media screen and (max-width: 1100px) and (orientation: portrait) {
  a.headline,
  a.headline:hover {
    margin-bottom: 30px;
  }
  .article-number-mobile .article-number {
    color: #fff;
    font-size: 38px;
    display: flex;
    width: 120px;
    height: 120px;
  }
  .number-circle {
    width: 100px;
    height: 100px;
  }
}

@media screen and (max-width: 900px) and (orientation: landscape) {
  a.headline,
  a.headline:hover {
    font-size: 30px;
    line-height: 38px;
    margin-bottom: 20px;
    margin-left: 20px;
  }
  .article-text,
  .article:nth-child(odd) .article-text {
    margin: 10px 20px 10px 20px;
    width: 100%;
    font-size: 18px;
    line-height: 24px;
  }
  .article-number-mobile .article-number {
    font-size: 20px;
    width: 90px;
    height: 90px;
    min-width: 80px;
    min-height: 80px;
  }
  .number-circle {
    width: 60px;
    height: 60px;
  }
}

@media screen and (max-width: 700px) and (orientation: landscape) {
  a.headline,
  a.headline:hover {
    font-size: 22px;
    line-height: 26px;
    margin-bottom: 10px;
  }
  .article-text,
  .article:nth-child(odd) .article-text {
    margin: 10px 20px 10px 20px;
    width: 100%;
    font-size: 16px;
    line-height: 20px;
  }
  .article-text-container {
    min-height: 100px;
  }
}

@media screen and (max-width: 600px) and (orientation: portrait) {
  a.headline,
  a.headline:hover {
    font-size: 36px;
    line-height: 45px;
    margin-bottom: 20px;
    margin-left: 40px;
  }
  .article:nth-child(even) .headline {
    right: 20px;
  }
  .article-number-mobile .article-number {
    font-size: 38px;
    width: 120px;
    height: 120px;
  }
  .number-circle {
    width: 100px;
    height: 100px;
  }
  .article-text,
  .article:nth-child(odd) .article-text {
    margin-left: 40px;
    margin-right: 40px;
    width: 100%;
    font-size: 18px;
    line-height: 26px;
  }
}

@media screen and (max-width: 480px) and (orientation: portrait) {
  a.headline,
  a.headline:hover {
    font-size: 28px;
    line-height: 34px;
    margin-bottom: 30px;
    margin-left: 20px;
  }
  .article-text,
  .article:nth-child(odd) .article-text {
    margin: 20px;
    width: 100%;
    font-size: 18px;
    line-height: 26px;
  }
  .article-number-mobile .article-number {
    font-size: 34px;
    width: 100px;
    height: 100px;
  }
  .number-circle {
    width: 70px;
    height: 70px;
  }
}

@media screen and (max-width: 350px) and (orientation: portrait) {
  a.headline,
  a.headline:hover {
    font-size: 28px;
    line-height: 34px;
    margin-bottom: 10px;
    margin-left: 20px;
  }
  .article-text,
  .article:nth-child(odd) .article-text {
    margin: 20px;
    width: 100%;
    font-size: 18px;
    line-height: 26px;
  }
  .article-number-mobile .article-number {
    font-size: 34px;
    width: 100px;
    height: 100px;
  }
  .number-circle {
    width: 70px;
    height: 70px;
  }
}

@media screen and (max-height: 300px) and (orientation: landscape){
  .article-number-mobile {
    right: 0;
  }
}
</style>
