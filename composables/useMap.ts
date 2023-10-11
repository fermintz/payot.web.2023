declare var kakao: any;

export default function (el: Ref<HTMLElement | undefined>) {
  const map = ref<any>();
  const { load, unload } = useScriptTag(
    "http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=8180df1c5b5b6f3d47b1b60dfe933654&libraries=services",
    () => {
      kakao.maps.load(() => {
        map.value = kakao;
      });
    }
  );

  const center = ref<number[]>([33.450701, 126.570667]);
  const options = ref<any>();

  onMounted(load);
  onBeforeUnmount(unload);

  watchOnce(map, () => {
    if (!kakao) return;
    const [x, y] = center.value;
    options.value = {
      center: new kakao.maps.LatLng(x, y),
      level: 12,
    };
    map.value = new kakao.maps.Map(el.value, options.value);
  });

  // watch(points, pins => {
  //   for (const pin of pins) {
  //     const [x,y ] = pin.point;
  //     const overlay = new kakao.maps.CustomOverlay({
  //       position: new kakao.maps.LatLng(x, y),
  //       content: 'test',
  //     })
  //     overlay.setMap(map.value);
  //   }
  // })

  return { map };
}
