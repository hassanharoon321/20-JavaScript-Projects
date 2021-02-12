const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//Show input error message
function showError(input, message) {
    var formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

//Show success outline
function showSuccess(input) {
    var formControl = input.parentElement;
    formControl.className = "form-control success"
}

//check email is valid
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input);
    }else{
        showError(input,"Email is not valid")
    }
}

//Check the required fields
function checkRequired(inputArr) {
    inputArr.forEach(function (item) {
        if (item.value === "") {
            showError(item, `${getFieldName(item)} is Required`);
        } else {
            showSuccess(item);
        }
    })
}

//check passwods
function checkPassword(pass,pass2){
    if(pass.value!==pass2.value){
        showError(pass1,`Password do not match`)
    }else{
        showSuccess(pass2);
    }
}

//Get Field Name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//check Length
function checkLength(input, min, max){
    if(input.value.length < 3){
        showError(input,`${getFieldName(input)} should be greater than ${min}`);
    }else if(input.value.length > max){
        showError(input,`${getFieldName(input)} should be less than ${max}`);
    }else{
        showSuccess(input)
    }
}

//Event Listeners
form.addEventListener("submit", function (e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);

    checkLength(username, 3 , 15)
    checkLength(password, 6 , 25)
    checkEmail(email);

    checkPassword(password,password2);
})