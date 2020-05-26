<template>
  <div class="events">
    <div class="events-main page-main-img">
      <div class="main-img-font uppercase">events</div>
    </div>
    <div class="events-contents mw1440 padding-tb-50">
      <div class="box">
        <div class="img-box padding-50">
          <img src="../assets/home-events01.jpg" alt="">
        </div>
        <div class="text-box padding-50">
          <div class="j-head-myeongjo">sample</div>
          <div class="j-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
        </div>
      </div>

      <div class="box">
        <div class="text-box padding-50">
          <div class="j-head-myeongjo">sample</div>
          <div class="j-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
        </div>
        <div class="img-box padding-50">
          <img src="../assets/home-events02.jpg" alt="">
        </div>
      </div>

      <div class="box">
        <div class="img-box padding-50">
          <img src="../assets/home-events03.jpg" alt="">
        </div>
        <div class="text-box padding-50">
          <div class="j-head-myeongjo">sample</div>
          <div class="j-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
        </div>
      </div>

      <div class="box">
        <div class="text-box padding-50">
          <div class="j-head-myeongjo">sample</div>
          <div class="j-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
        </div>
        <div class="img-box padding-50">
          <img src="../assets/home-events04.jpg" alt="">
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
  .events-main{
    background-image: url(../assets/events-main.jpg);
    background-position: center bottom;
  }
  .events-contents{
    .box{
      display: flex;
      flex-wrap: wrap;
    }
    .img-box{
      width: 50%;
      img{ margin-bottom: 0; }
    }
    .text-box{
      width: 50%;
      text-align: center;
      display: flex;
      flex-direction: column;
      // align-items: center;
      justify-content: center;
    }
  }
  




/* 반응형 */
  @media (max-width: 1000px) {
    .events-contents{
      .box{ margin: 0 -40px; }
    }
  }


  @media (max-width: 768px) {
    .events-contents{
      .box{
        margin: 0;
        padding: 30px;
      }
      .box:nth-child(even){ flex-direction: column-reverse; }
      .img-box{
        width: 70%;
        margin: 0 auto;
        padding: 0;
      }
      .text-box{
        width: 100%;
        padding-left: 0;
        padding-right: 0;
      }
    }
  }


  @media (max-width: 600px) {
    .events-contents{
      .box{
        margin: 0 -20px;
        padding: 20px;
      }
    }
  }

</style>