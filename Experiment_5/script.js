let heading = document.getElementById("heading");
let input = document.getElementById("inputText");
let para = document.getElementById("para");
let body = document.body;

let fontSize = 16;
let isVisible = true;

document.getElementById("changeHeading").addEventListener("click", function () {
  if (input.value.trim() !== "") {
    heading.textContent = input.value;
  }
});

document.getElementById("changeBg").addEventListener("click", function () {
  body.style.backgroundColor = "lightblue";
});

document.getElementById("increaseFont").addEventListener("click", function () {
  fontSize += 2;
  para.style.fontSize = fontSize + "px";
});

document.getElementById("togglePara").addEventListener("click", function () {
  if (isVisible) {
    para.style.display = "none";
    isVisible = false;
  } else {
    para.style.display = "block";
    isVisible = true;
  }
});

document.getElementById("reset").addEventListener("click", function () {
  heading.textContent = "Welcome to JavaScript Lab";
  body.style.backgroundColor = "#eee";
  para.style.fontSize = "16px";
  para.style.display = "block";
  input.value = "";
  fontSize = 16;
  isVisible = true;
});
