<template>
  <div class="contact">
    <div class="contact-main page-main-img">
      <div class="main-img-font uppercase">contact</div>
    </div>
    <div class="contact-contents mw1440 padding-tb-50">
      <div class="group">
        <div class="img-box padding-50">
          <img src="../assets/contact-map.jpg" alt="">
        </div>
        <div class="text-box padding-50 fs16">
          <input type="text" name="first-name" value="" placeholder="Your Name" />
          <input type="text" name="first-name" value="" placeholder="Your Email" />
          <textarea name="your-message" aria-required="true" placeholder="Message" rows="10"></textarea>
          <button class="green-btn uppercase">submit</button>
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
  .contact-main{
    background-image: url(../assets/contact-main.jpg);
    background-position: bottom;
  }

  .contact-contents{
    .group{ display: flex; flex-wrap: wrap; }
    .img-box{
      width: 50%;
      img{ margin-bottom: 0; }
    }
    .text-box{
      text-align: center;
      width: 50%;
      margin: auto 0;
      input, textarea{
        background-color: #dedede;
        width: 100%;
        margin-bottom: 20px;
        padding: 14px 10px;
      }
      textarea{ margin-bottom: 40px; }
      textarea:focus{ outline: none; }
      button{ padding: 14px 50px; }
    }
    
  }





/* 반응형 */
  @media (max-width: 1000px) {
    .contact-contents{
      .group{ margin: 0 -40px; }
    }
  }


  @media (max-width: 768px) {
    .contact-contents{
      .group{ margin: 0; }
    }
  }


  @media (max-width: 700px) {
    .contact-contents{
      .group{ margin: 0; }
      .img-box{
        width: 80%;
        margin: 0 auto;
      }
      .text-box{
        width: 100%;
        textarea{ margin-bottom: 30px; }
      }
    }
  }

</style>