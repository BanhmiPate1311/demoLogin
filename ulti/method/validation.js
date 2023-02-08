let form1 = document.querySelector("#loginForm ");
let form = document.querySelector("#signUpForm ");
console.log("form: ", form);

form1.addEventListener("input", function (e) {
  switch (e.target.id) {
    case "loginpassword":
      checkPassword1();
      break;

    case "loginuserName":
      checkName1();
      break;
  }
});

form.addEventListener("input", function (e) {
  switch (e.target.id) {
    case "password":
      checkPassword();
      break;
    case "confirmPassword":
      checkPassWordConFirm();
      break;
    case "userName":
      checkName();
      break;
  }
});

function checkPassword1() {
  let value = document.querySelector("#loginpassword").value;
  let valid = true;
  valid &= kiemTraRong(value, "#tbloginPassWord", "Mật khẩu");
  return valid;
}

function checkPassword() {
  let value = document.querySelector("#password").value;
  let valid = true;
  valid &= kiemTraRong(value, "#tbPassWord", "Mật khẩu");
  return valid;
}

function checkPassWordConFirm() {
  let value1 = document.querySelector("#password").value;
  let value2 = document.querySelector("#confirmPassword").value;
  let valid = true;
  valid =
    kiemTraRong(value2, "#tbconfirmPassword", "Mật khẩu") &
    kiemtraPassWordConFirm(value1, value2, "#tbconfirmPassword", "Mật khẩu");
  return valid;
}

function checkName1() {
  let value = document.querySelector("#loginuserName").value;
  let valid = true;
  valid = kiemTraRong(value, "#tbloginUserName", "UserName");
  return valid;
}

function checkName() {
  let value = document.querySelector("#userName").value;
  let valid = true;
  valid = kiemTraRong(value, "#tbUserName", "UserName");
  return valid;
}
