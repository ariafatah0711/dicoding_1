// data
const navbarLogin = document.getElementById(`navbar-login`);
const profilLogin = document.getElementById(`profil-login`);
const loginDisplay = document.getElementById(`login-display`);
const btnSignUp = document.getElementById(`btn-signup`);

const navbarLogOut = document.getElementById(`navbar-logout`);
navbarLogOut.style.display = "none";

let alredyLog = false;

const Method = {
  show: function () {
    navbarLogin.textContent = "account";
    btnSignUp.textContent = "account";
    profilLogin.style.display = "none";
    loginDisplay.style.display = "flex";
    // navbarLogOut.style.display = "flex";
    navbarLogOut.classList.toggle("of");
  },
  hide: function () {
    navbarLogin.textContent = "sign in";
    btnSignUp.textContent = "sign up";
    profilLogin.style.display = "flex";
    loginDisplay.style.display = "none";
    // navbarLogOut.style.display = "none";
    navbarLogOut.classList.toggle("of");
  },
};

// login => untuk simulasi login dan menampilkan logo profil
function login() {
  if (alredyLog === false) {
    profilLogin.style.display = "none";

    // input
    let username = prompt("Username: ");
    // let password = prompt("Password: ");

    // menampilkan
    Method.show();

    // login = true
    alredyLog = true;
  } else {
    alert("anda telah login!");
  }
}

// login display => href to contact
loginDisplay.onclick = () => {
  location.href = "#contact";
};

// log out
function logout() {
  if (alredyLog === true) {
    let exit = confirm(`anda yakin ingin logout?`);

    if (exit) {
      // hide
      Method.hide();

      // login = false
      alredyLog = false;
    } else {
      //
    }
  }
}

// resize(mengecilkan atau membesarkan layar) => menghapus logo profil
// window.addEventListener(`resize`, () => {
//   navbarLogin.textContent = "sign in";
//   loginDisplay.style.display = "none";
//   profilLogin.style.display = "flex";
// });
