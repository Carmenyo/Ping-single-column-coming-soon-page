"use strict";

const email = document.getElementById("emailInput");
const error = document.getElementById("errorText");
const submitButton = document.getElementById("button");



submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (email.value.match(re)) {
    errorText.style.display = "none";
    emailInput.classList.remove("error");
   
  } else {
    errorText.style.display = "block";
    emailInput.classList.add("error");
  }
});


