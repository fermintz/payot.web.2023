<template>
  <section class="main_grid">
    <div class="title">
      <h2>수 많은 매장오너들의 선택<br> 페이오티 ALL IN ONE 관리솔루션</h2>
      <p>무인세탁매장에서 필요한 다양한 기능들을 모두 담았습니다</p>
    </div>

    <div class="grid">
      <el-row :gutter="30"> 
        <el-col :md="8" :sm="12">
          <swiper
          :autoplay="{
            delay:3000,
            disableOnInteraction:false,
          }"
          :spaceBetween="20"
          :speed="1000"
          :loop="true"
          :modules="modules"
          >
            <swiper-slide>
              <dl class="grid_item">
                <dt>동전 매출 집계</dt>
                <dd>
                  <img src="~/assets/image/home/grid_01.png" />
                </dd>
              </dl>
            </swiper-slide>
            <swiper-slide>
              <dl class="grid_item">
                <dt>경고방송 및 음성안내 지원</dt>
                <dd>
                  <img src="~/assets/image/home/grid_05.png" />
                </dd>
              </dl>
            </swiper-slide>
          </swiper>

          
        </el-col>
        <el-col :md="8" :sm="12">
          <swiper
          :autoplay="{
            delay:3000,
            disableOnInteraction:false,
          }"
          :spaceBetween="20"
          :speed="1000"
          :loop="true"
          :modules="modules"
          >
            <swiper-slide>
              <dl class="grid_item">
                <dt>다양한 결제서비스 지원</dt>
                <dd>
                  <img src="~/assets/image/home/grid_02.png" />
                </dd>
              </dl>
            </swiper-slide>
            <swiper-slide>
              <dl class="grid_item">
                <dt>포인트 적립률 설정기능</dt>
                <dd>
                  <img src="~/assets/image/home/grid_06.png" />
                </dd>
              </dl>
            </swiper-slide>
          </swiper>
        </el-col>
        <el-col :md="8" :sm="12">
          <swiper
          :autoplay="{
            delay:3000,
            disableOnInteraction:false,
          }"
          :spaceBetween="20"
          :speed="1000"
          :loop="true"
          :modules="modules"
          >
            <swiper-slide>
              <dl class="grid_item">
                <dt>원격(PC/휴대폰)으로 금액투입</dt>
                <dd>
                  <img src="~/assets/image/home/grid_03.png" />
                </dd>
              </dl>
            </swiper-slide>
            <swiper-slide>
              <dl class="grid_item">
                <dt>남은시간 알려주는 시스템 제공</dt>
                <dd>
                  <img src="~/assets/image/home/grid_07.png" />
                </dd>
              </dl>
            </swiper-slide>
          </swiper>
          
        </el-col>
        <el-col :md="16" :sm="12">
          <dl class="grid_row_item">
            <dt>
              <strong>설치된 매장수</strong>
              <span>다양한 무인세탁매장에서<br/>페이오티 키오스크를사용하고 있습니다</span>
              <a href="#">전국 매장지도 확인하기</a>
            </dt>
            <dd>
              700
            </dd>             
          </dl>
        </el-col>
        <el-col :md="8" :sm="12">
          <swiper
          :autoplay="{
            delay:3000,
            disableOnInteraction:false,
          }"
          :spaceBetween="20"
          :speed="1000"
          :loop="true"
          :modules="modules"
          >
            <swiper-slide>
              <dl class="grid_item">
                <dt>카카오톡 알림서비스</dt>
                <dd>
                  <img src="~/assets/image/home/grid_04.png" />
                </dd>
              </dl>
            </swiper-slide>
            <swiper-slide>
              <dl class="grid_item">
                <dt>회원 문자메세지 발송기능</dt>
                <dd>
                  <img src="~/assets/image/home/grid_08.png" />
                </dd>
              </dl>
            </swiper-slide>
          </swiper>
          
        </el-col>
      </el-row>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {Autoplay} from 'swiper'

const modules = [Autoplay]
</script>

<style lang="scss" scoped>
.main_grid{
  margin-top:200px;
  .title{
    text-align:center;
    margin-bottom:70px;
    h2{
      font-size:2.25rem;
      font-weight:600;
    }
    p{
      font-size:1.38rem;
      color:#797979;
      margin-top:20px;
    }
  }

  .grid{
    .grid_item{
      position: relative;
      display:flex;
      flex-direction: column;
      justify-content: space-between;
      background:#f2f2f2;
      border-radius:10px;
      margin-bottom:30px;

      &::after{
        content:'';
        display:block;
        padding-bottom:69.56521739130435%; //460x320
      }
      
      dt{
        position: absolute;
        width:100%;
        left:30px;
        top:30px;
        font-size:1.38rem;
        font-weight:600;
      }
      dd{
        display:flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom:0px;
        width:100%;
       
        img{
          width:90%;
        }
      }
    }

    .grid_row_item{
      position: relative;
      background:#f2f2f2;
      border-radius:10px;
      margin-bottom:30px;

      dt{
        position: absolute;
        left:30px;
        top:30px;
        strong,span,a{
          display:block;
        }
        strong{
          font-size:1.38rem;
          font-weight:600;
        }
        span{
          font-size:1.13rem;
          margin-top:15px;
          color:#898989;
        }
        a{
          margin-top:15px;
          color:#0066ff;
        }
      }
      dd{
        position: absolute;
        right:30px;
        bottom:30px;
        font-size:8.13rem;
        line-height:1;
        font-weight:800;
      }

      .el-col{
        position: relative;
        height:100%;
      }

      &::after{
        content:'';
        display:block;
        padding-bottom:33.68421052631579%; //460x320
      }
    }

    @media screen and (max-width:990px) {
      .grid_item{
        dt{
          left:20px;
          top:20px;
        }
      }
      .grid_row_item{
        dt{
          top:20px;
          left:20px;
        }
        dd{
          font-size:5.63rem;
        }
        &::after{
          padding-bottom:69.56521739130435%; //460x320 
        }
      }
      
    }
  }
}
</style>