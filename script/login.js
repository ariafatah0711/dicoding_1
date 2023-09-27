// header
const navbarLogin = document.getElementById(`navbar-login`);
const profilLogin = document.getElementById(`profil-login`);
const loginDisplay = document.getElementById(`login-display`);

// login => untuk simulasi login dan menampilkan logo profil
function login() {
  navbarLogin.textContent = "account";
  profilLogin.style.display = "none";
  loginDisplay.style.display = "flex";
}

// resize(mengecilkan atau membesarkan layar) => menghapus logo profil
window.addEventListener(`resize`, () => {
  navbarLogin.textContent = "sign in";
  loginDisplay.style.display = "none";
  profilLogin.style.display = "flex";
});
