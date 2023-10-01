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
        </li>
        `;
      chat.appendChild(addedChat);
    }
  } else {
    alert(`anda belum login`);
  }
}
