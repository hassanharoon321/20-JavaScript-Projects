// Sign up page start

const signUp = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const formData = {
        name: name,
        email: email,
        password: password
    }

    localStorage.setItem("formData", JSON.stringify(formData));
    console.log(localStorage.getItem("formData"));
}

const SignUp = () => {
    window.location.assign("./dashBoard.html")
}

const signIn = () => {
    window.location.assign("./login.html")
}

// Login page start

const Login = (e) => {
    e.preventDefault();
    window.location.assign("./dashBoard.html")
}

// Dashboard page start

const logout = () => {
    window.location.assign("./login.html")
}

const redirectToAddExpense = () => {
    window.location.assign("./addExpenseButton.html")
}

//Add Expense Button Page start

const backToDashBoard = () => {
    window.location.assign("./dashBoard.html")
}

