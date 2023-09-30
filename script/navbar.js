let navbar = document.querySelector(`.navbar`);
let tagAall = document.querySelectorAll(`a`);

// btn => memunculkan navbar saat di klik btn
document.querySelector(`#menu-btn`).onclick = () => {
  navbar.classList.toggle(`active`);
};

// scroll => saat di scroll akan meremove class active
window.onscroll = () => {
  navbar.classList.remove(`active`);
};

for (const tagA of tagAall) {
  tagA.addEventListener(`click`, () => navbar.classList.remove(`active`));
}
