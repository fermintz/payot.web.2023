<template>
  <div class="kiosk32">
    
    <div class="visual">
      <div class="inner">
        <div class="title">
          <span>무인세탁매장의 든든한 파트너 </span>
          <h2>키오스크</h2>
          <p>페이오티에서 개발한 IOT무선장비를 설치해<br/> 세탁장비와 매장을 스마트하게 관리할 수 있습니다</p>
          <button>문의하기</button>
        </div>
      </div>
    </div>

    <section class="options">
      <div class="inner">
        <el-row :gutter="40">
          <el-col :md="8">
            <dl>
              <dt>
                <strong>키오스크32</strong>
                <span>32인치의 대화면 키오스크, 매립설치를 기본으로
                  주변 인테리어와 잘 어울립니다.
                </span>
              </dt>
              <dd>
                <img src="~/assets/image/kiosk32/kiosk01.png">
              </dd>
            </dl>
          </el-col>
          <el-col :md="8">
            <dl>
              <dt>
                <strong>키오스크24</strong>
                <span>24인치의 화면크기를 가지며, 스탠드형태로
                  매장내에 어디든 위치할 수 있습니다.
                </span>
              </dt>
              <dd>
                <img src="~/assets/image/kiosk32/kiosk02.png">
              </dd>
            </dl>
          </el-col>
          <el-col :md="8">
            <dl>
              <dt>
                <strong>키오스크10</strong>
                <span>
                  초소형 키오스크로 매장 어디든 위치할 수 있으며, 
                  협소한 매장에서 사용하기 좋습니다.
                </span>
              </dt>
              <dd>
                <img src="~/assets/image/kiosk32/kiosk03.png">
              </dd>
            </dl>
          </el-col>
        </el-row>
      </div>
    </section>

    <section class="sec-0">
      <div class="inner">
        <h2>키오스크</h2>

        <div class="image">
          <img src="~/assets/image/kiosk32/plan.png">
        </div>
      </div>
    </section>

    
    <section class="sec-1">
      <div class="inner">
        <h2>중요 기능들</h2>

        <el-row :gutter="40">
          <el-col :md="24">
            <dl class="box1">
              <dt class="title">
                <strong>키오스크,  장비동전 매출 관리자에 실시간 연동</strong>
                <span>키오스크와 장비간의 실시간 연동으로 결제되는 매출을 실시간으로 확일할 수 있습니다</span>
              </dt>
              <dd class="cont">
                <img src="~/assets/image/kiosk32/kiosk_motion01.gif">
              </dd>
            </dl>
          </el-col>
          
          <el-col :md="12">
            <dl class="box box2">
              <dt class="title">
                <strong>세탁/건조 완료 카카오톡 알림 전송 </strong>
                <span>고객에게 세탁 완료 알림으로 방치되는 세탁물을 최소화 합니다.</span>
              </dt>
              <dd class="cont">
                <img src="~/assets/image/kiosk32/kiosk32-03.png">
              </dd>
            </dl>
          </el-col>

          <el-col :md="12">
            <dl class="box box3">
              <dt class="title">
                <strong>재방문을 늘려주는 포인트적립</strong>
                <span>키오스크를 통해 결제한 금액 일부에 대해서<br>
  고객들에게 포인트로 적립해 드릴수있습니다.</span>
              </dt>
              <dd class="cont">
                <img src="~/assets/image/kiosk32/kiosk32-02.png">
              </dd>
            </dl>
          </el-col>

          <el-col :md="12">
            <dl class="box box4">
              <dt class="title">
                <strong>세탁장비에 결제문제가 발생하면, 원격제어로 클레임해결</strong>
                <span>외부에서도 장비에 금액을 투입할 수 있어 고객클레임을 재빠르게 처리할 수 있습니다.</span>
              </dt>
              <dd class="cont">
                <img src="~/assets/image/kiosk32/kiosk32-04.png">
              </dd>
            </dl>
          </el-col>

          <el-col :md="12">
            <dl class="box box5">
              <dt class="title">
                <strong>요일, 시간대별로 다르게 설정 할 수 있는 적립 이벤트 기능</strong>
                <span>매출이 적은 요일, 시간대에 맞춰 이벤트를 진행하여, 이용률을 끌어 올릴 수 있습니다.</span>
              </dt>
              <dd class="cont">
                <img src="~/assets/image/kiosk32/kiosk32-05.png">
              </dd>
            </dl>
          </el-col>

          
         
        </el-row>
      </div>
    </section>

    <section class="sec-2">
      <div class="inner">
        <h2>그 밖의 다양한 기능들</h2>
        <el-row :gutter="40">
          <el-col :md="12">
            <dl>
              <dt>
                <strong>
                  매장을 정상적으로 이용하지 않는 사람들에게 경고방송
                </strong>
                
              </dt>
              <dd>
                <img src="~/assets/image/kiosk32/kiosk32-06.png">
              </dd>
            </dl>
          </el-col>
          <el-col :md="12">
            <dl>
              <dt>
                <strong>
                  페이오티 키오스크를 이용하고 있는 매장들과의 매출비교
                </strong>
                
              </dt>
              <dd>
                <img src="~/assets/image/kiosk32/kiosk32-07.png" >
              </dd>
            </dl>
          </el-col>
          <el-col :md="12">
            <dl>
              <dt>
                <strong>가입된 회원들에게 마케팅 문자를 발송 할 수 있습니다.</strong>
              </dt>
            </dl>
          </el-col>         
          <el-col :md="12">
            <dl>
              <dt>
                <strong>세탁중인 장비 현황을 확인할 수 있는 홈페이지 별도제공  </strong>
              </dt>
            </dl>
          </el-col>
          
        </el-row>
      </div>
    </section>

    <section class="spec" cellspacing="0" cellpadding="0">
      <div class="inner">
        <h2>스펙 및 구성</h2>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>키오스크32 (일반형)</th>
              <th>키오스크24 (스탠드형)</th>
              <th>키오스크10 (태블릿형)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>화면</td>
              <td>32인치 정전식 모니터</td>
              <td>24인치 정전식 모니터</td>
              <td>10.1인치 LCD</td>
            </tr>
            <tr>
              <td>사이즈(mm)</td>
              <td>W 518 x H 1074 x D 172</td>
              <td>-</td>
              <td>W 280 x H 165</td>
            </tr>
            <tr>
              <td>운영체제</td>
              <td colspan="2">윈도우10</td>
              <td>안드로이드11</td>
            </tr>
            <tr>
              <td>CPU</td>
              <td colspan="2">인텔/셀로론 - J3160 or 4500C or N5105</td>
              <td>쿼드코어 APU</td>
            </tr>
            <tr>
              <td>메모리</td>
              <td colspan="2">8GB</td>
              <td>4GB</td>
            </tr>
            <tr>
              <td>무선통신</td>
              <td colspan="3">와이파이, 블루투스</td>
            </tr>
            <tr>
              <td>결제방식</td>
              <td colspan="2">현금/카드/간편결제</td>
              <td>카드/간편결제(삼성페이,네이버페이,카카오페이)</td>
            </tr>
            <tr>
              <td>설치방법</td>
              <td>매립설치</td>
              <td>스탠드</td>
              <td>벽면 부착 설치</td>
            </tr>
            <tr>
              <td>설치조건(공통)</td>
              <td colspan="3">설치 위치 근처 220V 전원 콘센트 필요</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section>
      <div class="inner">
        <h2>설치 주의사항</h2>
      </div>
    </section>

 
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.kiosk32{
  padding-bottom:150px;

  .visual{
    position: relative;
    padding:200px 0;
    .inner{
      display:flex;
      justify-content: center;
    }
    .title{
      display:flex;
      flex-direction: column;
      align-items: center;
      text-align:center;
      top:50%;
      color:#292929;

      span{
        display:block;
        font-size:24px;
      }
      h2{
        font-size:90px;
        font-weight:800;
        line-height:1;
        margin:10px 0 20px 0;
      }
      p{
        font-size:20px;
        color:#797979;
      }
      button{
        height:50px;
        width:200px;
        background:#0066ff;
        border:0;
        border-radius:25px;
        color:#fff;
        font-size:18px;
        margin-top:50px;
      }
    }
  }
}




section{
  margin-bottom:140px;

  h2{
    font-size:2.5rem;
    margin-bottom:40px;
  }
}

.options{
  dl{
    border-radius:20px;
    background:#f5f5f7;
    padding:40px;
    dt{
      margin-bottom:30px;
      span,strong{
        display:block;
      }
      strong{
        font-size:24px;
        font-weight:600;
      }
      span{
        font-size:18px;
        color:#797979;
        margin-top:10px;
      }
    }
    dd{
      img{
        width:100%;
      }
    }
  }
}
.sec-0{
  .image{
    padding:40px;
    background:#f5f5f7;
    border-radius:20px;
    
    img{
      width:80%;
    }
  }
}

.sec-1{
  .el-col{
    margin-bottom:40px;
  }

  .box1{
    background:#f5f5f7;

    padding-bottom:0px;
    border-radius:20px;

    .title{
      max-width:420px;
      strong,span{
        display:block;
      }
      strong{
        font-size:2.25rem;
        font-weight:700;
        color:#292929;
      }
      span{
        font-size:1.25rem;
        color:#797979;
        margin-top:15px;
      }
    }

    .cont{
      display:flex;
      justify-content: center;
      img{
        width:90%;
      }
    }
  }
  

  .box{
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    height:100%;
    background:#f5f5f7;
    padding:50px;
    padding-bottom:0px;
    border-radius:20px;

    dt{
      max-width:400px;
      margin-bottom:50px;
      strong,span{
        display:block;
      }
      strong{
        font-size:1.75rem;
        font-weight:600;
      }
      span{
        font-size:1.13rem;
        margin-top:15px;
      }
    }
    .cont{
      display:flex;
      justify-content: center;
      img{
        width:100%;
      }
    }
  }

  .box2{
    background: rgb(245,197,0);
    background: linear-gradient(0deg, rgba(245,197,0,1) 0%, rgba(245,224,0,1) 100%);
    dt{
      span{color:#494949;}
    }
  }
  .box5{
    background: rgb(0,102,255);
background: linear-gradient(156deg, rgba(0,102,255,1) 0%, rgba(68,0,255,1) 100%);
    dt{
      strong{
        color:#fff;
      }
      span{
        color:#fff;
      }
    }
  }
}

.sec-2{
  .el-col{
    margin-bottom:40px;
  }
  dl{
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    background:#f2f2f2;
    margin-bottom:40px;
    border-radius:20px;
    padding-bottom:0px;
    height:100%;

    dt{
      padding:40px;
      max-width:420px;

      strong{
        font-size:1.75rem;
        font-weight:600;
      }
      span{
        font-size:1.13rem;
        margin-top:15px;
      }
    }
    dd{
      img{
        width:100%;
      }
    }
  }
}

.spec{
  table{
    border-top:1px solid #e2e2e2;
    width:100%;
    table-layout: fixed;

    td,th{
      border-bottom:1px solid #e2e2e2;
      border-right:1px solid #e2e2e2;
      vertical-align: middle;
      padding:15px;
    }
    th{background:#f5f5f7;}
    th:last-child, td:last-child{
      border-right:0;
    }
    td:first-child{
      font-weight:600;
    }
  }
}



@media screen and (max-width:991px){
.options{
  .el-col{
    margin-bottom:40px;
  }
  dl{
    padding:20px;
    
  }
}
.sec-1{
  .box1{
    padding:30px;
    padding-bottom:0;
    .title{
      strong,span{
        display:block;
      }
      strong{
        font-size:1.75rem;
        font-weight:600;
      }
      span{
        font-size:1.13rem;
        margin-top:15px;
      }
    }
    .cont{
      margin-top:50px;
      img{
        width:100%;
      }
    }
  }
  .box{
    padding:30px;
    padding-bottom:0;
  }
}
}

</style>