<template>
  <div class="beverage-menu mw1440 padding-50">
    <div class="j-head-myeongjo">blended</div>
    <div class="group padding-tb-50">
      <div class="box">
        <div class="img-box">
          <img src="../assets/beverage/blended-berry.jpg" alt="">
        </div>
        <div class="text-box">
          <div class="j-title">Berry</div>
        </div>
      </div>
      <div class="box">
        <div class="img-box">
          <img src="../assets/beverage/blended-avocado.jpg" alt="">
        </div>
        <div class="text-box">
          <div class="j-title">Avocado</div>
        </div>
      </div>
      <div class="box">
        <div class="img-box">
          <img src="../assets/beverage/blended-lime.jpg" alt="">
        </div>
        <div class="text-box">
          <div class="j-title">Lime</div>
        </div>
      </div>
      <div class="box">
        <div class="img-box">
          <img src="../assets/beverage/blended-choco.jpg" alt="">
        </div>
        <div class="text-box">
          <div class="j-title">Choco</div>
        </div>
      </div>
      <div class="box">
        <div class="img-box">
          <img src="../assets/beverage/blended-oreo.jpg" alt="">
        </div>
        <div class="text-box">
          <div class="j-title">Oreo</div>
        </div>
      </div>
      <div class="box">
        <div class="img-box">
          <img src="../assets/beverage/blended-greentea.jpg" alt="">
        </div>
        <div class="text-box">
          <div class="j-title">Greentea</div>
        </div>
      </div>
      <div class="box">
        <div class="img-box">
          <img src="../assets/beverage/blended-mocha.jpg" alt="">
        </div>
        <div class="text-box">
          <div class="j-title">Mocha</div>
        </div>
      </div>
    </div>

    <div class="j-head-myeongjo">juice &amp; ade</div>
      <div class="group padding-tb-50">
        <div class="box">
          <div class="img-box">
            <img src="../assets/beverage/juice-pomegranate.jpg" alt="">
          </div>
          <div class="text-box">
            <div class="j-title">Pomegranate Juice</div>
          </div>
        </div>
        <div class="box">
          <div class="img-box">
            <img src="../assets/beverage/juice-strawberry.jpg" alt="">
          </div>
          <div class="text-box">
            <div class="j-title">Strawberry Juice</div>
          </div>
        </div>
        <div class="box">
          <div class="img-box">
            <img src="../assets/beverage/juice-mango.jpg" alt="">
          </div>
          <div class="text-box">
            <div class="j-title">Mango Juice</div>
          </div>
        </div>
        <div class="box">
          <div class="img-box">
            <img src="../assets/beverage/ade-lime.jpg" alt="">
          </div>
          <div class="text-box">
            <div class="j-title">Lime Ade</div>
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
  .beverage-menu{
    text-align: center;
    .j-head-myeongjo{
      color: #1bb850;
      font-weight: bold;
      margin: 0 0 0 30px;
      display: inline-block;
      position: relative;
    }
    .j-head-myeongjo:before{
      content: "";
      height: 3px;
      border-left: 12px solid #1BB850;
      border-right: 12px solid #1BB850;
      opacity: 1;
      position: absolute;
      top: 50%;
      left: -30px;
      right: -20px;
      transform: translateY(-50%);
      transition: all 0.35s ease;
    }
    .group{
      margin: -20px -20px 50px;
      display: flex;
      flex-wrap: wrap;
    }
    .group:last-child{
      margin-bottom: 0;
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
      margin-bottom: 0;
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
    }
  }


/* 반응형 */
  @media (max-width: 1000px) {
    .beverage-menu{
      .box{ width: 25%; }
    }
  }


  @media (max-width: 768px) {
    .beverage-menu{
      .box{ width: 33.33333%; }
      .group{ margin-bottom: 30px; }
    }
  }


  @media (max-width: 600px){
    .beverage-menu{
      .box{ width: 50%; }
      .group{ margin-bottom: 20px; }
    }
  }
</style>