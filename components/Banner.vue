<template>
<div class="banner">
  <div class="banner-button-container">
    <a href="#">
      <button v-on:click.prevent>postimees pluss</button>
      <span class="current-date">{{currentDateTime}}</span>
    </a>
  </div>
  <span class="banner-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, officiis.</span>
  <div class="arrow-down-container">
    <div class="arrow-down" @click="scroll"></div>
  </div>
  <div></div>
  <div class="overlay"></div>
</div>

</template>

<script>
export default {
    methods: {
        scroll() {
          const firstArticle = document.querySelector('.article')
          firstArticle.scrollIntoView()
        }
    },
    computed: {
      currentDateTime() {
        const date = new Date();
        const year = new Intl.DateTimeFormat('et-EE', { year: 'numeric' }).format(date)
        const month = new Intl.DateTimeFormat('et-EE', { month: 'short' }).format(date)
        const day = new Intl.DateTimeFormat('et-EE', { day: '2-digit' }).format(date)
        const hour = new Intl.DateTimeFormat('et-EE', { hour: 'numeric' }).format(date)
        const minute = new Intl.DateTimeFormat('et-EE', { minute: 'numeric' }).format(date)
        return (`${day}. ${month} ${year} ${hour}:${minute}`).toLowerCase()
      }
    }
}
</script>

<style scoped>
  .banner {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-image: url('@/static/banner.jpg');
      background-position: center top;
      background-size: cover;
      text-align: center;
      height: 100vh;
      overflow: hidden!important;
      padding: 120px 80px 0 80px;
  }
  .banner-title {
      font-family: 'Tabac Sans';
      font-size: 100px;
      line-height: 120px;
      color: #fff;
      font-weight: bold;
      display: inline;
      z-index: 10;
  }

  .arrow-down-container {
    z-index: 100;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .arrow-down {
      cursor: pointer;
      bottom: 138px;
      width: 106px;
      height: 106px;
      background: url('@/static/nooleke_2.png') no-repeat center center;
      transition: background 500ms ease-in-out;
  }

  .arrow-down:hover {
    background: url('@/static/nooleke_1.png') no-repeat center center;
  }

  .overlay {
    position: absolute;
    height: 100vh;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(0deg, rgb(0,0,0) 0%, rgba(0,0,0,0.18039) 100%);
    opacity: 0.902;
  }

  .banner-button-container {
    text-align: left;
    z-index: 10;
  }

  .banner-button-container button {
    cursor: pointer;
    text-transform: uppercase;
    border-radius: 12px;
    color: #1ba6e2;
    background-color: rgba(255, 255, 255, .8);
    padding: 12px 24px;
    border: none;
    transition: background-color 1000ms;
  }

  .banner-button-container:hover button {
    background-color: rgba(255, 255, 255, 1);
  }

  .banner-button-container .current-date {
    white-space: nowrap;
  }

  .current-date {
    display: none;
  }

  @media screen and (orientation: portrait){
    .banner {
      background-image: url('@/static/banner_vertical.jpg');
    }
  }

  @media only screen and (max-width: 1920px) {
    @media (orientation: landscape) {
      .banner-title {
        font-size: 75px;
        line-height: 90px;
      }
    }
    @media (orientation: portrait) {
      .banner-title {
        font-size: 100px;
        line-height: 120px;
      }
    }
  }

  @media screen and (max-width: 1540px) {
    @media (orientation: landscape) {
      .banner {
        padding-top: 100px;
      }
      .banner-title {
        font-size: 65px;
        line-height: 80px;
      }
    }
  }

  @media screen and (max-width: 1100px){
    @media (orientation: landscape) {
      .banner {
        padding-top: 90px;
      }
      .current-date {
        display: inline;
        color: #fff;
      }
      .banner-button-container button {
        background: none;
        color: #fff;
        padding: 0;
        margin-right: 4px;
      }

      .banner-title {
        font-size: 46px;
        line-height: 54px;
      }
    }
    @media (orientation: portrait) {
      .banner {
        padding-top: 90px;
      }
      .banner-title {
        font-size: 65px;
        line-height: 80px;
      }
    }
  }

  @media screen and (max-width: 900px) {
    @media (orientation: landscape) {
      .banner {
        padding-left: 30px;
        padding-right: 30px;
      }
      .banner-title {
        font-size: 38px;
        line-height: 46px;
      }
    }
    @media (orientation: portrait) {
      .banner {
        padding-left: 60px;
        padding-right: 60px;
      }
      .banner-title {
        font-size: 60px;
        line-height: 75px;
      }
    }
  }

  @media screen and (max-width: 800px) {
    @media (orientation: landscape) {
      .banner {
        padding-top: 80px;
        padding-left: 20px;
        padding-right: 20px;
      }
      .banner-title {
        font-size: 30px;
        line-height: 36px;
      }
      .banner-button-container {
        text-align: center;
      }
    }
    @media (orientation: portrait) {
      .banner {
        padding-top: 90px;
        padding-left: 40px;
        padding-right: 40px;
      }
      .banner-title {
        font-size: 32px;
        line-height: 38px;
      }
      .current-date {
        display: inline;
        color: #fff;
      }
      .banner-button-container button {
        background: none;
        color: #fff;
        padding: 0;
        margin-right: 4px;
      }
    }
  }

  @media screen and (max-width: 700px) {
    @media (orientation: landscape) {
      .banner-title {
        font-size: 22px;
        line-height: 26px;
      }
    }
    @media (orientation: portrait) {
      .banner-title {
        font-size: 30px;
        line-height: 36px;
      }
    }
  }

  @media screen and (max-width: 600px){
    @media (orientation: landscape) {
      .banner {
        padding-top: 65px;
      }
      .banner-title {
        font-size: 20px;
        line-height: 24px;
      }
      .banner-button-container button {
        padding-left: 0;
      }
    }
    @media (orientation: portrait) {
      .banner {
        padding-top: 84px;
      }
      .banner-title {
        font-size: 28px;
        line-height: 38px;
      }
    }
  }

  @media screen and (max-width: 500px){
    @media (orientation: landscape) {
      .banner {
        padding-top: 60px;
        padding-left: 10px;
        padding-right: 10px;
      }
      .banner-title {
        font-size: 18px;
        line-height: 22px;
      }
      .banner-button-container {
        font-size: 14px;
      }
    }
    @media (orientation: portrait) {
      .banner {
        padding-top: 80px;
        padding-left: 20px;
        padding-right: 20px;
      }
      .banner-button-container {
        text-align: center;
      }
      .banner-title {
        font-size: 26px;
        line-height: 36px;
      }
    }
  }

  @media screen and (max-width: 400px){
    @media (orientation: landscape) {
      .banner {
        padding-top: 60px;
        padding-left: 5px;
        padding-right: 5px;
      }
      .banner-title {
        font-size: 17px;
        line-height: 21px;
      }
      .banner-button-container {
        font-size: 12px;
      }
    }
    @media (orientation: portrait) {
      .banner {
        padding-top: 76px;
        padding-left: 20px;
        padding-right: 20px;
      }
      .banner-title {
        font-size: 24px;
        line-height: 32px;
      }
    }
  }

  @media screen and (max-width: 300px){
    @media (orientation: portrait) {
      .banner {
        padding-top: 60px;
        padding-left: 10px;
        padding-right: 10px;
      }
      .banner-title {
        font-size: 20px;
        line-height: 28px;
      }
    }
  }

</style>
