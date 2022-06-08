const successDiv = document.querySelector(".success");
const form = document.querySelector(".form-container");
const emailInput = document.querySelector(".email");
const countryInput = document.querySelector(".country");
const zipInput = document.querySelector(".zip");
const passwordInput = document.querySelector(".password");
const confirmPasswordInput = document.querySelector(".confirm-password");
const button = document.querySelector("button");


function validateInput (element) {
    if (!element.checkValidity() || element.value.trim() === "") {
        if (element.validity.valueMissing || (element.value.trim() === "") && (!element.classList.contains("password"))) {
            element.setCustomValidity("This is a required field");
            element.reportValidity();
            element.classList.add("invalid");
        } else if (element.validity.typeMismatch) {
            element.setCustomValidity("Enter in proper format \"ABC@XYZ.PQR\" ");
            element.reportValidity();
            element.classList.add("invalid");
        } else if (element.validity.patternMismatch) {
            if (element.classList.contains("password")) {
                element.setCustomValidity("Password must contain a combination of digits, letters and symbols and must be 8 to 12 characters long");
                element.reportValidity();
                element.classList.add("invalid"); 
            } else {
                element.setCustomValidity("Enter Six Digits for Area Pin Code");
                element.reportValidity();
                element.classList.add("invalid"); 
            }
        } else {
            element.setCustomValidity("");
            element.classList.remove("invalid");
        }
    }
    if (element.classList.contains("confirm-password")) {
        if (element.value != passwordInput.value) {
            element.setCustomValidity("Both Passwords must be same!");
            element.reportValidity();
            element.classList.add("invalid");
        } else if (element.validity.valueMissing) {
            element.setCustomValidity("This is a required field");
            element.reportValidity();
            element.classList.add("invalid");
        } else {
            element.setCustomValidity("");
        }
    }
}



emailInput.addEventListener("input", (event) => {
    let element = event.target;
    validateInput(element);
});

countryInput.addEventListener("input", (event) => {
    let element = event.target;
    validateInput(element);
});

zipInput.addEventListener("input", (event) => {
    let element = event.target;
    validateInput(element);
});

passwordInput.addEventListener("input", (event) => {
    let element = event.target;
    validateInput(element);
});

confirmPasswordInput.addEventListener("input", (event) => {
    let element = event.target;
    validateInput(element);
});

button.addEventListener('click', () => {
    let element = confirmPasswordInput;
    if (element.classList.contains("confirm-password")) {
        if (element.value != passwordInput.value) {
            element.setCustomValidity("Both Passwords must be same!");
            element.reportValidity();
            element.classList.add("invalid");
        } else if (element.validity.valueMissing) {
            element.setCustomValidity("This is a required field");
            element.reportValidity();
            element.classList.add("invalid");
        } else {
            element.setCustomValidity("");
        }
    }
    validateInput(passwordInput);
    validateInput(zipInput);
    validateInput(countryInput);
    validateInput(emailInput);

    if (emailInput.checkValidity() 
    && countryInput.checkValidity() 
    && zipInput.checkValidity() 
    && passwordInput.checkValidity() 
    && confirmPasswordInput.checkValidity()) {
        form.classList.add("hidden");
        successDiv.classList.remove("hidden");
    }
});