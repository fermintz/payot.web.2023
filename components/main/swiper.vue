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
        <img src="https://picsum.photos/1440/501">
      </swiper-slide>
      <swiper-slide>
        <img src="https://picsum.photos/1440/502">
      </swiper-slide>
      <swiper-slide>
        <img src="https://picsum.photos/1440/503">
      </swiper-slide>
      <swiper-slide>
        <img src="https://picsum.photos/1440/504">
      </swiper-slide>
      <swiper-slide>
        <img src="https://picsum.photos/1440/505">
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