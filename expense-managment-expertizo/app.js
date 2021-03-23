// Sign up page start
const signUp = (e) => {

    function SignUp() {
        window.location.assign("./dashBoard.html")
    }

    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!name || !email || !password) {
        return alert('Please enter all the fields')
    } else {
        SignUp();
    }

    const formData = {
        name: name,
        email: email,
        password: password
    }

    localStorage.setItem("formData", JSON.stringify(formData));

}

const signIn = () => {
    window.location.assign("./login.html");
}

// Login page start

const Login = (e) => {
    e.preventDefault();

    function redirectToDashboardUser() {
        window.location.assign("./dashBoard.html")
    }

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    let users = localStorage.getItem('formData');
    users = JSON.parse(users);

    let userEmail = users.email;
    let userPassword = users.password;

    if (!email || !password) {
        alert("Please Fill Required Fields First")
    } else if (email === userEmail && password === userPassword) {
        redirectToDashboardUser()
    } else {
        alert("email and password is incorrect")
    }

}



// Dashboard page start

const logout = () => {
    window.location.assign("./login.html")
}

const welcomeUser = document.getElementById("welcomeUser");

let users = localStorage.getItem('formData');
users = JSON.parse(users);

let username = users.name;

welcomeUser.innerHTML = `Welcome ${username}`;

const redirectToAddExpense = () => {
    window.location.assign("./addExpenseButton.html")
}

//Add Expense Button Page start

const backToDashBoard = () => {
    window.location.assign("./dashBoard.html")
}


//All Categories Button Page start
function redirectToAllCategories() {
    window.location.assign("./allCategories.html")
}

function addCategories() {
    window.location.assign("./addCategoriesInside.html")
}

let cate = localStorage.getItem('cate');
    cate = JSON.parse(cate);
    
    const newMap = cate.map((item) => {

        const tBody = document.getElementById("tBodyTable");

        const tr = document.createElement("tr");

        const thId = document.createElement("th");
        const thIdText = document.createTextNode(item.id);
        thId.appendChild(thIdText)
        tr.appendChild(thId)

        const thCategory = document.createElement("th");
        const thCategoryText = document.createTextNode(item.category);
        thCategory.appendChild(thCategoryText);
        tr.appendChild(thCategory)

        const thDate = document.createElement("th");
        const thDateText = document.createTextNode(item.createdOn);
        thDate.appendChild(thDateText);
        tr.appendChild(thDate);

        tBody.appendChild(tr);
    })




//Add Categories Inside all categories page start

function backToCategoriesAll() {
    window.location.assign("./allCategories.html")
}

function addCategoriesItem() {

    const categoryItem = document.getElementById("categoryItem").value;

    const addCategory = {
        id: Math.floor(Math.random() * 3),
        category: categoryItem,
        createdOn: "some time"
    }

    // localStorage.setItem("addCategory", JSON.stringify(addCategory));
    let item = JSON.parse(localStorage.getItem("cate")) || [];
    item.push(addCategory);
    localStorage.setItem("cate", JSON.stringify(item));

    alert("category added")

}






















