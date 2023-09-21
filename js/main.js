"use strict";

const inputEmail = document.querySelector (".js-input");
const submitButton = document.querySelector (".js-button");
const errorMessage = document.querySelector (".js-error");

submitButton.addEventListener ("click", (e) =>{
    e.preventDefault();
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (inputEmail.value.match(re)){
        console.log ("valid")
    }
    else{
        console.log ("error")

    }
});

