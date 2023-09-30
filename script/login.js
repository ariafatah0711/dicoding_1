// header
let navbarLogin = document.getElementById(`navbar-login`);
let profilLogin = document.getElementById(`profil-login`);
let profilImage = document.getElementById(`profil-image`);
let btnSignUp = document.getElementById(`btn-signup`);

let navbarLogOut = document.getElementById(`navbar-logout`);
navbarLogOut.style.display = "none";

// form
let divLogin = document.querySelector(`.login`);
let divUser = document.querySelector(`.user`);

let alredyLog = false;

// ===== LOGIN, CHANGE, LOGOUT =====
const Method = {
  show: function () {
    navbarLogin.textContent = "account";
    btnSignUp.textContent = "account";
    profilLogin.style.display = "none";
    profilImage.style.display = "flex";
    navbarLogOut.classList.toggle("of");

    divLogin.style.display = "none";
    divUser.style.display = "flex";

    let user = document.getElementById("username");
    let pass = document.getElementById("password");
    user.value = username;
    pass.value = password;
    formPassword.value = password;
  },
  hide: function () {
    navbarLogin.textContent = "sign in";
    btnSignUp.textContent = "sign up";
    profilLogin.style.display = "flex";
    profilImage.style.display = "none";
    navbarLogOut.classList.toggle("of");

    divLogin.style.display = "flex";
    divUser.style.display = "none";
  },
  log: function () {
    alredyLog = false;
  },
};

// login => untuk simulasi login dan menampilkan logo profil
function login(log = true) {
  if (log) {
    var username = document.getElementById(`username`).value;
    var password = document.getElementById(`password`).value;
    window.username = username;
    window.password = password;
    if (alredyLog === false && username !== "" && password !== "") {
      profilLogin.style.display = "none";

      loadContent();
      alredyLog = true;
    }
  } else if (!log) {
    var username = document.getElementById(`form-username`).value;
    var password = document.getElementById(`form-password`).value;
    window.username = username;
    window.password = password;
    if (alredyLog === true && username !== "" && password !== "") {
      loadContent();
    }
  }
}

// change
function change() {
  login(false);
}

// log out
function logout() {
  if (alredyLog === true) {
    let exit = confirm(`anda yakin ingin logout?`);

    if (exit) {
      console.info(`keluar dengan ${username} telah berhasil!`);
      Method.hide();
      alredyLog = false;
    }
  }
}
navbarLogOut.onclick = () => {
  logout();
};
