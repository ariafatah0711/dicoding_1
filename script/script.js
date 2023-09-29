loginDisplay = document.getElementById(`login-display`);

// form-submit
document.getElementById("form-1").addEventListener("submit", function () {
  event.preventDefault();
});

document.getElementById("form-2").addEventListener("submit", function () {
  event.preventDefault();
});

// login display => href to contact
loginDisplay.onclick = () => {
  location.href = "#login";
};

// reload
function clearInput() {
  let input = document.querySelectorAll(`input`);
  for (let inputs of input) {
    inputs.value = "";
  }
}

window.onload = clearInput();
