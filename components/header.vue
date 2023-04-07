<template>
  <header>
    <div class="inner">
      <div class="left">
        <div class="logo">페이오티</div>
        <ul class="gnb">
          <li class="d1-item" v-for="gnb1 in gnb" :key="gnb1.name">
            <a href="#">{{ gnb1.name }}</a>
            <ol class="d2" v-if="gnb1.d2 !== null">
              <li class="d2-item" v-for="gnb2 in gnb1.d2" :key="gnb1.name">
                <a href="#">{{ gnb2.name }}</a>
              </li>
            </ol>
          </li>
        </ul>
      </div>

      <div class="right">
        <div class="btns">
          <button class="map">매장지도</button>
          <button class="admin">무인매장 관리시스템</button>
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
const gnb = ref([
  {
    name: "회사소개",
    routeName: "#",
    d2: null,
  },
  {
    name: "키오스크",
    routeName: "#",
    d2: [
      {
        name: "키오스크32",
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
    d2: null,
  },
  {
    name: "고객지원",
    routeName: "#",
    d2: null,
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
  z-index: 10;
  height:80px;
  top:0px;

  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      display: flex;
      align-items: center;
      gap: 90px;
      .logo {
        font-size: 24px;
        font-weight: bold;
      }
      .gnb {
        display: flex;
        gap: 64px;
        .d1-item {
          position: relative;
          height: 80px;
          display: flex;
          align-items: center;
          > a {
            font-size: 1.13rem;
            font-weight: 500;
          }

          &:hover {
            > a {
              color: #0066ff;
            }

            .d2 {
              display: block;
              animation: menu_animation 0.3s ease;
              @keyframes menu_animation {
                0% {
                  opacity: 0.5;
                }
                100% {
                  opacity: 1;
                }
              }
            }
          }
        }
        .d2 {
          display: none;
          position: absolute;
          min-width: 240px;
          border: 1px solid #e2e2e2;
          border-radius: 0 0 10px 10px;
          left: -20px;
          top: 80px;
          z-index: 1;
          background: #fff;
          overflow: hidden;

          li {
            a {
              height: 50px;
              padding: 0 20px;
              display: flex;
              align-items: center;
              font-size: 16px;

              &:hover {
                background: #f5f5f7;
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
          border:0;
          span{
            font-size:32px;
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
        .gnb {
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
