<template>
  <div class="about">
    <section class="visual">
      <div class="text">
        <strong>무인세탁매장을 편리하게</strong>
        <span>페이오티 키오스크</span>
      </div>
    </section>

    <div class="inner">
      <section class="epilogue">
        <div class="title">
          <h2>페이오티는 무인세탁매장 편리하게<br/>관리할 수 있도록 시스템을 만들고 있습니다.</h2>
          <p>기존 무인매장의 한계를 극복하기 위해 원격 결제시스템을 도입해 비상 상황에 대처하고<br/>
  매출까지 자동으로 관리할 수 있는 시스템을 개발해 매장 운영의 완전 무인화를 앞당기고 있습니다</p>
        </div>

        <h4>
          페이오티 솔루션이 왜 좋을까?
        </h4>      

        <el-row :gutter="60">
          <el-col :md="8" :sm="12"  :xs="12">
            <dl>
              <dt>
                <Icon name="ic:outline-cloud-done" size="50" color="#FF4D75"/>
              </dt>
              <dd>
                <strong>안전한 데이터 관리</strong>
                <span>안전한 클라우드 서버에 고객의 데이터를 저장함으로써 데이터 손실에 대한 우려가 없습니다</span>
              </dd>
            </dl>
          </el-col>
          <el-col :md="8" :sm="12" :xs="12">
            <dl>
              <dt>
                <Icon name="ri:customer-service-2-line" size="50" color="#FF4D75"/>
              </dt>
              <dd>
                <strong>친절한 상담 및 지원</strong>
                <span>안전한 클라우드 서버에 고객의 데이터를 저장함으로써 데이터 손실에 대한 우려가 없습니다</span>
              </dd>
            </dl>
          </el-col>
          <el-col :md="8" :sm="12"  :xs="12">
            <dl>
              <dt>
                <Icon name="solar:refresh-circle-linear" size="50" color="#FF4D75"/>
              </dt>
              <dd>
                <strong>지속적인 업데이트</strong>
                <span>안전한 클라우드 서버에 고객의 데이터를 저장함으로써 데이터 손실에 대한 우려가 없습니다</span>
              </dd>
            </dl>
          </el-col>
          <el-col :md="8" :sm="12"  :xs="12">
            <dl>
              <dt>
                <Icon name="icon-park-outline:spanner" size="50" color="#FF4D75"/>
              </dt>
              <dd>
                <strong>1년 무상 A/S</strong>
                <span>안전한 클라우드 서버에 고객의 데이터를 저장함으로써 데이터 손실에 대한 우려가 없습니다</span>
              </dd>
            </dl>
          </el-col>
          <el-col :md="8" :sm="12"  :xs="12">
            <dl>
              <dt>
                <Icon name="majesticons:creditcard-hand-line" size="50" color="#FF4D75"/>
              </dt>
              <dd>
                <strong>다양한 결제 지원</strong>
                <span>안전한 클라우드 서버에 고객의 데이터를 저장함으로써 데이터 손실에 대한 우려가 없습니다</span>
              </dd>
            </dl>
          </el-col>
          <el-col :md="8" :sm="12"  :xs="12">
            <dl>
              <dt>
                <Icon name="mingcute:remote-line" size="50" color="#FF4D75"/>
              </dt>
              <dd>
                <strong>원격으로 매장관리</strong>
                <span>안전한 클라우드 서버에 고객의 데이터를 저장함으로써 데이터 손실에 대한 우려가 없습니다</span>
              </dd>
            </dl>
          </el-col>
        </el-row>
      </section>

      <section class="graph">
        <div class="title">
          <h4>
            매년 증가하는<br/>페이오티 시스템 도입 매장 수
          </h4>
          <a>전체 매장지도 확인하기</a>
        </div>

        <div class="chart">
          <Line :data="chartData" :options="options" :height="400" :width="'100%'"></Line>
        </div>  
      </section>
    
      <div class="banner">
        <p>앞으로도 고객님의 만족을 위해<br/>최선을 다하겠습니다</p>
      </div>


      <section class="history">
        <h4>페이오티 타임라인</h4>

        <swiper
          :slidesPerView="'auto'"
          :spaceBetween="15"
          :freeMode="true"
          :loop="false"
          :pagination="{
            type: 'progressbar',
          }"
          :modules="modules"
          class="historySwiper"
        >
          <swiper-slide>
            <dl>
              <dt>2020</dt>
              <dd>
                <span>32인치 키오스크 신규런칭</span>
                <span>세탁수거배달 서비스 '데일리세탁' 런칭</span>
                <span>설치매장 200여개 돌파</span>
              </dd>
            </dl>
          </swiper-slide>
          <swiper-slide>
            <dl>
              <dt>2019</dt>
              <dd>
                <span>부산 5개대학 설치완료</span>
                <span>설치대수 500대 돌파</span>
                <span>월드크리닝 매장설치</span>
              </dd>
            </dl>
          </swiper-slide>
          <swiper-slide>
            <dl>
              <dt>2018</dt>
              <dd>
                <span>연구소기업인증</span>
                <span>더런드리 공급계약 체결</span>
                <span>인하대학교 결제시스템 적용</span>
                <span>벤처기업인증</span>
              </dd>
            </dl>
          </swiper-slide>
          <swiper-slide>
            <dl>
              <dt>2017</dt>
              <dd>
                <span>자동판매기 결제시스템 개발완료</span>
                <span>한국 디지털 미디어고 시스템 적용</span>
                <span>자동판매기 결제시스템 개발완료</span>
              </dd>
            </dl>
          </swiper-slide>
          <swiper-slide>
            <dl>
              <dt>2016</dt>
              <dd>
                <span>BUH 투자유치</span>
                <span>(주)페이오티 설립</span>
              </dd>
            </dl>
          </swiper-slide>
        </swiper>
      </section>
    </div>

  </div>
</template>

<script lang="ts" setup>
import {Chart, registerables} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import {Line} from 'vue-chartjs'
import { Pagination,FreeMode } from 'swiper';

const modules = [Pagination,FreeMode]

Chart.register(...registerables, ChartDataLabels);

const chartData = {
  labels:[
    '2019','2020','2021','2022','2023'
  ],
  datasets:[{
    label:'매출',
    data:[0,100,300,700,900],
    borderColor: "rgba(255, 77, 117, 1)",
    borderWidth: 2, // 막대선 두께
    fill: true,
    backgroundColor:"rgba(255, 241, 244, 1)",
    pointBorderWidth:2,
    pointHoverBorderWidth:4,
  }],
}

const options = {
  responsive:true,
  maintainAspectRatio:false,

  layout:{
    autoPadding:true,
    padding:30
    
  },
  scales:{
    x:{
      grid:{
        display:false,
      },
    },
    y:{
      grid:{
        display:true,
      },
      ticks:{
        display:false,
      },
    }
  },
  plugins:{
    tooltip:{
      enabled:false,
    },
    decimation:{
      enabled:true,
    },
    legend:{
      display:false,
    },
    datalabels:{
      color:'rgba(255, 77, 117, 1)',
      anchor:'end',
      align:'top',
      font:{
        size:18,
      },
    },
  },
}

</script>

<style lang="scss" scoped>

.about{
  .inner{
    overflow:inherit
  }
}
.visual{
  position: relative;
  height:700px;
  background:#f5f5f7;
  .text{
    position: absolute;
    left:50%;
    top:100px;
    transform: translateX(-50%);
    font-size:2.5rem;
    strong, span{
      display:block;
      text-align:center;
      font-weight:600;
    }
    strong{

    }
    span{
      
    }
  }
}


.epilogue{
  padding:150px 0;
  .title{
    margin-bottom:150px;
    h2{
      font-size:2.25rem;
      font-weight:600;
    }
    p{
      margin-top:20px;
      font-size:1.25rem;
      color:#797979;
    }
  }

  h4{
    font-size:1.75rem;
    font-weight:600;
    margin-bottom:30px;
  }

  .el-col{
    margin-bottom:40px;
    border-bottom:1px solid #e2e2e2;
    padding-bottom:40px;
  }

  .el-col:nth-child(4),.el-col:nth-child(5),.el-col:nth-child(6) {
    border-bottom:0px;
  }

  dl{
    border-radius:10px;
    
    dt{
      margin-bottom:20px;
    }
    dd{
      span,strong{display:block;}
      strong{
        font-size:1.13rem;
        font-weight:600;
      }
      span{
        margin-top:10px;
        color:#797979;
      }
    }
  }

  @media screen and (max-width:772px) {
    .el-col{
      margin-bottom:40px;
    }
    dl{
      padding:0;
      border:0px;
    }
  }
}

.graph{ 
  .title{
    h4{
      font-size:1.75rem;
      font-weight:600;
      margin-bottom:20px;
    }
    a{
      color:#0066ff;
      font-size:1.13rem;
      text-decoration: underline;
      cursor: pointer;
    }
  }
}

.banner{
  margin:200px 0;
  position: relative;
  height:400px;
  background:#292929;
  border-radius:10px;

  p{
    left:40px;
    top:40px;
    position: absolute;
    color:#fff;
    font-size:1.75rem;
    font-weight:600;
  }
}

.history{
  padding-bottom:200px;
  
  h4{
    font-size:1.75rem;
    font-weight:600;
    margin-bottom:20px;
  }

  dl{
    margin-top:50px;
    
    dt{
      font-size:2.25rem;
      font-weight:800;
    }
    dd{
      display:flex;
      flex-direction: column;
      gap:5px;
      margin-top:15px;

      span{
        font-size:1.13rem
      }
    }
  }

  .historySwiper{
    margin-top:30px;

    .swiper-slide{
      width:360px;
      cursor:grab;
    }

    @media screen and (max-width:772px) {
      .swiper-slide{
        width:260px;
      }
    }
  }
}
</style>
