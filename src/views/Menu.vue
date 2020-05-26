<template>
  <div class="menu">
    <div class="menu-main page-main-img">
      <div class="main-img-font uppercase">menu</div>
    </div>

    <div class="menu-contents mw1440 padding-tb-50">
      <nav class="nav-box padding-tb-50">
        <div class="btn-box">
          <button class="j-title" @click="clickedMenuItem(1)" :class="{checked : selectedMenuIndex == 1 ? true : false}">coffee</button>
        </div>
        <div class="btn-box">
          <button class="j-title" @click="clickedMenuItem(2)" :class="{checked : selectedMenuIndex == 2 ? true : false}">beverage</button>
        </div>
        <div class="btn-box">
          <button class="j-title" @click="clickedMenuItem(3)" :class="{checked : selectedMenuIndex == 3 ? true : false}">cake</button>
        </div>
        <div class="btn-box">
          <button class="j-title" @click="clickedMenuItem(4)" :class="{checked : selectedMenuIndex == 4 ? true : false}">macaron</button>
        </div>
      </nav>

      <div class="menu-items">
        <coffeeMenu :class="{show : selectedMenuIndex == 1 ? true : false}" />
        <beverageMenu :class="{show : selectedMenuIndex == 2 ? true : false}" />
        <cakeMenu :class="{show : selectedMenuIndex == 3 ? true : false}" />
        <macaronMenu :class="{show : selectedMenuIndex == 4 ? true : false}" />
      </div>
    </div>
  </div>
</template>


<script>
  import coffeeMenu from '@/components/coffeeMenu.vue'
  import beverageMenu from '@/components/beverageMenu.vue'
  import cakeMenu from '@/components/cakeMenu.vue'
  import macaronMenu from '@/components/macaronMenu.vue'

  export default {
    components: {
      coffeeMenu, beverageMenu, cakeMenu, macaronMenu
    },
    data: () => ({
      selectedMenuIndex: 1,
      selectedBtn: 1
    }),
    watch: {
      // '$route' (to, from) {
      //   if(to.name == 'Menu') {
      //     this.selectedMenuIndex = to.params.id;
      //   }
      //   console.log(to.params.id, from);
      // }
    },
    created() {
      // console.log(this.$route.params.id)
    },
    methods: {
      clickedMenuItem(index) {
        this.selectedMenuIndex = index;
      }
    }
  }
</script>


<style lang="scss" scoped>
  .menu-main{
    background-image: url(../assets/menu-main.jpg);
    background-position: bottom;
  }

  .menu-contents{
    .nav-box{
      max-width: 1000px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .btn-box{
      width: 25%;
      padding: 10px;
      button{
        width: 100%;
        margin-bottom: 0;
        border: 1.6px solid #1bb850;
        border-radius: 5px;
        padding: 10px;
        transition: .2s;
      }
      button:hover, .checked{
        background-color: #1bb850;
        color: #fff;
      }
      button:active, button:focus{
        box-shadow: 0 0 0 3px rgba(27, 184, 80, .25);
      }
    }

    .menu-items{
      .coffee-menu{
        display: none;
      }
      .beverage-menu{
        display: none;
      }
      .cake-menu{
        display: none;
      }
      .macaron-menu{
        display: none;
      }
      .show{
        display: block;
      }
    }
  }



/* 반응형 */
  @media (max-width: 1000px) {
    .menu-contents{
      .menu-items{ margin: 0 -40px; }
    }
  }


  @media (max-width: 768px) {
    .menu-contents{
      .btn-box{ width: 50%; }
      .menu-items{ margin: 0 -30px; }
    }
  }


  @media (max-width: 600px) {
    .menu-contents{
      .btn-box{ width: 50%; }
      .menu-items{ margin: 0 -20px; }
    }
  }

</style>