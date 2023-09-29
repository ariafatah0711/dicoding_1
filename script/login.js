// header
const navbarLogin = document.getElementById(`navbar-login`);
const profilLogin = document.getElementById(`profil-login`);
const loginDisplay = document.getElementById(`login-display`);
const btnSignUp = document.getElementById(`btn-signup`);

const navbarLogOut = document.getElementById(`navbar-logout`);
navbarLogOut.style.display = "none";

// form
// const password = document.getElementById(`password`).value;

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
  },
  hide: function () {
    navbarLogin.textContent = "sign in";
    btnSignUp.textContent = "sign up";
    profilLogin.style.display = "flex";
    loginDisplay.style.display = "none";
    navbarLogOut.classList.toggle("of");
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
    profilLogin.style.display = "none";

    loadContent();
    Method.show();

    alredyLog = true;
  } else if (username === "" || password === "") {
    // console.info("username / password belum lengkap");
  } else {
    // console.info("gagal login")
  }
}

// form-submit
document.getElementById("form").addEventListener("submit", function () {
  event.preventDefault();
  login();
});

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

// login display => href to contact
loginDisplay.onclick = () => {
  location.href = "#contact";
};

// reload
function clearInput() {
  let input = document.querySelectorAll(`input`);
  for (let inputs of input) {
    inputs.value = "";
  }
}

window.onload = clearInput();
