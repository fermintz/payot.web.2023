<script setup lang="ts">
/** kakao객체에 타입오류가 발생한다면 types/index.d.ts 파일 작성 */


const props = defineProps<{
  center: number[],
  points: { name: string, address: string; points: number[] }[],
}>();

const emits = defineEmits<{
  (e: 'markerClick', v: any): void;
}>();

const mapRef = ref();
const overlayRef = ref();
const select = ref<{ name: string; address: string; points: number[] }>();

// 좌표 생성하기
const createPoint = (x: number, y: number) => new kakao.maps.LatLng(x, y);

onMounted(async () => {
  // 카카오맵 로드 완료후 실행
  await new Promise<void>(reslove => kakao.maps.load(() => reslove()));
  // 맵 객체 지정
  const center = createPoint(props.center[0], props.center[1]);
  const map = new kakao.maps.Map(
    document.getElementById('map'),
    { center, level: 8 }
  );

  mapRef.value = map;

  /**
   * 맵에 오버레이 등록
   * @link https://apis.map.kakao.com/web/documentation/#CustomOverlay
   *
   */
  const overlay = new kakao.maps.CustomOverlay({
    content: document.getElementById('overlay'),
    yAnchor: 1,
    zIndex: 3
  });

  overlayRef.value = overlay

  /**
   * 커스텀 마커 이미지 생성
   * @link https://apis.map.kakao.com/web/sample/basicMarkerImage/
   */
  // const customMarkerImageUrl = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png';
  // const markerImage = new kakao.maps.MarkerImage(
  //   customMarkerImageUrl,
  //   new kakao.maps.Size(64, 69),
  // )

  // 마커 그리기
  props.points.forEach(area => {
    const [x, y] = area.points;
    const markerPosition = createPoint(x, y);
    const marker = new kakao.maps.Marker({
      map: map,
      position: markerPosition,
      // image: markerImage,
    });
    // 마커 클릭시 이벤트
    kakao.maps.event.addListener(marker, 'click', () => {
      select.value = area;
      emits('markerClick', area);
      overlay.setPosition(markerPosition);
      overlay.setMap(map);
    })
  });
});

defineExpose({
  search: (param: any) => {
    const [x, y] = param.points;
    select.value = param;
    const point = createPoint(x, y);
    mapRef.value.setCenter(point);
    overlayRef.value.setPosition(point);
    overlayRef.value.setMap(mapRef.value);
  }
})
</script>

<template>
  <div>
    <div id="map" style="width: 100%; height: 100%"></div>
    <div id="overlay">
      <strong>{{ select?.name }}</strong>
      <span>{{ select?.address }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#overlay {
  position: absolute;
  bottom: 50px;
  width: auto;
  padding: 15px;
  background: #fff;
  border-radius: 10px;
  transform: translate(-50%, 0);

  span,
  strong {
    display: block;
  }

  span {
    font-size: 14px;
    color: #797979;
    margin-top: 5px;
  }
}
</style>
