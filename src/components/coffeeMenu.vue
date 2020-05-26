<template>
  <div class="coffee-menu mw1440 padding-50">
    <div class="group">
      <div class="box">
        <div class="img-box">
          <img src="../assets/coffee/espresso.jpg" alt="">
        </div>
        <div class="text-box">
          <div class="j-title">Espresso</div>
          <div class="info fs14">
            <div class="hot">hot</div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="img-box">
          <img src="../assets/coffee/americano.jpg" alt="">
        </div>
        <div class="text-box">
          <div class="j-title">Americano</div>
          <div class="info fs14">
            <div class="hot">hot</div>
            <div class="ice">ice</div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="img-box">
          <img src="../assets/coffee/cafelatte.jpg" alt="">
        </div>
        <div class="text-box">
          <div class="j-title">Cafe Latte</div>
          <div class="info fs14">
            <div class="hot">hot</div>
            <div class="ice">ice</div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="img-box">
          <img src="../assets/coffee/cafemocha.jpg" alt="">
        </div>
        <div class="text-box">
          <div class="j-title">Cafe Mocha</div>
          <div class="info fs14">
            <div class="hot">hot</div>
            <div class="ice">ice</div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="img-box">
          <img src="../assets/coffee/cappuccino.jpg" alt="">
        </div>
        <div class="text-box">
          <div class="j-title">Cappuccino</div>
          <div class="info fs14">
            <div class="hot">hot</div>
            <div class="ice">ice</div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="img-box">
          <img src="../assets/coffee/flatwhite.jpg" alt="">
        </div>
        <div class="text-box">
          <div class="j-title">Flat White</div>
          <div class="info fs14">
            <div class="hot">hot</div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="img-box">
          <img src="../assets/coffee/caramel-macchiato.jpg" alt="">
        </div>
        <div class="text-box">
          <div class="j-title">Caramel Macchiato</div>
          <div class="info fs14">
            <div class="hot">hot</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
  }
</script>


<style lang="scss" scoped>
  .coffee-menu{
    .group{
      margin: -20px;
      display: flex;
      flex-wrap: wrap;
    }
    .box{
      width: 20%;
      margin-bottom: 20px;
      padding: 20px;
    }
    .img-box{
      position: relative;
      img{ margin-bottom: 0; display: block; }
    }
    .text-box{
      text-align: center;
      border-bottom: 1px solid #333;
      padding: 10px 0;
    }
    .j-title{
      margin-bottom: 5px;
      letter-spacing: 1px;
      text-transform: unset;
    }
    .info{
      display: flex;
      justify-content: center;
      > div{
        margin: 0 2px;
        border-radius: 5px;
        padding: 0 6px;
      }
      .hot{
        color: red;
      }
      .ice{
        color: blue;
      }
    }
  }


/* 반응형 */
  @media (max-width: 1000px) {
    .coffee-menu{
      .box{ width: 25%; }
    }
  }


  @media (max-width: 768px) {
    .coffee-menu{
      .box{ width: 33.33333%; }
    }
  }


  @media (max-width: 600px){
    .coffee-menu{
      .box{ width: 50%; }
    }
  }
</style>