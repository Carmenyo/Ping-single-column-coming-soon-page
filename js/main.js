"use strict";
// DECLARACION DE CONSTANTES
const email = document.getElementById("emailInput");
const error = document.getElementById("errorText");
const submitButton = document.getElementById("button");
const success = document.getElementById("successText");

// FUNCION DEL BOTON

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  // FUNCION DE COMPROBACIÖN
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (email.value.match(re)) {
    errorText.style.display = "none";
    successText.style.display = "block";
    // PONER EL VALOR A 0
    email.value = " ";

    email.classList.remove("error");
  } else {
    errorText.style.display = "block";
    email.classList.add("error");
    // CAMBIAR EL VALOR DE INPUT
    email.value = "example@email.com";
  }
});
