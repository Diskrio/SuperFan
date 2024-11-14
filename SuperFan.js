// use variables to make your code shorter
var a;
var b;
var c;
var d;

// declare your functions
function likeButton() {
  document.getElementById("bigbutton").src = "images/bluebutton.png";
  document.getElementById("bigbutton").classList.remove("translucent");

  document.getElementById("dislike").classList.add("translucent");
  document.getElementById("my-click").play();
}

function subButton() {
  document.getElementById("subButton").src = "images/nosub.png";
  document.getElementById("subButton").src = "images/sub.png";
  document.getElementById("subButton").classList.remove("translucent");
  document.getElementById("my-click").play();
}

function dislikeButton() {
  document.getElementById("dislike").src = "images/reddisbutton.png";
  document.getElementById("dislike").classList.remove("translucent");

  document.getElementById("bigbutton").classList.add("translucent");
  document.getElementById("my-click").play();
}
function changeVideo() {
  document.getElementById("mainvideo").src =
    "https://www.youtube.com/embed/J6tJy5WQC2U";
  document.getElementById("my-click").play();
}

function markVideo() {
  document.getElementById("mainvideo").src =
    "https://www.youtube.com/embed/XKDciUz-DpE";
  document.getElementById("my-click").play();
}

function avghansVideo() {
  document.getElementById("mainvideo").src =
    "https://www.youtube.com/embed/MeYEkWKiI74";
  document.getElementById("my-click").play();
}

function peloVideo() {
  document.getElementById("mainvideo").src =
    "https://www.youtube.com/embed/AoQfV_PlNrs";
  document.getElementById("my-click").play();
}

function dashVideo() {
  document.getElementById("mainvideo").src =
    "https://www.youtube.com/embed/jIxuy_YrIZE";
  document.getElementById("my-click").play();
}

function patVideo() {
  document.getElementById("mainvideo").src =
    "https://www.youtube.com/embed/rnNW0AcZMfU";
  document.getElementById("my-click").play();
}

//https://www.w3schools.com/jsref/met_audio_play.asp

function playSound() {
  document.getElementById("my-click").play();
}

function resetAll() {
  document.getElementById("mainvideo").src = "";
  document.getElementById("bigbutton").classList.add("translucent");
  document.getElementById("dislike").classList.add("translucent");
  document.getElementById("subButton").classList.add("translucent");
  document.getElementById("my-click").play();
}

//https://www.youtube.com/embed/AoQfV_PlNrs
