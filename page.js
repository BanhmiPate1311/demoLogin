window.onload = function () {
  //Browser vừa load lên làm gì thì sẽ code ở đây
  layLocalStorage();
};
function layLocalStorage() {
  if (localStorage.getItem("userInfo")) {
    var user = localStorage.getItem("userInfo");
    userInfo = JSON.parse(user);
    console.log("userInfo: ", userInfo);
    document.querySelector(
      "#thongtin"
    ).innerHTML = `xin chào ${userInfo.userName}`;
  } else {
    swal("Vui lòng đăng nhập!");
    setTimeout(window.location.assign("./index.html"), 3000);
  }
}
