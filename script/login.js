// header
let navbarLogin = document.getElementById(`navbar-login`);
let profilLogin = document.getElementById(`profil-login`);
let loginDisplay = document.getElementById(`login-display`);
let btnSignUp = document.getElementById(`btn-signup`);

let navbarLogOut = document.getElementById(`navbar-logout`);
navbarLogOut.style.display = "none";

// form
let divLogin = document.querySelector(`.login`);
let divUser = document.querySelector(`.user`);

// login
let alredyLog = false;

// method
const Method = {
  show: function () {
    navbarLogin.textContent = "account";
    btnSignUp.textContent = "account";
    profilLogin.style.display = "none";
    loginDisplay.style.display = "flex";
    navbarLogOut.classList.toggle("of");

    divLogin.style.display = "none";
    divUser.style.display = "flex";
  },
  hide: function () {
    navbarLogin.textContent = "sign in";
    btnSignUp.textContent = "sign up";
    profilLogin.style.display = "flex";
    loginDisplay.style.display = "none";
    navbarLogOut.classList.toggle("of");

    divLogin.style.display = "flex";
    divUser.style.display = "none";
  },
  reset: function () {
    loginDisplay.src = "";
  },
};

// login => untuk simulasi login dan menampilkan logo profil
function login() {
  var username = document.getElementById(`username`).value;
  var password = document.getElementById(`password`).value;
  window.username = username;
  if (alredyLog === false && username !== "" && password !== "") {
    console.log("login");
    profilLogin.style.display = "none";

    load();
    // loadContent();
    Method.show();

    alredyLog = true;
  } else {
    console.log("login error");
  }
}

// log out
function logout() {
  if (alredyLog === true) {
    let exit = confirm(`anda yakin ingin logout?`);

    if (exit) {
      // hide
      Method.hide();
      Method.reset();

      alredyLog = false;
    } else {
      //
    }
  }
}
