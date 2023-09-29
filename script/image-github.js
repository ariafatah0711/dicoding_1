// ngambil api github
function loadContent() {
  var xhr = new XMLHttpRequest();
  var url = "https://api.github.com/users/" + username;
  // console.log(url);

  xhr.onloadstart = function () {
    //
  };

  xhr.onerror = function () {
    // alert("gagal mengambil data");
  };

  xhr.onloadend = function () {
    if (this.status === 404) {
      console.log("username tidak ditemukan");
      loginDisplay.src = "./asset/image/poto_profil.png";
    } else if (this.responText !== "") {
      // mengubah data string menjadi object
      var data = JSON.parse(this.responseText);

      // login
      loginDisplay.src = data.avatar_url;

      // console.log(data); //berisi object data
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}
