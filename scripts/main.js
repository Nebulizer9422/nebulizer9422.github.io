// Handles the click event on the image element
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  // Get the current source of the image
  const mySrc = myImage.getAttribute("src");
  // Toggle the image source based on its current value
  if (mySrc === "assets/images/cybernaut.png") {
    myImage.setAttribute("src", "assets/images/console-cowboy.png");
  } else {
    myImage.setAttribute("src", "assets/images/cybernaut.png");
  }
});

// Button element to trigger the username prompt.

let myButton = document.querySelector("button");

// Heading element to display a personalized welcome message.

let myHeading = document.querySelector("h1");

/**
 * Prompts the user to enter their name, stores it in localStorage,
 * and updates the heading text with a personalized message.
 * If no name is entered, the function recursively calls itself.
 */
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Cyberspace is cool! Welcome, ${myName}`;
  }
}

// Check if a name is already stored in localStorage
if (!localStorage.getItem("name")) {
  // Prompt for a name if none is stored
  setUserName();
} else {
  // Retrieve the stored name and update the heading
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Cyberspace is cool! Welcome, ${storedName}`;
}

// Add a click event listener to the button to reset the username
myButton.addEventListener("click", () => {
  setUserName();
});
