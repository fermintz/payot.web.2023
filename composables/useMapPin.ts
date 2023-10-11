declare var kakao: any;

export default function (map: Ref<any>) {
  const createOverlay = (el: Ref<HTMLElement | undefined>, points: number[]) => {
    if (!map.value) return;
    const [x, y] = points;
    const posision = new kakao.maps.LatLng(x, y);
    const overlay = new kakao.maps.CustomOverlay({
      posision,
      content: el.value,
    });

    overlay.setMap(map.value);
    console.log(map.value, overlay)
  }

  return { createOverlay }
}