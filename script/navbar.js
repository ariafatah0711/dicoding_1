let btnMenu = document.getElementById(`menu-btn`);
let navbar = document.querySelector(`.navbar`);
let navbarA = document.querySelectorAll(`.navbar a`);

let aAll = document.querySelectorAll(`a`);
let a6_9 = [aAll[6], aAll[7], aAll[8], aAll[9]]; // elemen indeks ke 6 ~

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
    } else if (a.getAttribute(`href`) === "#contact") {
      a.classList.add(`active`);
    } else if (a.getAttribute(`href`) === "#contact") {
      a.classList.add(`active`);
    } else if (a.getAttribute(`href`) === "#login") {
      a.classList.add(`active`);
    }
  });
}

for (const a of a6_9) {
  a.addEventListener(`click`, () => {
    Button.remove();
  });
}

// btnMenu => show navbar saat icon di click
btnMenu.onclick = () => navbar.classList.toggle(`active`);

// scroll => saat di scroll akan meremove class active
window.onscroll = () => navbar.classList.remove(`active`);

// click => saat di click akan meremove navbar
for (const a of aAll) {
  a.onclick = () => navbar.classList.remove(`active`);
}
