<template>
  <div class="mainSlide">
    <swiper
      :slidesPerView="'auto'"
      :centeredSlides="true"
      :autoplay="{
        delay:5000,
        disableOnInteraction:false,
      }"      
      :speed="1500"
      :loop="true"
      :spaceBetween="30"
      :pagination="{
        clickable: true,
      }"
      :mousewheel="false"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <img src="~/assets/image/home/visual01.jpg">
      </swiper-slide>
      <swiper-slide>
        <img src="~/assets/image/home/visual02.jpg">
      </swiper-slide>
      <swiper-slide>
        <img src="~/assets/image/home/visual03.jpg">
      </swiper-slide>
      <swiper-slide>
        <img src="~/assets/image/home/visual04.jpg">
      </swiper-slide>
    </swiper>
  </div>

</template>

<script lang="ts" setup>
import {Pagination, Autoplay} from 'swiper'

const modules = [Pagination, Autoplay]

</script>

<style lang="scss" scoped>
.mainSlide{
  position: relative;
  z-index:10;
  @media screen and (max-width:1480px) {
    padding:0 20px;
  }
}
.swiper-slide{    
  position: relative;
  display:flex;
  justify-content: center;
  align-items: center;
  overflow:hidden;
  max-width:1440px;
  border-radius:10px;
  margin-top:50px;

  @media screen and (max-width:900px) {
    display:none;    
  }
  
}

.swiper-slide img{
  display:block;
  width:100%;
  max-width:1440px;
}

</style>