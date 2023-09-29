// user
let figUsername = document.getElementById(`fig-username`);
let figBio = document.getElementById(`fig-bio`);

let userImage = document.getElementById(`user-image`);
let userUsername = document.getElementById(`user-username`);
let userBio = document.getElementById(`user-bio`);
let userCompany = document.getElementById(`user-company`);
let userLocation = document.getElementById(`user-location`);

// ngambil api github
let xhr404 = false;
function loadContent() {
  var xhr = new XMLHttpRequest();
  // console.log(url);
  if (!xhr404) {
    var url = "https://api.github.com/users/" + username;
    xhr = true;
  } else {
    xhr = false;
    url = "https://api.github.com/users/ariafatah0711/";
  }

  xhr.onloadstart = function () {
    // alert("")
  };

  xhr.onerror = function () {
    // alert("gagal mengambil data");
  };

  xhr.onloadend = function () {
    if (this.status === 404) {
      console.log("username tidak ditemukan");
      xhr404 = true;
      throw new Error("username tidak ditemukan");
    } else if (this.responText !== "") {
      // mengubah data string menjadi object
      var data = JSON.parse(this.responseText);

      loginDisplay.src = data.avatar_url;
      userImage.src = data.avatar_url;
      figUsername.textContent = data.login;
      figBio.textContent = data.bio;
      userUsername.textContent = data.login;
      userBio.textContent = data.bio;
      userCompany.textContent = data.company;
      userLocation.textContent = data.location;
      console.log(data); // berisi object data
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

function load() {
  try {
    loadContent();
  } catch (error) {
    console.log("mulai lagi");
    loadContent();
  }
}
