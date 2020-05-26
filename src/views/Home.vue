<template>
  <div class="home">
    <div class="home-main">
      <div class="main-img-font uppercase">sample</div>
    </div>

    <div class="home-about padding-tb-50 mw1440">
      <div class="group">
        <div class="box padding-50">
          <div class="img-box">
            <img src="../assets/home-about01.jpg" alt="">
          </div>
          <div class="text-box">
            <div class="j-title">sample</div>
            <div class="j-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
          </div>
        </div>
        <div class="box padding-50">
          <div class="img-box">
            <img src="../assets/home-about02.jpg" alt="">
          </div>
          <div class="text-box">
            <div class="j-title">sample</div>
            <div class="j-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
          </div>
        </div>
      </div>
    </div>

    <div class="home-menu">
      <div class="padding-tb-50 mw1440">
        <div class="group">
          <div class="box">
            <a href="" class="photo-card">
              <div class="img-box">
                <img src="../assets/home-menu01.jpg" alt="">
                <div class="overlay uppercase">
                  <div class="j-title">view more</div>
                  <v-icon>mdi-chevron-right</v-icon>
                </div>
              </div>
              <div class="text-box">
                <div class="j-title">coffee</div>
                <div class="j-text">You can change this text</div>
              </div>
            </a>
          </div>
          <div class="box">
            <a href="" class="photo-card">
              <div class="img-box">
                <img src="../assets/home-menu02.jpg" alt="">
                <div class="overlay uppercase">
                  <div class="j-title">view more</div>
                  <v-icon>mdi-chevron-right</v-icon>
                </div>
              </div>
              <div class="text-box">
                <div class="j-title">beverage</div>
                <div class="j-text">You can change this text</div>
              </div>
            </a>
          </div>
          <div class="box">
            <a href="" class="photo-card">
              <div class="img-box">
                <img src="../assets/home-menu03.jpg" alt="">
                <div class="overlay uppercase">
                  <div class="j-title">view more</div>
                  <v-icon>mdi-chevron-right</v-icon>
                </div>
              </div>
              <div class="text-box">
                <div class="j-title">cake</div>
                <div class="j-text">You can change this text</div>
              </div>
            </a>
          </div>
          <div class="box">
            <a href="" class="photo-card">
              <div class="img-box">
                <img src="../assets/home-menu04.jpg" alt="">
                <div class="overlay uppercase">
                  <div class="j-title">view more</div>
                  <v-icon>mdi-chevron-right</v-icon>
                </div>
              </div>
              <div class="text-box">
                <div class="j-title">macaron</div>
                <div class="j-text">You can change this text</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="home-text padding-tb-50 mw1440">
      <div class="box">
        <div class="j-head">"sample"</div>
        <div class="j-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
      </div>
    </div>

    <div class="home-events padding-tb-50 mw1440">
      <div class="group">
        <div class="box">
          <a href="" class="img-box">
            <img src="../assets/home-events01.jpg" alt="">
            <div class="overlay uppercase">
              <div class="j-title">view more</div>
              <v-icon>mdi-chevron-right</v-icon>
            </div>
          </a>
          <div class="text-box">
            <div class="j-title">sample</div>
          </div>
        </div>
        <div class="box">
          <a href="" class="img-box">
            <img src="../assets/home-events02.jpg" alt="">
            <div class="overlay uppercase">
              <div class="j-title">view more</div>
              <v-icon>mdi-chevron-right</v-icon>
            </div>
          </a>
          <div class="text-box">
            <div class="j-title">sample</div>
          </div>
        </div>
        <div class="box">
          <a href="" class="img-box">
            <img src="../assets/home-events03.jpg" alt="">
            <div class="overlay uppercase">
              <div class="j-title">view more</div>
              <v-icon>mdi-chevron-right</v-icon>
            </div>
          </a>
          <div class="text-box">
            <div class="j-title">sample</div>
          </div>
        </div>
        <div class="box">
          <a href="" class="img-box">
            <img src="../assets/home-events04.jpg" alt="">
            <div class="overlay uppercase">
              <div class="j-title">view more</div>
              <v-icon>mdi-chevron-right</v-icon>
            </div>
          </a>
          <div class="text-box">
            <div class="j-title">sample</div>
          </div>
        </div>
      </div>
    </div>

    <div class="home-img padding-tb-50">
      <div class="overlay"></div>
    </div>

    <div class="home-contact">
      <div class="padding-tb-50 mw1440">
        <div class="group padding-tb-50 fs14">
          <div class="j-head">contact us</div>
          <div class="j-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
          <router-link to="./Contact" class="green-btn fs16">contact</router-link>
          <!-- <a href="" class="green-btn">contact &amp; reservation</a> -->
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  // import VueAos from 'vue-aos'

  export default {
    // components: { VueAos }
    methods: {
    }
  }
</script>


<style lang="scss" scoped>

/* home-main */
  .home-main{
    height: 80vh;
    background-image: url(../assets/home-main.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;

    .logo-font{
      background-color: rgba(0, 0, 0, .5);
      width: 100%;
      height: 100%;
      color: #fff;
      font-size: 80px;
      letter-spacing: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

/* home-about */
  .home-about{
    .group{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .box{ width: 50%; }
  }

/* home-menu */
  .home-menu{
    background-color: #333;
    .group{
      text-align: center;
      margin: 0 -20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .box{
      width: 25%;
      padding: 20px;
    }
    .photo-card{
      background-color: #fff;
      padding: 20px;
      position: relative;
      .img-box{
        position: relative;
        .overlay{
          background-color: rgba(0, 0, 0, .6);
          color: #fff;
          width: 100%;
          height: 100%;
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: 0;
          left: 0;
          transition: .2s;
          opacity: 0;
          .j-title{
            font-weight: bold;
            margin: 0 5px 0 0;
          }
          .v-icon{ color: #fff; }
        }
      }
    }
    .photo-card:hover .overlay{ opacity: 1; }
  }


/* home-text */
  .home-text{
    text-align: center;
    font-size: 80px;
    .box{
      width: 75%;
      margin: 100px auto 50px;
      .j-text{
        padding-top: 20px;
      }
    }
  }


/* home-events */
  .home-events{
    .group{
      margin: 0 -20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .box{
      width: 25%;
      padding: 20px;
    }
    .img-box{
      margin-bottom: 20px;
      position: relative;
      img{ margin-bottom: 0; display: block; }
      .overlay{
        background-color: rgba(0, 0, 0, .7);
        color: #fff;
        width: 100%;
        height: 00%;
        padding: 20px;
        opacity: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        transition: .3s;
        .j-title{
          font-weight: bold;
          margin: 0;
        }
        .v-icon{
          color: #fff;
          font-size: 30px;
        }
      }
    }
    .img-box:hover .overlay{
      height: 100%;
      opacity: 1;
    }
    .text-box{
      text-align: center;
      border-bottom: 1px solid #333;
    }
  }


/* home-img */
  .home-img{
    background-image: url(../assets/home-img.jpg);
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;
    background-attachment: fixed;
    margin: 100px 0 0 0;
    padding: 250px 0;
    position: relative;
    z-index: -2;

    .overlay{
      background-color: rgba(0, 0, 0, .5);
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      z-index: -1;
    }
  }


/* home-contact */
  .home-contact{
    .group{
      width: 50%;
      margin: 0 auto;
      text-align: center;
    }
    .j-text{ padding: 20px 0 50px; }
    a{ padding: 10px 14px; }
  }



/* 반응형 */
  @media (max-width: 1200px){
    .home-contact{
      .group{ width: 70%; }
    }
  }

  @media (max-width: 1000px) {
    .home-main{ height: 70vh; }
    .home-about{
      .group{ margin: 0 -40px; }
    }
    .home-menu{
      .box{ width: 33.33333%; }
    }
    .home-contact{
      .group{ width: 75%; }
    }
  }


  @media (max-width: 768px) {
    .home-main{
      height: 60vh;
      .logo-font{
        font-size: 60px;
      }
    }
    .home-about{
      .group{ margin: 0 -30px; }
    }
    .home-menu{
      .box{ width: 50%; }
    }
    .home-events{
      .box{
        width: 50%;
        margin-bottom: 20px;
      }
    }
    .home-img{
      padding: 200px 0;
    }
    .home-contact{
      .group{ width: 85%; }
      .j-text{ padding: 20px 0 40px; }
    }
  }


  @media (max-width: 600px) {
    .home-main{
      height: 50vh;
      .logo-font{
        font-size: 36px;
      }
    }
    .home-about{
      .group{ margin: 0; }
      .box{ width: 100%; }
    }
    .home-img{
      padding: 150px 0;
    }
  }
</style>