// let menuBtn = document.getElementById(`menu-btn`);
// let menuBtn = document.querySelector(`#menu-btn`);
let navbar = document.querySelector(`.navbar`);
let navbarA = document.querySelectorAll(`.navbar a`);

let aAll = document.querySelectorAll(`a`);
let aIndex6 = [];
for (let i = 7; i < aAll.length; i++) {
  aIndex6.push(aAll[i]);
}

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

// ===== mobile =====
function cnv() {
  let navbar = document.querySelector(`.navbar`);
  navbar.classList.remove(`active`);
}

// ===== desktop =====

// menuBtn => show navbar saat icon di click
// menuBtn.onclick = () => navbar.classList.toggle(`active`);

// scroll => saat di scroll akan meremove class active
window.onscroll = () => navbar.classList.remove(`active`);

// click => saat di click akan meremove navbar
for (const a of aAll) {
  if (a.id === "navbar-logout") continue;
  a.onclick = () => navbar.classList.remove(`active`);
}

let learnItem = document.querySelectorAll(`article a`);
// learnItem = document.querySelectorAll(`a`);
for (let i of learnItem) {
  i.addEventListener(`mouseover`, function () {
    let learn_1 = document.querySelector(`#learn_1 h1`);
    let learn_2 = document.querySelector(`#learn_2 h1`);
    let learn_3 = document.querySelector(`#learn_3 h1`);
    learn_1.classList.remove(`active`);
    learn_2.classList.remove(`active`);
    learn_3.classList.remove(`active`);
  });
}
for (let i of aAll) {
  i.addEventListener(`mouseleave`, function () {
    let learn_1 = document.querySelector(`#learn_1 h1`);
    let learn_2 = document.querySelector(`#learn_2 h1`);
    let learn_3 = document.querySelector(`#learn_3 h1`);
    if (myLoc.hash.endsWith(`#learn_1`)) {
      learn_1.classList.add(`active`);
      learn_2.classList.remove(`active`);
      learn_3.classList.remove(`active`);
    } else if (myLoc.hash.endsWith(`#learn_2`)) {
      learn_2.classList.add(`active`);
      learn_3.classList.remove(`active`);
      learn_1.classList.remove(`active`);
    } else if (myLoc.hash.endsWith(`#learn_3`)) {
      learn_3.classList.add(`active`);
      learn_1.classList.remove(`active`);
      learn_2.classList.remove(`active`);
    } else {
      learn_1.classList.remove(`active`);
      learn_2.classList.remove(`active`);
      learn_3.classList.remove(`active`);
    }
  });
}
