<template>
  <div class="mobileSlide">
    <swiper
      :slidesPerView="'auto'"
      :autoplay="{
        delay: 5000,
      }"
      :speed="1500"
      :loop="true"
      :spaceBetween="0"
      :pagination="{
        clickable: true,
      }"
      :mousewheel="false"
      :modules="modules"
    >
      <swiper-slide>
        <img src="https://picsum.photos/1000/1000" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://picsum.photos/1000/1000" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://picsum.photos/1000/1000" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts" setup>
import { Pagination, Autoplay } from "swiper";

const modules = [Pagination, Autoplay];
</script>

<style lang="scss" scoped>
.swiper-slide {
  position: relative;
  overflow: hidden;
  width: 100%;
  display:none;

  @media screen and (max-width:900px) {
    display:block;    
  }
}

.swiper-slide img {
  display: block;
  width: 100%;
}
</style>
