<template>
    <div class="banner">
        <div class="banner-button-container">
          <a href="#">
            <button>postimees pluss</button>
            <span class="current-date">{{currentDateTime}}</span>
          </a>
        </div>
        <span class="banner-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, officiis.</span>
        <div class="arrow-down-container">
          <div class="arrow-down" @click="scroll"></div>
        </div>
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
      justify-content: space-evenly;
      background-image: url('@/static/banner.jpg');
      background-position-x: center;
      background-size: contain;
      text-align: center;
      height: 100vh;
      overflow: hidden!important;
      padding: 80px 80px 0 80px;
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
    position: absolute;
    top: 130px;
    left: 28px;
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

  .current-date {
    display: none;
  }

  @media screen and (max-width: 1920px){
    .banner-title {
      font-size: 75px;
      line-height: 90px;
    }
  }

  @media screen and (max-width: 1540px){
    .banner {
      padding: 50px;
    }
    .banner-title {
      font-size: 65px;
      line-height: 80px;
    }
  }

  @media screen and (max-width: 1100px){
    .current-date {
      display: inline;
      color: #fff;
    }

    .banner-button-container {
      top: 80px;
    }

    .banner-button-container button {
      background: none;
      color: #fff;
      padding-right: 4px;
    }

    .banner-title {
      font-size: 46px;
      line-height: 54px;
    }
  }

  @media screen and (max-width: 900px) and (orientation: landscape) {
    .banner-button-container {
      top: 70px;
    }

    .banner {
      padding-top: 84px;
      padding-bottom: 0;
    }

    .banner-title {
      font-size: 38px;
      line-height: 46px;
    }
  }

  @media screen and (max-width: 800px) and (orientation: landscape) {
    .banner {
      padding-top: 80px;
    }
    .banner-title {
      font-size: 28px;
      line-height: 34px;
    }
  }

  @media screen and (max-width: 700px) and (orientation: landscape) {
    .banner-button-container {
      top: 50px;
    }

    .banner-title {
      font-size: 22px;
      line-height: 26px;
    }
  }

  @media screen and (max-width: 600px){
    .banner {
      padding-top: 50px;
    }
    .banner-button-container {
      position: relative;
      top: 0;
      display: flex;
      justify-content: center;
    }

    .banner-button-container button {
      padding-left: 0;
    }
  }
  @media screen and (orientation: portrait){
    .banner {
      background-image: url('@/static/banner_vertical.jpg');
    }

    .banner-title {
      font-size: 28px;
      line-height: 34px;
    }
  }

  @media screen and (orientation: portrait) and (min-width: 700px) {
    .banner-title {
      font-size: 38px;
      line-height: 44px;
    }
  }

  @media screen and (orientation: portrait) and (min-width: 1000px) {
    .banner-title {
      font-size: 58px;
      line-height: 68px;
    }
  }

  @media screen and (max-width: 600px) and (orientation: portrait) {
    .banner {
      padding-left: 20px;
      padding-right: 20px;
    }

    .banner-title {
      font-size: 36px;
      line-height: 45px;
    }
  }

  @media screen and (max-width: 480px) and (orientation: portrait) {
    .banner-title {
      font-size: 28px;
      line-height: 36px;
    }
  }

  @media screen and (max-width: 350px) and (orientation: portrait) {
    .banner {
      padding-right: 10px;
      padding-left: 10px;
    }

    .banner-button-container button {
      padding-left: 0;
    }

    .banner-title {
      font-size: 28px;
      line-height: 34px;
    }
  }
</style>
