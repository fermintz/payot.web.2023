<template>
  <header>
    <div class="inner">
      <div class="left">
        <div class="logo" @click="$router.push('/')">페이오티</div>
        <ul class="gnb">
          <li v-for="(items, index) in gnb" :key="index">
            <a @click="$router.push(items.routeName)">{{ items.name }}</a>
            <div class="second" v-show="items.second !== false">
              <span v-for="(second, index) in items.second" :key="index" @click="$router.push(second.routeName)">
                {{second.name}}
              </span>
            </div>
          </li>
        </ul>
      </div>

      <div class="right">
        <div class="btns">
          <button class="map" @click="$router.push('map')">매장지도</button>
          <button class="admin">매장 관리시스템</button>
          <button class="kakao">카카오톡 상담</button>
        </div>
        <div class="mobile_btns">
          <button>
            <span class="material-icons">menu</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import {ref} from 'vue'

const gnb = ref([
  {
    name: "회사소개",
    routeName: "about",
    second: false,
  },
  {
    name: "키오스크",
    routeName: "#",
    second: [
      {
        name: "키오스크 32",
        routeName: "kiosk32",
      },
      {
        name: "키오스크 미니",
        routeName: "kiosk-mini",
      },
    ],
  },
  {
    name: "스마트페이",
    routeName: "#",
    second: false,
  },
  {
    name: "고객지원",
    routeName: "#",
    second: false,
  },
]);
</script>

<style lang="scss" scoped>
header {
  position: sticky;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e2e2e2;
  background: #fff;
  z-index: 99;
  height: 80px;
  top: 0px;

  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow:inherit;

    .left {
      display: flex;
      align-items: center;
      gap: 90px;
      .logo {
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
      }

      ul.gnb{
        display: flex;
        gap: 64px;

        li{
          position: relative;
          &:hover{
            .second{
              display:block;
            }
          }

          a{
            display:block;
            display: flex;
            align-items: center;
            justify-content: center;
            height:80px;
            font-size: 1.13rem;
            font-weight: 500;
            cursor: pointer;

            &:hover{
              color:#0066ff;
            }
          }

          .second{
            display:none;
            padding:10px 0;
            position: absolute;
            width:200px;
            left:-20px;
            top:79px;
            background:#fff;
            border:1px solid #e2e2e2;

            span{
              height:40px;
              padding:0 20px;
              display:flex;
              align-items: center;
              cursor: pointer;

              &:hover{
                background:#f2f2f2;
              }
            }
            
          }
        }
      }
      
    }
    .right {
      .mobile_btns {
        display: none;
        button {
          width: 50px;
          height: 50px;
          border: 0;
          span {
            font-size: 32px;
          }
        }
      }
      .btns {
        display: flex;
        align-items: center;
        gap: 10px;

        button {
          height: 40px;
          &.map {
          }
          &.admin {
            background: #393939;
            color: #fff;
            border: 0;
          }
          &.kakao {
            background: #f5e000;
            border: 0;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1480px) {
  header {
    .inner {
      .left {
        gap: 60px;
        .gnb {
          gap: 40px;
        }
      }
    }
  }
}

@media screen and (max-width: 992px) {
  header {
    .inner {
      .left {
        ul.gnb {
          display: none;
        }
      }
      .right {
        .mobile_btns {
          display: block;
        }
        .btns {
          display: none;
        }
      }
    }
  }
}
</style>
