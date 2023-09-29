loginDisplay = document.getElementById(`login-display`);

// form-submit
document.getElementById("form").addEventListener("submit", function () {
  event.preventDefault();
  login();
});

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
