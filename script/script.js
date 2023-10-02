profilImage = document.getElementById(`profil-image`);
const forms = document.querySelectorAll(`form`);
const myLoc = window.location;

// ===== RELOAD =====
const Page = {
  // scroll smoth to hash
  scrollToElement: function (hash) {
    const targetElement = document.querySelector(hash);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: `smooth` });
    }
  },
  // reload => mereset value saat di reload
  clearInput: function () {
    let input = document.querySelectorAll(`input`);
    for (let inputs of input) {
      inputs.value = "";
    }
  },
};

function reloadPage() {
  // return;
  // scroll to #home => biar rapi aja sih
  if (
    myLoc.hash.endsWith(`#about`) ||
    myLoc.hash.endsWith(`#learn`) ||
    myLoc.hash.endsWith(`#comunity`)
  ) {
    Page.scrollToElement(myLoc.hash);
  } else if (
    myLoc.hash.endsWith(`#learn_1`) ||
    myLoc.hash.endsWith(`#learn_2`) ||
    myLoc.hash.endsWith(`#learn_3`)
  ) {
    Page.scrollToElement("#learn");
  } else if (myLoc.hash.endsWith(`#home`)) {
    Page.scrollToElement("#home");
  } else if (myLoc.pathname.endsWith(`/index.html`)) {
    myLoc.hash = "#home";
    Page.scrollToElement("#home");
  } else {
    Page.scrollToElement("#home");
  }

  // reset input
  Page.clearInput();
}
window.onload = reloadPage();

// ===== MORE =====
// formSubmit => biar gak reload saat mengirim/submit
for (const form of forms) {
  form.addEventListener(`submit`, (event) => {
    event.preventDefault();
  });
}

// profilImage => href to #login
profilImage.onclick = () => (location.href = `#login`);

// dragFalse => membuat semua elemen agar tidak bisa di drag
document.body.addEventListener(`dragstart`, function (event) {
  event.preventDefault();
});
