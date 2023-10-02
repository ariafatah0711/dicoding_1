// ===== search =====
function search() {
  let input, filter, ul, li, a, txtValue;
  input = document.getElementById(`search`);
  filter = input.value.toUpperCase();
  ul = document.getElementById(`names`);
  li = ul.getElementsByTagName(`li`);

  for (let i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName(`a`)[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

// ===== addChat =====
function addChat() {
  // foundChat();
  if (alredyLog === true) {
    teksPesan = prompt(`pesan: `);
    if (teksPesan !== false && teksPesan !== "" && teksPesan !== null) {
      let chat = document.getElementById(`names`);
      let addedChat = document.createElement(`div`);
      addedChat.classList.add(`chat`);
      addedChat.innerHTML = `
        <li>
            <img src="${dataUser.avatar_url}" alt="">
            <div>
                <a>${username}</a>
                <p>${teksPesan}</p>
            </div>
            <i class="fa-solid fa-trash fa-2x"></i>
        </li>
        `;
      chat.appendChild(addedChat);
      deleteChat();
    }
  } else {
    alert(`anda belum login`);
  }
}

function foundChat() {
  let chat = document.querySelectorAll(`#names .chat div a`);
  let icon = document.querySelectorAll(`#names .chat i`);

  for (let i = 0; i < chat.length; i++) {
    chat[i].textContent;
    if (chat[i].textContent == username) {
      icon[i].classList.add(`fa-trash`);
    } else {
      icon[i].classList.remove(`fa-trash`);
    }
  }
}
foundChat();

function deleteChat() {
  let chat = document.querySelectorAll(`#names .chat`);
  let icon = document.querySelectorAll(`#names .chat i`);

  for (let i = 0; i < chat.length; i++) {
    icon[i].addEventListener(`click`, function () {
      chat[i].remove();
    });
  }
}
