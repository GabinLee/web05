<template>
  <div style="overflow: hidden">
    <header>
      <div class="h-container mw1440">
        <div class="logo-box">
          <a href="/" class="logo-font">Sample</a>
        </div>
        <nav class="nav-box uppercase fs14">
          <router-link to="/" class="nav-item" :class="{ checked : selectedIndex == 0 ? true : false }" @click.native="clickedNavItem(0)">
            <span>home</span>
          </router-link>   

          <router-link to="/about" class="nav-item" :class="{ checked : selectedIndex == 1 ? true : false }" @click.native="clickedNavItem(1)">
            <span>about</span>
          </router-link>

          <router-link to="/menu" class="nav-item menu-item" :class="{ checked : selectedIndex == 2 ? true : false }" @click.native="clickedNavItem(2)">
            <span>menu</span>
          </router-link>

          <router-link to="/events" class="nav-item" :class="{ checked : selectedIndex == 3 ? true : false}" @click.native="clickedNavItem(3)">
            <span>events</span>
          </router-link>

          <router-link to="/contact" class="nav-item" :class="{ checked : selectedIndex == 4 ? true : false }" @click.native="clickedNavItem(4)">
            <span>contact</span>
          </router-link>
        </nav>

        <div class="mobile-menu-btn">
          <button v-ripple @click="openMobileNav">
            <v-icon>mdi-menu</v-icon>
          </button>
        </div>
      </div>
    </header>

    <div id="mobile-nav-container" @click="closeMobileNav">
      <div id="mobile-nav-group" class="fs16 uppercase">  
        <button v-ripple @click="closeMobileNav">
          <v-icon>mdi-close</v-icon>
        </button>
        <div class="mobile-nav-box mobile-nav-box-home">
          <router-link to="/" class="nav-item">
            <p>home</p>
          </router-link>
        </div>

        <div class="mobile-nav-box">
          <router-link to="/about" class="nav-item">
            <p>about</p>
          </router-link>
        </div>
        
        <div class="mobile-nav-box">
          <router-link to="/menu" class="nav-item">
            <p>menu</p>
          </router-link>
        </div>  

        <div class="mobile-nav-box">
          <router-link to="/events" class="nav-item">
            <p>events</p>
          </router-link>
        </div>

        <div class="mobile-nav-box">
          <router-link to="/contact" class="nav-item">
            <p>contact</p>
          </router-link>
        </div>
      </div>
    </div>

    <main>
      <router-view/>
    </main>
    
    <footer>
      <div class="f-container mw1440 padding-tb-50">
        <div class="logo-font">Sample</div>
        <div class="info-box">
          <div class="j-text">사업자등록번호 : 000-00-00000</div> |
          <div class="j-text">주소 : 경기도 시흥시 서울대학로</div> |
          <div class="j-text">대표 : OOO</div> |
          <div class="j-text">TEL : 000-0000-0000</div>
        </div>
        <div class="social-box">
          <a href="" class="insta">
            <v-icon>mdi-instagram</v-icon>
          </a>
          <a href="">
            <v-icon>mdi-facebook</v-icon>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>


<script>
export default {
  data: () => ({
    // on: true,
    selectedIndex: 0,
    selectedMenu: 0
  }),
  created() {
    // this.$router.push('/Home')
  },
  mounted() {
    var NavItems = document.getElementsByClassName('nav-item');
    console.log(NavItems);
    console.log(NavItems[0]);
    this.sum(1, 2);
    
  },
  methods: {
    sum(num1, num2) {
      console.log(num1 + num2);
    },
    clickedNavItem(index) {
      this.selectedIndex = index;
    },
    openMobileNav() {
      document.getElementById('mobile-nav-container').style.width = "100%"
      document.getElementById('mobile-nav-group').style.width = "300px"
    },
    closeMobileNav() {
      document.getElementById('mobile-nav-container').style.width = "0"
      document.getElementById('mobile-nav-group').style.width = "0"
    }
  }
}
</script>



<style lang="scss">
/* default setting */
  * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Montserrat', 'Nanum Gothic';
  // word-break: break-all;
  }
  ::selection{ background-color: rgba(27, 184, 80, .3); color: inherit; }
  html, body{ font-size: 10px; }
  a{ display: inline-block; text-decoration: none; color: inherit; }
  button{ background-color: transparent; border: none; cursor: pointer; }
  button:focus{ outline: none; }
  img{ width: 100%; margin-bottom: 30px; display: block; }

  .mw1440{ max-width: 1440px; margin: 0 auto; padding-left: 40px; padding-right: 40px; }
  .fs24{ font-size: 24px; }
  .fs16{ font-size: 16px; }
  .fs14{ font-size: 14px; }


  .j-head{ font-size: 36px; margin-bottom: 30px; text-transform: uppercase; }
  .j-head-myeongjo{
    font-size: 36px;
    margin-bottom: 30px;
    text-transform: uppercase;
    letter-spacing: 10px;
    font-family: 'Nanum Myeongjo';
  }
  .j-title{ font-size: 20px; margin-bottom: 20px; text-transform: uppercase; }
  .j-text{ font-size: 16px; line-height: 1.5; }
  .logo-font{ font-family: 'Delius Swash Caps', cursive; }
  .main-img-font{
    font-size: 80px;
    letter-spacing: 10px;
    font-family: 'Nanum Myeongjo';
    background-color: rgba(0, 0, 0, .6);
    height: 100%;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .page-main-img{
    height: 50vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }

  .padding-50{ padding: 50px; }
  .padding-tb-50{ padding-top: 50px; padding-bottom: 50px; }
  .uppercase{ text-transform: uppercase; }

  .green-btn{
    border: 1px solid #1bb850;
    border-radius: 5px;
    transition: .2s;
  }
  .green-btn:hover{
    background-color: #1bb850;
    color: #fff;
  }

  #app{ min-height: 100vh; display: flex; flex-direction: column; }





/* header */
  header{
    background-color: #f7f7f7;
    width: 100%;
    height: 80px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .2);
    position: fixed;
    z-index: 999;
    .logo-box{
      display: flex;
      align-items: center;
      a{ font-size: 40px; color:#1BB850; }
    }
    .nav-box{
      .nav-item{
        height: 100%;
        padding: 0 20px;
        position: relative;
        transition: all 0.2s ease;
        > span{ line-height: 80px; color: #999; font-weight: 600; }
        > span:before{
          content: "";
          width: calc(100% - 40px);
          border-top: 3px solid #1BB850;
          border-bottom: 3px solid #1BB850;
          opacity: 0;
          transition: all 0.35s ease;
          -webkit-transition: all 0.35s ease;
          position: absolute;
          top: 50%;
          bottom: 50%;
          left: 20px;
        }
      }
      .nav-item:hover span, .checked span{ color: #000; }
      .nav-item:hover span:before, .checked span:before{
        opacity: 1;
        top: 24px;
        bottom: 24px;
      }
    }
    .menu-item{
      position: relative;
      .dropdown-group{
        background-color: #f7f7f7;
        height: 0px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        box-shadow: 0 2px 3px rgba(0, 0, 0, .2);
        overflow: hidden;
        position: absolute;
        left: 0;
        transition: .5s;
        cursor: default;
        .dropdown-box{
          margin: 14px;
        }
        a{
          width: 100%;
          height: 40px;
          border-radius: 5px;
          padding: 0px 20px;
          transition: .2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        a:last-child{ margin-bottom: 0; }
        a:hover{
          background-color: #1BB850;
          color: #fff;
        }
      }
    }
    .menu-item:hover .dropdown-group{ height: 230px; }
  }
  .h-container{
    height: 100%;
    display: flex;
    justify-content: space-between;
  }


  .mobile-menu-btn{
    margin-right: -10px;
    display: none;
    button{
      color: #1bb850;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin: 20px 0;
    }
    button:hover{
      background-color: rgba(27, 182, 79, .2);
    }
  }
  #mobile-nav-container{
    background-color: rgba(0, 0, 0, .8);
    width: 0;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 999;
    cursor: pointer;
  }
  #mobile-nav-group{
    background-color: #fff;
    width: 0;
    height: 100%;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    transition: .5s;
    overflow: hidden;
    button{
      color: #1bb850;
      width: 40px;
      height: 40px;
      margin: 20px 30px 20px auto;
      border-radius: 50%;
    }
    button:hover{ background-color: rgba(27, 182, 79, .2); }

    .mobile-nav-box{
      margin: 0 10px;
      border-bottom: 1px solid rgba(0, 0, 0, .2);
      padding: 10px;
    }
    .mobile-nav-box-home { border-top: 1px solid rgba(0, 0, 0, .2); }
    .nav-item{
      color: #1bb850;
      width: 100%;
      border-radius: 5px;
      padding: 14px 0;
      text-align: center;
      p{
        color: #000;
      }
    }
    .nav-item:hover{ background-color: rgba(27, 182, 79, .2); }
    


    // .dropdown-group{
    //   background-color: palegreen;
    //   width: 80%;
    //   margin: 0 auto;
    //   border-radius: 10px;
    //   text-align: center;
    //   a{
    //     width: 100%;
    //     margin: 0 0 5px 0;
    //     padding: 10px 0;
    //   }
    //   a:last-child{ margin: 0; }
    // }
  }
  


/* main */
  main{ margin-top: 80px; }


/* footer */
  footer{
    background-color: #999;
    margin-top: auto;
    text-align: center;
    color: #fff;

    .logo-font{
      font-size: 30px;
      margin-bottom: 30px;
    }
    .info-box{
      margin-bottom: 20px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      .j-text{
        padding: 0 20px;
      }
    }
    .social-box{
      .v-icon{
        color: #fff;
      }
      .insta{
        margin-right: 20px;
      }
    }
  }



/* 반응형 */
  @media (max-width: 1000px){
    .padding-50{ padding: 40px; }
    .padding-tb-50{ padding-top: 40px; padding-bottom: 40px; }
  }

  @media (max-width: 768px) {
    .mw1440{ padding-left: 30px; padding-right: 30px; }
    .padding-50{ padding: 30px; }
    .padding-tb-50{ padding-top: 30px; padding-bottom: 30px; }

    .j-head{
      font-size: 32px;
      margin-bottom: 20px;
    }
    .j-head-myeongjo{
      font-size: 32px;
      margin-bottom: 20px;
    }
    .j-title{
      font-size: 18px;
      margin-bottom: 16px;
    }
    .j-text{ font-size: 14px; }
    // .fs24{ font-size: 22px; }
    .fs16{ font-size: 14px; }
    .fs14{ font-size: 12px; }
    .main-img-font{ font-size: 60px; }
    


    header{
      .nav-box{
        display: none;
      }
    }
    .mobile-menu-btn{
      display: block;
    }
  }

  @media (max-width: 600px) {
    .mw1440{ padding-left: 20px; padding-right: 20px; }
    .padding-50{ padding: 20px; }
    .padding-tb-50{ padding-top: 20px; padding-bottom: 20px; }

    .j-head{
      font-size: 26px;
      margin-bottom: 16px;
    }
    .j-head-myeongjo{
      font-size: 26px;
      margin-bottom: 16px;
    }
    .j-title{
      font-size: 16px;
      margin-bottom: 12px;
    }
    .j-text{ font-size: 12px; }  
    // .fs24{ font-size: 20px; }
    .fs16{ font-size: 12px; }
    .fs14{ font-size: 10px; }
    .main-img-font{ font-size: 36px; }
    img{ margin-bottom: 20px; }



    
    header{
      height: 60px;
      .logo-box{
        a{ font-size: 32px; }
      }
    }
    .mobile-menu-btn{
      button{ margin: 10px 0; }
    }
    #mobile-nav-group{
      button{
        margin: 20px 10px 20px auto;
      }
    }


    main{ margin-top: 60px; }
  }
</style>
