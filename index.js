function luuLocalStorage(userlogin) {
  var userInfo = JSON.stringify(userlogin);
  localStorage.setItem("userInfo", userInfo);
}

let redirect_Page = () => {
  let tID = setTimeout(function () {
    window.location.href = "./page.html";
    window.clearTimeout(tID); // clear time out.
  }, 3000);
};

const inputs = document.querySelectorAll(
  "#loginForm input#loginuserName,#loginForm input#loginpassword"
);

const signUpinputs = document.querySelectorAll(
  "#signUpForm input#userName,#signUpForm input#password,#signUpForm input#confirmPassword"
);

const getFormValues1 = () => {
  let user = {};
  inputs.forEach((val) => {
    const { name, value } = val;
    user[name] = value;
  });

  return user;
};

const getFormValues2 = () => {
  let user = {};
  signUpinputs.forEach((val) => {
    const { name, value } = val;
    user[name] = value;
  });

  return user;
};

document.querySelector("#signIn").onclick = () => {
  const user = getFormValues1();
  console.log("user: ", user);
  const data = {
    userName: user.loginuserName,
    password: user.loginpassword,
  };
  console.log("data: ", data);

  let valid = true;
  valid &= checkPassword1() & checkName1();

  if (!valid) {
    return;
  }

  var promise = axios({
    url: "https://demodeploy-production-ea6f.up.railway.app/api/v1/login",
    method: "POST",
    responseType: "json",
    data: data, //Dữ liệu gửi đi
  });
  promise.then(function (result) {
    swal(
      "Đăng nhập thành công!",
      "Bạn sẽ được chuyển về trang chủ trong vòng 3s!",
      "success"
    );
    luuLocalStorage(data);
    console.log(result.data);
    // Redirect();
    setTimeout(window.location.assign("./page.html"), 3000);
  });

  promise.catch(function (error) {
    console.log(error);
    swal("Đăng nhập không thành công!", "Username hoặc password không đúng!");
  });
};

document.querySelector("#signUp").onclick = () => {
  const user = getFormValues2();
  console.log("user: ", user);
  let valid = true;
  valid &= checkPassword() & checkName();

  if (!valid) {
    return;
  }

  var promise = axios({
    url: "https://demodeploy-production-ea6f.up.railway.app/api/v1/users",
    method: "POST",
    responseType: "json",
    data: user, //Dữ liệu gửi đi
  });
  promise.then(function (result) {
    swal(
      "Đăng ký thành công!",
      "Bạn sẽ được chuyển về trang chủ trong vòng 3s!",
      "success"
    );
    console.log(result.data);
    luuLocalStorage();
    // Redirect();
    setTimeout(window.location.assign("./page.html"), 3000);
  });

  promise.catch(function (error) {
    console.log(error);
    swal("Đăng ký không thành công!", "User Name đã được sử dụng!");
  });
};
