var form = document.getElementById("form-control");
var userName = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var password2 = document.getElementById("password2");

function showError(input, message) {
    var formControl = input.parentElement;
    formControl.className = "form error";
    var small = formControl.querySelector("small");
    small.innerText = message;
}

function showSuccess(input) {
    var formControl = input.parentElement;
    formControl.className = "form success";
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(re.test(String(email).toLowerCase()))
    return re.test(String(email).toLowerCase());
}

form.addEventListener("submit", function (e) {
    e.preventDefault()

    if (userName.value === "") {
        showError(userName, "Username is Required")
    } else {
        showSuccess(userName);
    }

    if (email.value === "") {
        showError(email, "Email is Required")
    } else if (!validateEmail(email.value)) {
        showError(email, "Email is not valid")
    } else {
        showSuccess(email);
    }

    if (password.value === "") {
        showError(password, "Password is Required")
    } else {
        showSuccess(password);
    }

    if (password2.value === "") {
        showError(password2, "Password 2 is Required")
    } else {
        showSuccess(password2);
    }
})
