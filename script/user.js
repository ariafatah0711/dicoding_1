// user
let figUsername = document.getElementById(`fig-username`);
let figBio = document.getElementById(`fig-bio`);

let userImage = document.getElementById(`user-image`);
let userUsername = document.getElementById(`user-username`);
let userBio = document.getElementById(`user-bio`);
let userCompany = document.getElementById(`user-company`);
let userLocation = document.getElementById(`user-location`);

let formUsername = document.getElementById(`form-username`);
let formPassword = document.getElementById(`form-password`);

// defaultContent => kalo username nya tidak ditemukan akan otomatis ke github ariafatah0711
function defaultContent() {
  var xhr = new XMLHttpRequest();
  let url = "https://api.github.com/users/ariafatah0711";
  xhr.onloadend = function () {
    if (this.responText !== "") {
      let data = JSON.parse(this.responseText);
      loginDisplay.src = data.avatar_url;
      userImage.src = data.avatar_url;
      figUsername.textContent = data.login;
      figBio.textContent = data.bio;

      userUsername.textContent = data.login;
      userBio.textContent = data.bio;
      userCompany.textContent = data.company;
      userLocation.textContent = data.location;

      // formUsername.placeholder = username;
      formUsername.placeholder = "ariafatah0711"; // value ariafatah0711
      formPassword.placeholder = password;
      // formUsername.value = username;
      formUsername.value = "ariafatah0711"; // value ariafatah0711
      formPassword.value = password;
      // console.log(data); // berisi object data

      console.info(
        `login dengan ${username} telah gagal karena user tidak ditemukan! \notomatis login ke ariafatah0711`
      );
      Method.show();
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

// loadContent => mengambil api github user
function loadContent() {
  var xhr = new XMLHttpRequest();
  let url = "https://api.github.com/users/" + username;

  xhr.onloadend = function () {
    if (this.status === 404) {
      defaultContent(); // username tidak ditemukan
    } else if (this.responText !== "") {
      // mengubah data string menjadi object
      let data = JSON.parse(this.responseText);
      loginDisplay.src = data.avatar_url;
      userImage.src = data.avatar_url;
      figUsername.textContent = data.login;
      figBio.textContent = data.bio;

      userUsername.textContent = data.login;
      userBio.textContent = data.bio;
      userCompany.textContent = data.company;
      userLocation.textContent = data.location;

      formUsername.placeholder = username;
      formPassword.placeholder = password;
      formUsername.value = username;
      formPassword.value = password;
      // console.log(data); // berisi object data

      console.info(`login dengan ${username} telah berhasil!`);
      Method.show();
    }
  };

  xhr.onerror = function () {
    // terjadi kesalahan
    alert("tidak terhubung ke internet!");
    console.warn("tidak terhubung ke internet!");
  };

  xhr.open("GET", url, true);
  xhr.send();
}
