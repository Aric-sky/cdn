function addWaterMarker(str) {
  var can = document.createElement("canvas");
  var body = document.body;
  body.appendChild(can);
  can.width = 400; //鐢诲竷鐨勫
  can.height = 200; //鐢诲竷鐨勯珮搴�
  can.style.display = "none";
  var cans = can.getContext("2d");
  cans.rotate((-20 * Math.PI) / 180); //鐢诲竷閲岄潰鏂囧瓧鐨勬棆杞搴�
  cans.font = "16px Microsoft JhengHei"; //鐢诲竷閲岄潰鏂囧瓧鐨勫瓧浣�
  cans.fillStyle = "rgba(37, 37, 37, 0.1)"; //鐢诲竷閲岄潰鏂囧瓧鐨勯鑹�
  cans.textAlign = "left"; //鐢诲竷閲岄潰鏂囧瓧鐨勬按骞充綅缃�
  cans.textBaseline = "Middle"; //鐢诲竷閲岄潰鏂囧瓧鐨勫瀭鐩翠綅缃�
  cans.fillText(str, can.width / 3, can.height / 2); //鐢诲竷閲岄潰鏂囧瓧鐨勯棿璺濇瘮渚�
  body.style.backgroundImage = "url(" + can.toDataURL("image/png") + ")"; //鎶婄敾甯冩彃鍏ュ埌body涓�
}
addWaterMarker(location.host);