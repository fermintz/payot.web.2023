<template>
  <div class="page__map">
    <div class="top_title">
      <div class="inner">
        <h2>매장안내</h2>
        <p>가까운 매장을 확인해 보세요</p>
      </div>
    </div>

    <div class="inner">
      <div class="map_top">
        <div class="left">
          <span>등록된 매장</span>
          <strong>{{points.length}}</strong>
        </div>
        <div class="right">
          <div class="search">
            <input v-model="searchText" type="text" placeholder="지역명으로 검색해주세요" @keydown.enter="search" />
            <button @click="search"><span class="material-icons">search</span></button>
          </div>
        </div>
      </div>

      <div ref="mapElement" class="map" id="map">
        <ServiceArea ref="area" :center="center" :points="points" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Docs from '@/assets/docs/geopoint.json';

const center = ref([37.498004414546934, 127.02770621963765]);
const points = Docs.map(v => {
  return {
    name: v.name,
    address: v.address,
    points: [+v.points[0], +v.points[1]]
  }
})

const area = ref<any>()
const searchText = ref('');
const searchList = ref<{ name: string; address: string; points: number[] }[]>([]);

const search = () => {
  const text = searchText.value;
  if (text.length === 0) return;
  const targets = points.filter(v => v.name.includes(text));
  searchList.value = targets;

  if (!targets[0]) return;
  area.value.search(targets[0])
}



</script>

<style lang="scss" scoped>
.page__map {
  padding-bottom: 150px;
  .top_title {
    height: 240px;
    display: flex;
    align-items: center;
    background: #f5f5f7;
    margin-bottom: 70px;
    h2 {
      font-size: 2.25rem;
      font-weight: 600;
    }
    p {
      font-size: 18px;
      color: #797979;
      margin-top: 5px;
    }
  }

  .map {
    position: relative;
    height: 600px;
    background: #f2f2f2;
    border-radius: 10px;
    margin-top: 25px;
  }

  .search_list{
    position: absolute;
    height:100%;
    left:10px;
    top:10px;
    z-index:2;

    ul{
      background:#fff;
      border-radius:8px;
      padding:15px;

      li{
        border-bottom:1px solid #e2e2e2;
        padding-bottom:15px;
        margin-bottom:15px;
        strong,span{
          display:block;
        }
        span{
          font-size:14px;
          color:#797979;
        }
      }
    }
  }

  .map_top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      display: flex;
      align-items: center;
      span {
        color: #797979;
        margin-right: 10px;
        font-size: 1.13rem;
      }
      strong {
        font-weight: 700;
        font-size: 1.13rem;
      }
    }
    .right {
      .search {
        display: flex;
        align-items: center;
        height: 50px;
        border-radius: 25px;
        overflow: hidden;
        width: 400px;

        border: 1px solid #e2e2e2;
        input {
          border: 0;
          outline: none;
          padding-left: 20px;
          width: 100%;
        }
        button {
          width: 50px;
          height: 50px;
          border-radius: 100%;
          border: 0;
        }
      }
    }
  }
}
</style>
