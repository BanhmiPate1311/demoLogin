function kiemTraRong(value, selectorError, name) {
  //.trim(): Loại bỏ khoảng trống đầu và cuối của chuỗi
  //   abc    => abc
  if (value.trim() !== "") {
    document.querySelector(selectorError).innerHTML = "";
    return true;
  }
  document.querySelector(selectorError).innerHTML =
    name + " không được bỏ trống";
  document.querySelector(selectorError).style.display = "block";
  return false;
}

function kiemtraPassWordConFirm(value1, value2, selectorError, name) {
  if (value1 !== value2) {
    document.querySelector(selectorError).innerHTML = name + " chưa đúng";
    document.querySelector(selectorError).style.display = "block";
    return false;
  }
  document.querySelector(selectorError).innerHTML = "";
  return true;
}
