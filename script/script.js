profilImage = document.getElementById(`profil-image`);
const forms = document.querySelectorAll(`form`);
const myLoc = window.location;

function reloadPage() {
  // location index.html add #home
  if (myLoc.hash.endsWith(`#home`)) {
    // location.href = "#home";
    // myLoc.hash = "home";
  } else if (myLoc.hash.endsWith(`#about`)) {
    // location.href = "#about";
  } else if (myLoc.hash.endsWith(`#learn`)) {
    // location.href = "#learn"
    // } else if (myLoc.hash.endsWith(`#contact`)) {
    //   // location.href = "#contact"
    // } else if (myLoc.hash.endsWith(`#login`)) {
    //   // location.href = "#login"
  } else if (myLoc.pathname.endsWith(`/index.html`)) {
    location.href = "#home";
  }
}

// formSubmit => biar gak reload saat mengirim/submit
for (const form of forms) {
  form.addEventListener(`submit`, (event) => {
    event.preventDefault();
  });
}

// profilImage => href to #login
profilImage.onclick = () => (location.href = "#login");

// reload => mereset value saat di reload

function clearInput() {
  let input = document.querySelectorAll(`input`);
  for (let inputs of input) {
    inputs.value = "";
  }
}
window.onload = clearInput();
window.onload = reloadPage();
