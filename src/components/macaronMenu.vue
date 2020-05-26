<template>
  <div class="macaron-menu mw1440 padding-50">
    <div class="group">
      <div class="box">
        <div class="img-box">
          <img src="../assets/macaron/macaron01.jpg" alt="">
        </div>
        <div class="text-box">
          <div class="j-title">Macaron</div>
        </div>
      </div>
      <div class="box">
        <div class="img-box">
          <img src="../assets/macaron/macaron02.jpg" alt="">
        </div>
        <div class="text-box">
          <div class="j-title">Macaron</div>
        </div>
      </div>
      <div class="box">
        <div class="img-box">
          <img src="../assets/macaron/macaron03.jpg" alt="">
        </div>
        <div class="text-box">
          <div class="j-title">Macaron</div>
        </div>
      </div>
      <div class="box">
        <div class="img-box">
          <img src="../assets/macaron/macaron04.jpg" alt="">
        </div>
        <div class="text-box">
          <div class="j-title">Macaron</div>
        </div>
      </div>
      <div class="box">
        <div class="img-box">
          <img src="../assets/macaron/macaron05.jpg" alt="">
        </div>
        <div class="text-box">
          <div class="j-title">Macaron</div>
        </div>
      </div>
      <div class="box">
        <div class="img-box">
          <img src="../assets/macaron/macaron06.jpg" alt="">
        </div>
        <div class="text-box">
          <div class="j-title">Macaron</div>
        </div>
      </div>
      <div class="box">
        <div class="img-box">
          <img src="../assets/macaron/macaron07.jpg" alt="">
        </div>
        <div class="text-box">
          <div class="j-title">Macaron</div>
        </div>
      </div>
      <div class="box">
        <div class="img-box">
          <img src="../assets/macaron/macaron08.jpg" alt="">
        </div>
        <div class="text-box">
          <div class="j-title">Macaron</div>
        </div>
      </div>
      <div class="box">
        <div class="img-box">
          <img src="../assets/macaron/macaron09.jpg" alt="">
        </div>
        <div class="text-box">
          <div class="j-title">Macaron</div>
        </div>
      </div>
      <div class="box">
        <div class="img-box">
          <img src="../assets/macaron/macaron10.jpg" alt="">
        </div>
        <div class="text-box">
          <div class="j-title">Macaron</div>
        </div>
      </div>
      <div class="box">
        <div class="img-box">
          <img src="../assets/macaron/macaron11.jpg" alt="">
        </div>
        <div class="text-box">
          <div class="j-title">Macaron</div>
        </div>
      </div>
      <div class="box">
        <div class="img-box">
          <img src="../assets/macaron/macaron12.jpg" alt="">
        </div>
        <div class="text-box">
          <div class="j-title">Macaron</div>
        </div>
      </div>
      <div class="box">
        <div class="img-box">
          <img src="../assets/macaron/macaron13.jpg" alt="">
        </div>
        <div class="text-box">
          <div class="j-title">Macaron</div>
        </div>
      </div>
      <div class="box">
        <div class="img-box">
          <img src="../assets/macaron/macaron14.jpg" alt="">
        </div>
        <div class="text-box">
          <div class="j-title">Macaron</div>
        </div>
      </div>
      <div class="box">
        <div class="img-box">
          <img src="../assets/macaron/macaron15.jpg" alt="">
        </div>
        <div class="text-box">
          <div class="j-title">Macaron</div>
        </div>
      </div>
      <div class="box">
        <div class="img-box">
          <img src="../assets/macaron/macaron16.jpg" alt="">
        </div>
        <div class="text-box">
          <div class="j-title">Macaron</div>
        </div>
      </div>
      <div class="box">
        <div class="img-box">
          <img src="../assets/macaron/macaron17.jpg" alt="">
        </div>
        <div class="text-box">
          <div class="j-title">Macaron</div>
        </div>
      </div>
      <div class="box">
        <div class="img-box">
          <img src="../assets/macaron/macaron18.jpg" alt="">
        </div>
        <div class="text-box">
          <div class="j-title">Macaron</div>
        </div>
      </div>
      <div class="box">
        <div class="img-box">
          <img src="../assets/macaron/macaron19.jpg" alt="">
        </div>
        <div class="text-box">
          <div class="j-title">Macaron</div>
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
  .macaron-menu{
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
    .macaron-menu{
      .box{ width: 25%; }
    }
  }


  @media (max-width: 768px) {
    .macaron-menu{
      .box{ width: 33.33333%; }
    }
  }


  @media (max-width: 600px){
    .macaron-menu{
      .box{ width: 50%; }
    }
  }
</style>