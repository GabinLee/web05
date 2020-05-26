<template>
  <div class="cake-menu mw1440 padding-50">
    <div class="group">
      <div class="box">
        <div class="img-box">
          <img src="../assets/cake/cake-cherry.jpg" alt="">
        </div>
        <div class="text-box">
          <div class="j-title">Cherry</div>
        </div>
      </div>
      <div class="box">
        <div class="img-box">
          <img src="../assets/cake/cake-strawberry.jpg" alt="">
        </div>
        <div class="text-box">
          <div class="j-title">Strawberry</div>
        </div>
      </div>
      <div class="box">
        <div class="img-box">
          <img src="../assets/cake/cake-chocolate.jpg" alt="">
        </div>
        <div class="text-box">
          <div class="j-title">Chocolate</div>
        </div>
      </div>
      <div class="box">
        <div class="img-box">
          <img src="../assets/cake/cake-oreo.jpg" alt="">
        </div>
        <div class="text-box">
          <div class="j-title">Oreo</div>
        </div>
      </div>
      <div class="box">
        <div class="img-box">
          <img src="../assets/cake/cupcake-strawberry.jpg" alt="">
        </div>
        <div class="text-box">
          <div class="j-title">Cupcake</div>
        </div>
      </div>
      <div class="box">
        <div class="img-box">
          <img src="../assets/cake/cupcake-redvelvet.jpg" alt="">
        </div>
        <div class="text-box">
          <div class="j-title">Cupcake</div>
        </div>
      </div>
      <div class="box">
        <div class="img-box">
          <img src="../assets/cake/cupcakes01.jpg" alt="">
        </div>
        <div class="text-box">
          <div class="j-title">Cupcake</div>
        </div>
      </div>
      <div class="box">
        <div class="img-box">
          <img src="../assets/cake/cupcakes02.jpg" alt="">
        </div>
        <div class="text-box">
          <div class="j-title">Cupcake</div>
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
  .cake-menu{
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

    }
  }


/* 반응형 */
  @media (max-width: 1000px) {
    .cake-menu{
      .box{ width: 25%; }
    }
  }


  @media (max-width: 768px) {
    .cake-menu{
      .box{ width: 33.33333%; }
    }
  }


  @media (max-width: 600px){
    .cake-menu{
      .box{ width: 50%; }
    }
  }
</style>