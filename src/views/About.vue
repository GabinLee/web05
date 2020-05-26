<template>
  <div class="about">
    <div class="about-main page-main-img">
      <div class="main-img-font uppercase">about us</div>
    </div>
    <div class="about-contents mw1440 padding-tb-50">
      <div class="group">
        <div class="row-box">
          <div class="img-box padding-tb-50">
            <img src="../assets/about01.jpg" alt="">
          </div>
          <div class="text-box padding-50">
            <div class="j-head-myeongjo">sample</div>
            <div class="j-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
          </div>
          <div class="img-box padding-tb-50">
            <img src="../assets/about02.jpg" alt="">
          </div>
        </div>
        <div class="mobile-row-box">
          <div class="img-box padding-50">
            <img src="../assets/about01.jpg" alt="">
          </div>
          <div class="img-box padding-50">
            <img src="../assets/about02.jpg" alt="">
          </div>
          <div class="text-box">
            <div class="j-head-myeongjo">sample</div>
            <div class="j-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
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
  .about-main{
    background-image: url(../assets/about-main.jpg);
    background-position: center;
  }

  .about-contents{
    .row-box{
      display: flex;
      flex-wrap: wrap;
      .img-box{
        width: 30%;
        img{ margin: 0; }
      }
      .text-box{
        width: 40%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
    .mobile-row-box{ display: none; }
  }



/* 반응형 */
  @media (max-width: 1200px) {
    .about-contents{
      .row-box{ display: none; }
      .mobile-row-box{
        display: flex;
        flex-wrap: wrap;
        .img-box{ width: 50%; }
        .text-box{
          width: 80%;
          margin: 0 auto 50px;
          text-align: center;
        }
      }
    }
  }


  @media (max-width: 1000px) {
  }


  @media (max-width: 768px) {
  }


  @media (max-width: 600px) {
    .about-contents{
      .mobile-row-box{
        margin: 0 -10px;
        .img-box{
          padding-left: 10px;
          padding-right: 10px;
        }
        .text-box{
          width: 100%;
          margin-bottom: 20px;
          padding: 0 20px;
        }
      }
    }
  }
</style>