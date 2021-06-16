<template>
    <nav class="navbar navbar-expand-lg p-0">
        <div class="container-fluid p-0">
            <div class="d-flex justify-content-center">
                <div class="button-container highlighted">
                  <button
                    class="navbar-toggler d-inline-block"
                    type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo03"
                    aria-controls="navbarTogglerDemo03"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                  </button>
                </div>
                <div class="d-flex flex-column justify-content-center">
                  <a class="navbar-brand d-inline-block" :href="'http://' + domain">
                    <img src="@/static/logo.png" />
                  </a>
                </div>
            </div>
            <div class="navbar-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, voluptatem</div>
            <div class="d-flex">
                <ul class="navbar-nav social-media">
                    <li class="nav-item d-flex flex-column justify-content-center mx-2"><a :href="facebook" target="_blank"><img src="@/static/Facebook.png" alt="Facebook"></a></li>
                    <li class="nav-item d-flex flex-column justify-content-center mx-2"><a :href="twitter" target="_blank"><img src="@/static/Twitter.png" alt="Twitter"></a></li>
                    <li class="nav-item d-flex flex-column justify-content-center mx-2"><a :href="'mailto:' + email"><img src="@/static/Email.png" alt="E-mail"></a></li>
                    <li class="nav-item d-flex flex-column justify-content-center border-end border-1 border-white">
                      <div class="px-4">
                        <a href="#" v-on:click.prevent>
                          <img class="mx-1" src="@/static/jutumull.png" alt="E-mail">
                          <span class="navbar-text">88</span>
                        </a>
                      </div>
                    </li>
                </ul>
                <div class="social-share"></div>
                <div class="button-container">
                  <button class="btn login-button">LOGI SISSE</button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    props: ['facebook', 'twitter', 'email', 'domain']
}
</script>

<style scoped>
    .navbar {
        position: absolute;
        width: 100%;
        background-color: #1ba6e2;
        vertical-align: middle;
        z-index: 100;
    }

    .navbar-brand {
      padding: 28px;
    }

    .navbar-toggler {
        margin-right: 10px;
        width: 40px;
        height: 40px;
        display: block;
        background-repeat: no-repeat;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
        padding: 8px;
    }

    .navbar-toggler:focus, .btn:focus {
      box-shadow: none;
    }

    .button-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 26px;
      transition: background-color 1000ms;
      cursor: pointer;
    }

    .button-container.highlighted, .button-container:hover {
      background-color: #21b2ef;
    }

    .button-container button {
      margin: auto;
      color: white;
    }

    .navbar-text {
      color: #fff;
    }

    .social-share {
      display: none;
    }

    @media screen and (max-width: 1920px) {
      .navbar-brand {
        padding: 20px;
      }

      .button-container {
        padding: 20px;
      }
    }

    @media screen and (max-width: 1280px) {
      .navbar-text {
        display: none;
      }
    }

    @media screen and (max-width: 1100px) {
      .social-media {
        display: none;
      }
      .button-container {
        padding-top: 10px;
        padding-bottom: 10px;
      }
      .button-container.highlighted {
        background-color: #1ba6e2;
      }
      .social-share {
        display: block;
        background: url('@/static/share.png') no-repeat;
        width: 40px;
        height: 40px;
        margin-top: 10px;
        margin-bottom: 10px;
      }
      .login-button {
        text-indent: -9999px;
        width: 40px;
        height: 40px;
        background: url('@/static/avatar.png') no-repeat;
        right: 80px;
      }
      .container-fluid {
        padding-right: 20px!important;
      }
    }

    @media screen and (max-width: 600px){
      .navbar-brand {
        padding-top: 0;
        padding-bottom: 0;
      }

      .button-container {
        padding: 8px 12px;
      }

      .social-share {
        margin: 8px 12px;
      }
    }

    @media screen and (max-width: 450px){
      .navbar-brand {
        display: none!important;
      }
    }
</style>
