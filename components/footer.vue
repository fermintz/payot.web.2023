<template>
  <div class="footer">
    <div class="__gnb">
      <a href="#">서비스 이용약관</a>
      <a href="#">개인정보 취급방침</a>
      <a href="#">가맹점안내</a>
      <a href="#">무인매장 관리시스템</a>
    </div>

    <div class="inner">
      <h4>(주)페이오티</h4>

      <div class="info">
        <dl>
          <dt>
            대표
          </dt>
          <dd>차경진</dd>
        </dl>
        <dl>
          <dt>
            사업자등록번호
          </dt>
          <dd>599-81-00659</dd>
        </dl>
        <dl>
          <dt>
            통신판매업 신고번호
          </dt>
          <dd>2021-부산강서구-0877</dd>
        </dl>
        <dl>
          <dt>
            주소지
          </dt>
          <dd>부산광역시 강서구 체육공원</dd>
        </dl>
        <dl>
          <dt>
            TEL
          </dt>
          <dd>070-7807-6857</dd>
        </dl>
        <dl>
          <dt>
            FAX
          </dt>
          <dd>0504-433-6857</dd>
        </dl>
      </div>
      <p>COPYRIGHT (C) PAYOT ALL RIGHTS RESERVED</p>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.footer{
  padding:40px 0 150px 0;
  border-top:1px solid #e2e2e2;

  .__gnb{
    max-width:1440px;
    margin:0 auto;
    display:flex;
    gap:40px;
    margin-bottom:40px;
    
  }

  h4{
    font-weight:600;
    margin-bottom:10px;
  }
  .info{
    display:flex;
    gap:5px;
    dl{
      display:flex;
      align-items: center;
      margin-right:20px;
      dt{
        margin-right:6px;
        font-weight:600;
      }
      dd{
        color:#797979;
      }
    }
  }
  p{
    margin-top:15px;
  }
}

@media screen and (max-width:1480px) {
  .footer{
    padding-top:30px;
    .__gnb{
      gap:10px;
      padding:0 20px;
      overflow-x:scroll;

      &::-webkit-scrollbar{
        display:none;
      }
      a{
        display:flex;
        justify-content: center;
        align-items: center;
        height:40px;
        background:#f2f2f2;
        padding:0 15px;
        flex-shrink: 0;
        border-radius:5px;
      }
    }
    .info{
      flex-wrap:wrap
    }
  }
}
</style>