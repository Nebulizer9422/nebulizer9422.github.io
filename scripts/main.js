const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "assets/images/cybernaut.png") {
    myImage.setAttribute("src", "assets/images/console-cowboy.png");
  } else {
    myImage.setAttribute("src", "assets/images/cybernaut.png");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Cyberspace is cool! Welcome, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Cyberspace is cool! Welcome, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});
