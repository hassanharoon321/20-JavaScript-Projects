let cate3 = localStorage.getItem('cate');
cate3 = JSON.parse(cate3);

let selectCate = document.getElementById("category-in-expense");
cate3.map((item) => {
    let optionTag = document.createElement("option");
    let optionTagText = document.createTextNode(item.category);
    optionTag.setAttribute("value", "" + item.category + "")
    optionTag.appendChild(optionTagText);
    selectCate.appendChild(optionTag);
})

function addExpenseApp() {
    let description = document.getElementById("description").value;
    let amount = document.getElementById("amount").value;
    let selectCate = document.getElementById("category-in-expense").value

    const expenseObj = {
        id : Math.floor(Math.random()*3),
        description : description,
        amount : amount,
        category : selectCate,
        createdOn : "some date"
    }

    let expenseItem = JSON.parse(localStorage.getItem("expenseItem")) || [];
    expenseItem.push(expenseObj);
    localStorage.setItem("expenseItem", JSON.stringify(expenseItem));

    alert("expense added")
}