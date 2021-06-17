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
  font-size: 100px;
  line-height: 120px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 142px;
  margin-right: 120px;
  margin-left: 875px;
  z-index: 10;
}

.article:nth-child(even) .headline {
  margin-left: 130px;
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
  background-color: #181818;
  color: #fff;
  font-family: 'Tabac Sans Light';
  font-size: 40px;
  line-height: 48px;
  z-index: 10;
}

.article-text {
  margin: 65px 875px 65px 130px;
  height: 216px;
}

.article:nth-child(odd) .article-text {
  margin-left: 875px;
  margin-right: 130px;
}

.article-number {
  float: right;
  font-weight: bolder;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #1ba6e2;
  font-size: 48px;
  width: 650px;
  height: 346px;
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
  float: left;
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

@media screen and (max-width: 2220px) {
  a.headline,
  a.headline:hover {
    margin-left: 700px;
  }
  .article-number {
    font-size: 47px;
    width: 500px;
    height: 300px;
  }
  .number-circle {
    width: 190px;
    height: 190px;
  }
  .article-text {
     margin: 60px 700px 52px 130px;
     height: 188px;
   }
  .article:nth-child(odd) .article-text {
    margin-left: 700px;
    margin-right: 130px;
  }
  @media (orientation: landscape) {
    a.headline,
    a.headline:hover {
      margin-bottom: 50px;
      font-size: 85px;
      line-height: 100px;
    }
    .article:nth-child(even) .headline {
      margin-left: 130px;
    }
  }
}

@media screen and (max-width: 2000px){
  .article-number {
    font-size: 45px;
    width: 450px;
    height: 300px;
  }
  .number-circle {
    width: 190px;
    height: 190px;
  }
  .article-text {
    height: 198px;
  }
  @media (orientation: landscape) {
    a.headline,
    a.headline:hover {
      margin-left: 600px;
      margin-bottom: 50px;
      font-size: 85px;
      line-height: 100px;
    }
    .article:nth-child(even) .headline {
      margin-left: 130px;
    }
    .article-text {
      margin: 50px 600px 50px 130px;
    }
    .article:nth-child(odd) .article-text {
      margin-left: 600px;
      margin-right: 130px;
    }
  }

  @media (orientation: portrait) {
    a.headline,
    a.headline:hover {
      margin-left: 600px;
    }
    .article:nth-child(even) .headline {
      margin-left: 130px;
    }
    .article-text {
      margin: 50px 600px 50px 130px;
    }

    .article:nth-child(odd) .article-text {
      margin-left: 600px;
      margin-right: 130px;
    }
  }
}

@media screen and (max-width: 1800px){
  .article-number {
    font-size: 44px;
    width: 400px;
    height: 300px;
  }
  @media (orientation: landscape) {
    a.headline,
    a.headline:hover {
      margin-left: 550px;
      margin-bottom: 50px;
      font-size: 80px;
      line-height: 95px;
    }
    .article:nth-child(even) .headline {
      margin-left: 120px;
    }
    .article-text {
      margin: 50px 550px 50px 120px;
    }
    .article:nth-child(odd) .article-text {
      margin-left: 550px;
      margin-right: 120px;
    }
  }

  @media (orientation: portrait) {
    a.headline,
    a.headline:hover {
      margin-left: 500px;
    }
    .article:nth-child(even) .headline {
      margin-left: 110px;
    }
    .article-text {
      margin: 50px 500px 50px 110px;
    }

    .article:nth-child(odd) .article-text {
      margin-left: 500px;
      margin-right: 110px;
    }
  }
}
@media screen and (max-width: 1500px){
  .article-number {
    font-size: 43px;
    width: 300px;
    height: 300px;
  }
  .number-circle {
    width: 170px;
    height: 170px;
  }
  @media (orientation: landscape) {
    a.headline,
    a.headline:hover {
      margin-left: 400px;
      margin-bottom: 50px;
      font-size: 70px;
      line-height: 80px;
    }
    .article:nth-child(even) .headline {
      margin-left: 90px;
    }
    .article-text {
      margin: 50px 400px 60px 90px;
      height: 190px;
    }
    .article:nth-child(odd) .article-text {
      margin-left: 400px;
      margin-right: 90px;
    }
    .article-text-container {
      font-size: 36px;
      line-height: 46px;
    }
  }

  @media (orientation: portrait) {
    a.headline,
    a.headline:hover {
      margin-left: 400px;
      margin-bottom: 50px;
      font-size: 90px;
      line-height: 110px;
    }
    .article:nth-child(even) .headline {
      margin-left: 110px;
    }
    .article-text {
      margin: 50px 400px 50px 110px;
    }

    .article:nth-child(odd) .article-text {
      margin-left: 400px;
      margin-right: 110px;
    }
  }
}

@media screen and (max-width: 1300px) {
  @media (orientation: landscape) {
    a.headline,
    a.headline:hover {
      margin-left: 350px;
      margin-bottom: 30px;
      font-size: 50px;
      line-height: 60px;
    }
    .article:nth-child(even) .headline {
      margin-left: 50px;
    }
    .article-text {
      margin: 30px 350px 26px 50px;
      height: 160px;
    }
    .article:nth-child(odd) .article-text {
      margin-left: 350px;
      margin-right: 90px;
    }
    .article-text-container {
      font-size: 30px;
      line-height: 40px;
    }
  }
  @media (orientation: portrait) {
    .article-number {
      display: none;
    }
    .article-number-mobile {
      display: block;
      position: absolute;
      z-index: 9;
      color: #fff;
    }
    .article-number-mobile .article-number {
      display: flex;
    }
    .article-number {
      font-size: 40px;
      width: 240px;
      height: 240px;
    }
    .number-circle {
      width: 150px;
      height: 150px;
    }
    a.headline,
    a.headline:hover {
      margin-left: 80px;
      margin-bottom: 50px;
      font-size: 90px;
      line-height: 110px;
    }
    .article:nth-child(even) .headline {
      margin-left: 80px;
    }
    .article-text {
      margin: 50px 80px 50px 80px;
    }
    .article:nth-child(odd) .article-text {
      margin-left: 80px;
      margin-right: 80px;
    }
  }
}

@media screen and (max-width: 1100px){
  .article-number {
    display: none;
  }
  .article-number-mobile {
    display: block;
    position: absolute;
    z-index: 9;
    color: #fff;
  }
  .article-number-mobile .article-number {
    display: flex;
  }
  @media (orientation: landscape) {
    a.headline,
    a.headline:hover {
      margin-left: 80px;
      margin-bottom: 30px;
      font-size: 50px;
      line-height: 60px;
    }
    .article:nth-child(even) .headline {
      margin-left: 80px;
    }
    .article-text {
      margin: 30px 80px 30px 80px;
    }
    .article:nth-child(odd) .article-text {
      margin-left: 80px;
      margin-right: 80px;
    }
    .article-text-container {
      font-size: 30px;
      line-height: 40px;
    }
    .article-number-mobile {
      right: 0;
    }
    .article-number {
      font-size: 30px;
      width: 150px;
      height: 150px;
    }
    .number-circle {
      width: 100px;
      height: 100px;
    }
  }

  @media (orientation: portrait) {
    a.headline,
    a.headline:hover {
      margin-left: 80px;
      margin-bottom: 50px;
      font-size: 75px;
      line-height: 88px;
    }
    .article:nth-child(even) .headline {
      margin-left: 80px;
    }
    .article-text {
      margin: 50px 80px 50px 80px;
    }
    .article:nth-child(odd) .article-text {
      margin-left: 80px;
      margin-right: 80px;
    }
    .article-number {
      font-size: 40px;
      width: 240px;
      height: 240px;
    }
    .number-circle {
      width: 150px;
      height: 150px;
    }
  }
}

@media screen and (max-width: 900px) {
  @media (orientation: landscape) {
    a.headline,
    a.headline:hover {
      margin-left: 40px;
      margin-bottom: 20px;
      font-size: 32px;
      line-height: 44px;
    }
    .article:nth-child(even) .headline {
      margin-left: 40px;
    }
    .article-text {
      margin: 20px 40px;
      height: 100px;
    }
    .article:nth-child(odd) .article-text {
      margin-left: 40px;
      margin-right: 40px;
    }
    .article-text-container {
      font-size: 20px;
      line-height: 32px;

    }
    .article-number {
      font-size: 24px;
      width: 130px;
      height: 130px;
    }
    .number-circle {
      width: 80px;
      height: 80px;
    }
    @media (max-height: 420px) {
      .article-text {
        overflow: hidden;
      }
    }
  }
  @media (orientation: portrait) {
    a.headline,
    a.headline:hover {
      margin-left: 30px;
      margin-right: 30px;
      margin-bottom: 50px;
      font-size: 60px;
      line-height: 70px;
    }
    .article:nth-child(even) .headline {
      margin-left: 30px;
    }
    .article-text, .article:nth-child(odd) .article-text {
      margin: 30px;
      font-size: 34px;
      line-height: 44px;
      height: 182px;
    }
    .article-number {
      font-size: 36px;
      width: 220px;
      height: 220px;
    }
    .number-circle {
      width: 130px;
      height: 130px;
    }
  }
}

@media screen and (max-width: 800px) {
  @media (orientation: landscape) {
    a.headline,
    a.headline:hover {
      margin-left: 20px;
      margin-bottom: 10px;
      font-size: 28px;
      line-height: 38px;
    }
    .article:nth-child(even) .headline {
      margin-left: 20px;
    }
    .article-text {
      margin: 20px;
      height: 77px;
    }
    .article:nth-child(odd) .article-text {
      margin-left: 20px;
      margin-right: 20px;
    }
    .article-text-container {
      font-size: 16px;
      line-height: 24px;

    }
    .article-number {
      font-size: 20px;
      width: 100px;
      height: 100px;
    }
    .number-circle {
      width: 60px;
      height: 60px;
    }
    @media (min-height: 410px) {
      a.headline,
      a.headline:hover {
        font-size: 48px;
        line-height: 58px;
        margin-bottom: 50px;
      }
    }
  }
  @media (orientation: portrait) {
    a.headline,
    a.headline:hover {
      margin-left: 30px;
      margin-right: 30px;
      margin-bottom: 50px;
      font-size: 54px;
      line-height: 64px;
    }
    .article-text, .article:nth-child(odd) .article-text {
      margin: 30px;
      font-size: 34px;
      line-height: 44px;
      height: 184px;
    }
    .article-number {
      font-size: 30px;
      width: 180px;
      height: 180px;
    }
    .number-circle {
      width: 100px;
      height: 100px;
    }
  }
}

@media screen and (max-width: 700px) {
  @media (orientation: landscape) {
    a.headline,
    a.headline:hover {
      margin-left: 20px;
      margin-bottom: 10px;
      font-size: 26px;
      line-height: 34px;
    }
    .article:nth-child(even) .headline {
      margin-left: 20px;
    }
    .article-text {
      margin: 10px 20px;
      height: 80px;
    }
    .article:nth-child(odd) .article-text {
      margin-left: 20px;
      margin-right: 20px;
    }
    .article-text-container {
      font-size: 14px;
      line-height: 22px;

    }
  }
  @media (orientation: portrait) {
    a.headline,
    a.headline:hover {
      margin-left: 30px;
      margin-right: 30px;
      margin-bottom: 46px;
      font-size: 50px;
      line-height: 58px;
    }
    .article-text, .article:nth-child(odd) .article-text {
      margin: 30px;
      font-size: 28px;
      line-height: 36px;
      height: 186px;
    }
    .article-number {
      font-size: 28px;
      width: 160px;
      height: 160px;
    }
    .number-circle {
      width: 80px;
      height: 80px;
    }
  }
}

@media screen and (max-width: 600px) {
  @media (orientation: portrait) {
    a.headline,
    a.headline:hover {
      margin-left: 30px;
      margin-right: 30px;
      margin-bottom: 30px;
      font-size: 46px;
      line-height: 54px;
    }
    .article-text, .article:nth-child(odd) .article-text {
      margin: 30px;
      font-size: 24px;
      line-height: 32px;
      overflow: hidden;
    }
    .article-number {
      font-size: 26px;
      width: 120px;
      height: 120px;
    }
    .number-circle {
      width: 70px;
      height: 70px;
    }
  }
}

@media screen and (max-width: 500px) {
  @media (orientation: landscape) {
    a.headline,
    a.headline:hover {
      margin-left: 20px;
      margin-right: 84px;
      margin-bottom: 10px;
      font-size: 22px;
      line-height: 24px;
    }
    .article:nth-child(even) .headline {
      margin-left: 20px;
    }
    .article-text {
      margin: 10px 20px;
      height: 60px;
    }
    .article-text-container {
      font-size: 14px;
      line-height: 22px;
    }
    .article-number {
      font-size: 18px;
      width: 80px;
      height: 80px;
    }
    .number-circle {
      width: 60px;
      height: 60px;
    }
  }
  @media (orientation: portrait) {
    a.headline,
    a.headline:hover {
      margin-left: 30px;
      margin-right: 30px;
      margin-bottom: 30px;
      font-size: 30px;
      line-height: 38px;
    }
    .article-text, .article:nth-child(odd) .article-text {
      margin: 30px;
      font-size: 24px;
      line-height: 32px;
      height: 128px;
      overflow: hidden;
    }
    .article-number {
      font-size: 26px;
      width: 120px;
      height: 120px;
    }
    .number-circle {
      width: 70px;
      height: 70px;
    }
  }
}

@media screen and (max-width: 400px) {
  @media (orientation: landscape) {
    a.headline,
    a.headline:hover {
      margin-left: 20px;
      margin-right: 84px;
      margin-bottom: 10px;
      font-size: 16px;
      line-height: 20px;
    }
    .article:nth-child(even) .headline {
      margin-left: 10px;
    }
    .article-text {
      margin: 10px;
      height: 36px;
    }
    .article-text-container {
      font-size: 10px;
      line-height: 16px;
    }
    .article-number {
      font-size: 14px;
      width: 40px;
      height: 40px;
    }
    .number-circle {
      width: 30px;
      height: 30px;
    }
  }
  @media (orientation: portrait) {
    a.headline,
    a.headline:hover {
      margin: 10px!important;
      font-size: 28px;
      line-height: 34px;
    }
    .article-text, .article:nth-child(odd) .article-text {
      margin: 10px;
      font-size: 12px;
      line-height: 18px;
      height: 90px;
    }
    .article-number {
      font-size: 20px;
      width: 60px;
      height: 60px;
    }
    .number-circle {
      width: 40px;
      height: 40px;
    }
  }
}

</style>
