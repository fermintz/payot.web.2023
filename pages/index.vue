<template>
  <div class="">
    <div class="main_slider">
      <MainSwiper />
    </div>

    <div class="mobile_slider">
      <MainMobileSwiper />
    </div>

    <div class="inner">
      <MainGrid />

      <div class="main_banner">
        <dl>
          <dt>Reference</dt>
          <dd>페이오티 키오스크 설치사례를<br>확인해보세요</dd>
        </dl>
        <span class="material-icons">
          chevron_right
        </span>
        <div class="image">
          <img src="~/assets/image/home/city.png"/>
        </div>
      </div>
    </div>

    <section class="why">
      <div class="inner">
        <h2>페이오티 시스템 왜 사용해야 할까요?</h2>
        <div class="slide"> 
          <dl>
            <dt>
              <strong>합리적인 가격과 A/S</strong>
              <span>타사 대비 합릭적인 가격에 키오스크를 공급 및 설치하며, 1년 무상 A/S를 제공합니다.</span>
            </dt>
            <dd>
              <img src="~/assets/image/home/why_1.png"/>
            </dd>
          </dl>

          <dl>
            <dt>
              <strong>지속적인 사후지원</strong>
              <span>새롭게 변해가는 트렌드에 맞춰 UI·UX 및 다양한 기능들을 업데이트 합니다.</span>
            </dt>
            <dd>
              <img src="~/assets/image/home/why_2.png"/>
            </dd>
          </dl>

          <dl>
            <dt>
              <strong>안전하게 관리되는 데이터</strong>
              <span>클라우드 시스템으로 고객의 데이터를 안전하게 지킵니다.</span>
            </dt>
            <dd>
              <img src="~/assets/image/home/why_3.png"/>
            </dd>
          </dl>
        </div>
     </div>

    </section>

    <section class="point inner">
      <h2>타사와의 비교로<br/>페이오티의 강점을 확인해보세요</h2>
      <el-row :gutter="120">
        <el-col :lg="12">
          <dl class="payot">
            <dt>페이오티 시스템의 기능</dt>
            <dd>
              <el-row :gutter="15">
                <el-col :lg="8" :sm="8" :xs="8">
                  <div class="box">동전매출기록</div>
                </el-col>
                <el-col :lg="8" :sm="8" :xs="8">
                  <div class="box">전국매장 매출비교</div>
                </el-col>
                <el-col :lg="8" :sm="8" :xs="8">
                  <div class="box">경고음 송출기능</div>
                </el-col>
                <el-col :lg="8" :sm="8" :xs="8">
                  <div class="box">금액원격투입</div>
                </el-col>
                <el-col :lg="8" :sm="8" :xs="8">
                  <div class="box">회원 문자발송</div>
                </el-col>
                <el-col :lg="8" :sm="8" :xs="8">
                  <div class="box">포인트적립/결제</div>
                </el-col>
                <el-col :lg="8" :sm="8" :xs="8">
                  <div class="box">전면광고기능</div>
                </el-col>
                <el-col :lg="8" :sm="8" :xs="8">
                  <div class="box">카카오톡 알림기능</div>
                </el-col>
                <el-col :lg="8" :sm="8" :xs="8">
                  <div class="box">음성안내 기능</div>
                </el-col>
              </el-row>
            </dd>
          </dl>
        </el-col>
        <el-col :lg="12">
          <dl class="a_company">
            <dt>A사 시스템 기능</dt>
            <dd>
              <el-row :gutter="15">
                <el-col :lg="8" :sm="8" :xs="8">
                  <div class="box not">동전매출기록</div>
                </el-col>
                <el-col :lg="8" :sm="8" :xs="8">
                  <div class="box not">전국매장 매출비교</div>
                </el-col>
                <el-col :lg="8" :sm="8" :xs="8">
                  <div class="box not">경고음 송출기능</div>
                </el-col>
                <el-col :lg="8" :sm="8" :xs="8">
                  <div class="box">금액원격투입</div>
                </el-col>
                <el-col :lg="8" :sm="8" :xs="8">
                  <div class="box not">회원 문자발송</div>
                </el-col>
                <el-col :lg="8" :sm="8" :xs="8">
                  <div class="box">포인트적립/결제</div>
                </el-col>
                <el-col :lg="8" :sm="8" :xs="8">
                  <div class="box not">전면광고기능</div>
                </el-col>
                <el-col :lg="8" :sm="8" :xs="8">
                  <div class="box">카카오톡 알림기능</div>
                </el-col>
                <el-col :lg="8" :sm="8" :xs="8">
                  <div class="box not">음성안내 기능</div>
                </el-col>
              </el-row>
            </dd>
          </dl>
        </el-col>
      </el-row>
    </section>

    <section class="partner inner">
      <div class="title">
        <h2>With us</h2>
        <p>페이오티와 함께하는 파트너를 확인해보세요</p>
      </div>
      <el-row :gutter="24">
        <el-col :lg="4" :md="6" :sm="8" :xs="12" v-for="(item, index) in 17" :key="index">
          <div class="partner_logo">
            <img :src="`_nuxt/assets/image/home/partner${item}.png`" >
          </div>
        </el-col>
      </el-row>
    </section>

    
    <section class="wide_banner">

    </section>

    <section class="main_bottom inner">
      <el-row :gutter="100"> 
        <el-col :lg="12">
          <dl class="news">
            <dt>
              <strong>News</strong>
              <span>페이오티 새소식</span>
            </dt>
            <dd>
              <ul>
                <li v-for="item in 5" :key="item">
                  <img src="https://picsum.photos/200" />
                  <div class="text">
                    <strong>페이오티 셀프빨래방 키오스크, 빨래방 운영관리에 필수요소!</strong>
                    <span>2023.02.10</span>
                  </div>
                </li>
              </ul>
            </dd>
          </dl>
        </el-col>
        <el-col :lg="12">
          <dl class="support">
            <dt>
              <strong>Support</strong>
              <span>고객지원</span>
            </dt>
            <dd>
              dd
            </dd>
          </dl>
          <dl class="customer">
            <dt>
              <strong>Customer</strong>
              <span>고객센터</span>
            </dt>
            <dd>
              <div class="operation">
                <strong>070-7807-6857</strong>
                <span>평일 10:00 ~ 17:00</span>
                <span>점심 12:30 ~ 13:30</span>
                <span>토,일,공휴일 휴무</span>
              </div>
              <div class="kakao_qr">
                <p>카카오톡 상담</p>
                <div class="qr_area">

                </div>
              </div>
            </dd>
          </dl>
        </el-col>
      </el-row>
    </section>
  </div>
</template>

<script lang="ts" setup>


</script>

<style lang="scss" scoped>

.main{
  padding-bottom:100px;
}

section{
  .title{
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
}

.main_banner{
  position: relative;
  display:flex;
  justify-content: space-between;
  background:#292929;
  border-radius:10px;
  min-height:400px;
  overflow: hidden;
  margin:200px 0;
 
  dl{
    position: relative;
    z-index:2;
    flex:1;
    padding:50px 0 0 50px;
    dt{
      color:#FFE08F;
      font-size:4.38em;
      font-weight:800;
    }
    dd{
      color:#fff;
      font-size:1.38rem;
      margin-top:10px;
    }
  }

  span{
    position: absolute;
    bottom:30px;
    right:30px;
    color:#fff;
    background:#000;
    border-radius:100%;
    width:50px;
    height:50px;
    display:flex;
    align-items: center;
    justify-content: center;
  }
  
  .image{
    flex:1;

    img{
      height:400px;
 
    }
  }

  @media screen and (max-width:992px) {
    flex-direction: column;
    dl{
      padding:30px;
    }
    .image{
      position: absolute;
      right:0px;
      opacity: 0.2;
    }
  }
} /* banner */


section.why{
  margin-bottom:200px;
  h2{
    font-size:2.25em;
    font-weight:600;
    margin-bottom:30px;
  }

  .slide{
    display:flex;
    gap:30px;

    dl{
      flex:1;
      display:flex;
      flex-direction: column;
      justify-content: space-between;
      background:#f5f5f7;
      border-radius:10px;
      padding:30px;
      min-height:360px;
      margin-bottom:20px;

      dt{
        span, strong{
          display:block;
        }
        strong{
          font-size:1.38em;
          font-weight:600;
        }
        span{
          color:#898989;
          margin-top:15px;
        }
      }
      dd{
        display:flex;
        justify-content: center;
        margin-top:30px;

        img{
          height:150px;
        }
      }
    }
  }

  @media screen and (max-width:1200px) {
    
    .inner{
      padding:0
    }
    h2{
      padding-left:20px;
    }
    .slide{
      overflow-y:auto;
      padding:0px 20px 0 20px;
      &::-webkit-scrollbar{
        display:none;
      }
      dl{
        max-width:33.33333334%;
        min-width:290px;
        flex:none;
        min-height:300px;

        dt{
          span{
            font-size:14px;
          }
        }

        dd{
          img{
            height:100px;
          }
        }
      }
    }
  }
  
}

section.point{
  margin-bottom:100px;

  h2{
    font-size:2.25em;
    font-weight:600;
    margin-bottom:30px;
  }
  dl{
    margin-bottom:100px;
    dt{
      display:flex;
      align-items: center;
      padding:0 30px;
      color:#fff;
      height:70px;
      display:flex;
      font-size:1.38rem;
      font-weight:600;
      background:#393939;
      margin-bottom:30px;
      border-radius:10px;
    }

    dd{
      .el-col{
        margin-bottom:15px;
      }
      .box{
        display:flex;
        justify-content: center;
        align-items: center;
        min-height:120px;
        background:#f5f5f7;
        border-radius:10px;
        font-size:1.13rem;
        font-weight:500;
        padding:10px;
        text-align:center;
      }
      .box.not{
        text-decoration: line-through;
        color:#898989;
        background:#e2e2e2;
      }
    }
  }

  dl.payot{
    dt{
      background:#0066ff;
    }
  }
}

section.partner{

  .title{
    text-align:center;
    margin-bottom:50px;
    h2{
      font-size:3.13rem
    }
  }
  .partner_logo{
    display:flex;
    align-items: center;
    justify-content: center;
    border:1px solid #e2e2e2;
    border-radius:10px;
    overflow:hidden;
    padding:10px;

    img{
      width:100%;
    }
  }
  .el-col{
    margin-bottom:24px;
  }
}

section.wide_banner{
  background-image: url('https://picsum.photos/1920/1080');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;

  height:500px;
  margin:150px 0;
}

section.main_bottom{
  dl{
    dt{
      display:flex;
      align-items: flex-end;
      margin-bottom:30px;
      strong{
        font-size: 2.25rem;
        font-weight:600;
        line-height:1;
        margin-right:15px;
      }
      span{
        color:#898989;
      }
    }
  }

  .news{

    @media screen and (max-width:1480px) {
      margin-bottom:70px;
    }
    ul{
      display:flex;
      flex-direction: column;
      gap:24px;
    }
    li{
      display:flex;
      align-items: center;
      gap:30px;
      img{
        width:110px;
        height:110px;
        border-radius:10px;
        object-fit: cover;
        border:1px solid #e2e2e2;
      }
      .text{
        flex:1;
        strong{
          display:block;
          font-size:1.13rem;
          font-weight:600;
        }
        span{
          display:block;
          color:#898989;
          margin-top:10px;
        }
      }
    }
  }
  .support{
    margin-bottom:70px;
    dd{
      height:250px;
      background:#f2f2f2;
      border-radius:10px;
      padding:30px;
    }
  }

  .customer{
    dd{
      position: relative;
      min-height:250px;
      background:#f2f2f2;
      padding:30px;
      border-radius:10px;
    }
    .operation{
      strong,span{
        display:block;
      }
      strong{
        font-size:2.25rem;
        font-weight:800;
        margin-bottom:15px;
      }
      span{
        margin-bottom:5px;
      }
    }
    .kakao_qr{
      position: absolute;
      right:30px;
      bottom:30px;
      display:flex;
      flex-direction: column;
      align-items: flex-end;
      p{
        text-align:center;
        width:120px;
        margin-bottom:10px; 
      }
      .qr_area{
        width:120px;
        height:120px;
        border-radius:10px;
        background:#F5E000;
      }
    }
  }
}

</style>
