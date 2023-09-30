profilImage = document.getElementById(`profil-image`);
const forms = document.querySelectorAll(`form`);

function reloadPage() {
  // location index.html add #home
  if (
    window.location.pathname.endsWith(`/index.html`) ||
    window.location.hash === `` ||
    window.location.hash === `#`
  ) {
    window.Location.hash = `home`;
    console.log("index.html");
  } else {
    console.log("normal");
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
