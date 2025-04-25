document.addEventListener("DOMContentLoaded", function() {
  const submitButton = document.querySelector(".submit-button");
  const clueInput   = document.querySelector(".clue-input");

  submitButton.addEventListener("click", function(e) {
    e.preventDefault();
    const userInput = clueInput ? clueInput.value.trim() : "";

    if (document.title === "Where It All Started") {
      if (userInput === "2") {
        window.location.href = "clue2.html";
      } else {
        alert("Incorrect clue. Try again.");
      }

    } else if (document.title === "Latitude & Longitude") {
      if (userInput === "1") {
        window.location.href = "clue3.html";
      } else {
        alert("Incorrect clue. Try again.");
      }

    } else if (document.title === "We're Going To...") {
      window.location.href = "clue4.html";

    } else if (document.title === "complete the wordle!") {
      if (userInput === "2") {
        window.location.href = "clue5.html";
      } else {
        alert("Incorrect clue. Try again.");
      }

    } else if (document.title === "Let's See Some Whales 😎") {
      // Proceed from clue5.html to clue6.html
      window.location.href = "clue6.html";

    } else if (document.title === "Final Destination") {
      // On clue6.html: if the user enters "4", go to the Google Maps link
      if (userInput === "4") {
        window.location.href = "https://maps.app.goo.gl/zuFyqJDy7rC25p9aA";
      } else {
        alert("Incorrect clue. Try again.");
      }
    }
  });
});
