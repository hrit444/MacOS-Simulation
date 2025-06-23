// document.addEventListener("contextmenu", function (e) {
//   e.preventDefault();
// });

function displayContolOpener() {
  let brightness = document.querySelector("#brightness");
  let displayContainer = document.querySelector(".display-container");
  let displayCount = 0;

  brightness.addEventListener("click", () => {
    if (displayCount) {
      displayContainer.style.display = "block";
      displayCount = 0;
      controlCenter.style.display = "none";
      menuCount = 1;
    } else {
      displayContainer.style.display = "none";
      displayCount = 1;
    }
  });

  let control = document.querySelector("#control");
  let controlCenter = document.querySelector(".control-center");
  let menuCount = 0;
  control.addEventListener("click", () => {
    if (menuCount) {
      controlCenter.style.display = "grid";
      menuCount = 0;
      displayContainer.style.display = "none";
      displayCount = 1;
    } else {
      controlCenter.style.display = "none";
      menuCount = 1;
    }
  });

  document.body.addEventListener("click", (e) => {
    const isInsideControl = control.contains(e.target);
    const isInsideControlCenter = controlCenter.contains(e.target);
    const isInsideBrightness = brightness.contains(e.target);
    const isInsideDisplayContainer = displayContainer.contains(e.target);

    if (
      !isInsideControl &&
      !isInsideControlCenter &&
      !isInsideBrightness &&
      !isInsideDisplayContainer
    ) {
      displayContainer.style.display = "none";
      controlCenter.style.display = "none";
      menuCount = 1;
      displayCount = 1;
      console.log("Closed");
    }
  });
}

displayContolOpener();

function clockDateTime() {
  function time() {
    const dt = new Date();

    let hours = dt.getHours();
    let minutes = dt.getMinutes();

    let hr = 0,
      min = 0,
      mer = 0;

    if (hours > 12) {
      hr = String(hours - 12).padStart("2", "0");
      min = String(minutes).padStart("2", "0");
      mer = "PM";
    } else {
      hr = String(hours).padStart("2", "0");
      min = String(minutes).padStart("2", "0");
      mer = "AM";
    }

    document.querySelector(".time").innerHTML = `${hr}:${min}${mer}`;
  }

  function date() {
    const dt = new Date();

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    let day = days[dt.getDay()];
    let month = months[dt.getMonth()];
    let date = dt.getDate();

    document.querySelector(".date").innerHTML = `${day} ${month} ${date}`;
  }

  setInterval(() => {
    time();
    date();
  }, 1000);
}

clockDateTime();

const wifiIcon = document.querySelector("#wifi-icon");
const wifiStatus = document.querySelector("#wifi-status");
const wifiRound = document.querySelector(".wifi .round");

wifiIcon.addEventListener("click", () => {
  const isOff = wifiIcon.classList.toggle("ri-wifi-off-line"); // returns true if it was added

  // Toggle between icons
  wifiIcon.classList.toggle("ri-wifi-fill", !isOff);

  // Update status and background
  wifiStatus.textContent = isOff ? "Off" : "On";
  wifiRound.style.backgroundColor = isOff ? "#3C3F44" : "#0B84FF";
});

const btIcon = document.querySelector("#bt-icon");
const btStatus = document.querySelector("#bt-status");
const btRound = document.querySelector(".bluetooth .round");

btIcon.addEventListener("click", () => {
  const isOff = btIcon.classList.toggle("ri-bluetooth-connect-line"); // if it adds it back, it's Off
  btIcon.classList.toggle("ri-bluetooth-fill", !isOff); // show "fill" only if On

  btStatus.textContent = isOff ? "Off" : "On";
  btRound.style.backgroundColor = isOff ? "#3C3F44" : "#0B84FF";
});

const adIcon = document.querySelector(".airdrop .pic");
const adStatus = document.querySelector("#ad-status");
let adOff = false;

adIcon.addEventListener("click", () => {
  adOff = !adOff;

  adIcon.style.backgroundColor = adOff ? "#3C3F44" : "#0B84FF";
  adStatus.textContent = adOff ? "Off" : "On";
});

function dockHovering() {
  const hov = document.querySelectorAll(".hov");

  hov.forEach((elem) => {
    const rect = elem.getBoundingClientRect();
    elem.addEventListener("mouseenter", function () {
      elem.style.left = rect.left;
    });

    elem.addEventListener("mouseleave", function () {
      elem.style.left = rect.left;
    });
  });
}
dockHovering();

let finderApp = document.querySelector("#finder-app");
function finderResize() {
  finderApp.style.height = "66%";
  finderApp.style.width = "50%";
  finderApp.style.top = "20%";
  finderApp.style.left = "10%";
  finderApp.style.borderRadius = "1vw";
}
finderApp.style.display = "none";
let close = document.querySelector("#close");
close.addEventListener("click", () => {
  finderApp.style.display = "none";
  // finderSpawn();
});

let resize = document.querySelector("#resize");
isBig = false;
resize.addEventListener("click", () => {
  if (!isBig) {
    finderApp.style.height = "92.5%";
    finderApp.style.width = "100%";
    finderApp.style.top = "0";
    finderApp.style.left = "0";
    finderApp.style.borderRadius = "0";
  } else {
    finderApp.style.height = "66%";
    finderApp.style.width = "50%";
    finderApp.style.top = "20%";
    finderApp.style.left = "10%";
    finderApp.style.borderRadius = "1vw";
  }

  isBig = !isBig;
});

let finder = document.querySelector("#finder");
let finderCount = false
function minimizeFnc(){
  finderApp.style.display = finderCount ? "flex" : "none";
  finderCount = !finderCount;
}
finder.addEventListener("click", () => {
  minimizeFnc()
});
document.querySelector("#minimise").addEventListener("click",()=>{
  minimizeFnc()
})