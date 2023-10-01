// let menuBtn = document.getElementById(`menu-btn`);
let menuBtn = document.querySelector(`#menu-btn`);
let navbar = document.querySelector(`.navbar`);
let navbarA = document.querySelectorAll(`.navbar a`);

let aAll = document.querySelectorAll(`a`);
let aIndex6 = [];
for (let i = 5; i < aAll.length; i++) {
  aIndex6.push(aAll[i]);
}

console.log(menuBtn);
// ===== NAVBAR =====
const Button = {
  remove: function () {
    for (const a of navbarA) {
      a.classList.remove(`active`);
    }
  },
};

// effect hover and click navbar a
for (const a of navbarA) {
  a.addEventListener(`mouseover`, () => {
    Button.remove();
  });
  a.addEventListener(`click`, () => {
    Button.remove();
    if (a.getAttribute(`href`) === "#home") {
      a.classList.add(`active`);
    } else if (a.getAttribute(`href`) === "#about") {
      a.classList.add(`active`);
    } else if (a.getAttribute(`href`) === "#learn") {
      a.classList.add(`active`);
    } else if (a.getAttribute(`href`) === "#comunity") {
      a.classList.add(`active`);
    } else if (a.getAttribute(`href`) === "#contact") {
      a.classList.add(`active`);
    } else if (a.getAttribute(`href`) === "#login") {
      a.classList.add(`active`);
    }
  });
}

for (const a of aIndex6) {
  a.addEventListener(`click`, () => {
    Button.remove();
  });
}

function showNavbar() {
  document.getElementById(`menu-btn`).onclick = () => {
    document.querySelector(`.navbar`).classList.toggle(`active`);
  };
  // navbar.classList.toggle(`active`);
}

// ===== mobile =====
function cnv() {
  let navbar = document.querySelector(`.navbar`);
  navbar.classList.remove(`active`);
}

// ===== desktop =====

// menuBtn => show navbar saat icon di click
menuBtn.onclick = () => navbar.classList.toggle(`active`);

// scroll => saat di scroll akan meremove class active
window.onscroll = () => navbar.classList.remove(`active`);

// click => saat di click akan meremove navbar
for (const a of aAll) {
  if (a.id === "navbar-logout") continue;
  a.onclick = () => navbar.classList.remove(`active`);
}
