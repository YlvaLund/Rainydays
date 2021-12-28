//console.log('00')
const form = document.querySelector("#contactForm");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const feedback = document.querySelector("#feedback");

function validateForm(event){
    event.preventDefault();

    let formValidated = true;
    if (validateEmail(email.value) === false){
        feedback.innerHTML = "Please input correct email";
        email.style.border = "4px solid red";
        formValidated = false;
    } else {
        feedback.innerHTML = "";
    }
    
    
    if (message.value.trim().length <= 0){
        formValidated = false;
        message.style.border = "4px solid red";
    }

    if (formValidated){
        // redirect
        window.location = "./contactmessage.html"
        
    }

}

function validateEmail(email){
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

form.addEventListener("submit", validateForm);