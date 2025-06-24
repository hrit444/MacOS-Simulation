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

function finderApplication() {
  let finderApp = document.querySelector("#finder-app");
  let dock = document.querySelector(".dock");

  function finderResize() {
    finderApp.style.height = "66%";
    finderApp.style.width = "50%";
    finderApp.style.top = "20%";
    finderApp.style.left = "10%";
    finderApp.style.borderRadius = "1vw";
    document.querySelector("#finder-app .left").style.width = "23%";
    document.querySelector("#finder-app .right").style.width = "77%";
    document.querySelector("#finder-app .right .search-list").style.display =
      "none";
    document.querySelector("#finder-app .search-icon").style.display = "block";
    document.querySelector("#finder-app .sBorder").style.display = "none";
    // document.querySelector("#finder-app .search-icon").style.display = "block";
    dock.style.display = "flex";
  }

  finderApp.style.display = "none";
  let close = document.querySelector("#close");
  close.addEventListener("click", () => {
    finderApp.style.display = "none";
    finderResize();
  });

  let resize = document.querySelector("#resize");
  isBig = false;
  resize.addEventListener("click", () => {
    if (!isBig) {
      finderApp.style.height = "100%";
      finderApp.style.width = "100%";
      finderApp.style.top = "0";
      finderApp.style.left = "0";
      finderApp.style.borderRadius = "0";
      dock.style.display = "none";
      document.querySelector("#finder-app .left").style.width = "13%";
      document.querySelector("#finder-app .right").style.width = "87%";
      document.querySelector("#finder-app .right .search-list").style.display =
        "block";
      document.querySelector("#finder-app .sBorder").style.display = "flex";
      document.querySelector("#finder-app .search-icon").style.display = "none";
    } else {
      finderResize();
    }

    isBig = !isBig;
  });

  let finder = document.querySelector("#finder");
  let finderCount = false;
  function minimizeFnc() {
    finderApp.style.display = finderCount ? "flex" : "none";
    finderCount = !finderCount;
  }
  finder.addEventListener("click", () => {
    minimizeFnc();
  });
  document.querySelector("#minimise").addEventListener("click", () => {
    minimizeFnc();
  });
}

finderApplication();

function contextMenu() {
  let rClkWindow = document.querySelector(".right-click-window");

  document.body.addEventListener("contextmenu", (e) => {
    e.preventDefault(); // Stop default menu

    const menuWidth = rClkWindow.offsetWidth;
    const menuHeight = rClkWindow.offsetHeight;
    const pageWidth = window.innerWidth;
    const pageHeight = window.innerHeight;

    let x = e.clientX;
    let y = e.clientY;

    if (x + menuWidth > pageWidth) x = pageWidth - menuWidth;
    if (y + menuHeight > pageHeight) y = pageHeight - menuHeight;

    rClkWindow.style.top = `${y}px`;
    rClkWindow.style.left = `${x}px`;

    rClkWindow.style.display = "flex";
  });

  document.body.addEventListener("click", () => {
    rClkWindow.style.display = "none";
  });

  // Prevent menu from closing when clicking inside it
  rClkWindow.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}

contextMenu();


//new folder creation, rename, drag

function newFolder() {
  document
    .querySelector("#new-folder")
    .addEventListener("click", () => createNewFolder());

  let folderCount = 1;

  document.addEventListener("keydown", (e) => {
    if (e.shiftKey && e.key === "N") {
      e.preventDefault();
      createNewFolder();
    }
  });

  function createNewFolder() {
    const folder = document.createElement("div");
    folder.className =
      "folder absolute flex flex-col justify-center items-center h-20 w-16 cursor-grab";
    folder.style.top = `${Math.random() * 70 + 10}vh`;
    folder.style.left = `${Math.random() * 80 + 10}vw`;

    const name = `Untitled folder ${folderCount++}`;

    folder.innerHTML = `
    <img class="w-3/4 h-3/4" src="/folder.png" alt="">
    <input
      type="text"
      class="text-white text-[.8vw] font-medium text-center placeholder:text-[.8vw] outline-none bg-transparent"
      placeholder="${name}"
      value="${name}"
    />
  `;

    document.body.appendChild(folder);

    const input = folder.querySelector("input");

    // Start readonly
    input.setAttribute("readonly", true);

    // Rename on double-click
    input.addEventListener("dblclick", () => {
      input.removeAttribute("readonly");
      input.focus();
      input.select();
    });

    // Finalize rename on Enter
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        input.blur();
        input.setAttribute("readonly", true);
      }
    });

    //Rename on enter
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        input.setAttribute("readonly", true);
        input.blur();
      }
    });

    // Drag & drop functionality
    folder.addEventListener("mousedown", (e) => {
      if (e.target.tagName === "INPUT") return;

      const shiftX = e.clientX - folder.getBoundingClientRect().left;
      const shiftY = e.clientY - folder.getBoundingClientRect().top;

      function onMouseMove(e) {
        folder.style.left = `${e.clientX - shiftX}px`;
        folder.style.top = `${e.clientY - shiftY}px`;
      }

      function onMouseUp() {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      }

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    });
  }
}

newFolder();


function brightnessSeeker() {
  const brightnessSlider = document.querySelector(
    ".control-center .brightness input"
  );
  const brightnessProgressBar = document.querySelector(
    ".control-center .brightness progress"
  );
  const displayBrightnessSlider = document.querySelector(
    ".display-container .brightness input"
  );
  const displayBrightnessProgressBar = document.querySelector(
    ".display-container .brightness progress"
  );

  function syncBrightness(value) {
    // Sync all sliders
    brightnessSlider.value = value;
    displayBrightnessSlider.value = value;

    // Sync all progress bars
    brightnessProgressBar.value = value;
    displayBrightnessProgressBar.value = value;

    // Apply brightness
    const controller = document.querySelector(".brightness-controller");
    if (controller) {
      controller.style.filter = `brightness(${value}%)`;
    }
  }

  // Add event listeners
  brightnessSlider.addEventListener("input", () => {
    syncBrightness(brightnessSlider.value);
  });

  displayBrightnessSlider.addEventListener("input", () => {
    syncBrightness(displayBrightnessSlider.value);
  });
}

brightnessSeeker()

function soundSeeker() {
  const soundSlider = document.querySelector(
    ".control-center .sound input"
  );
  const soundProgressBar = document.querySelector(
    ".control-center .sound progress"
  );
  soundSlider.addEventListener("input", () => {
    soundProgressBar.value = soundSlider.value;
  });
}

soundSeeker()