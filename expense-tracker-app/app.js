let balance = document.getElementById("income");
let balanceValue; //balance

const addIncome = () => {
  if (balance.value === "") {
    alert("Please Input Some Value")
  } else {
    var currentBalance = document.getElementById("currentBalance");
    balanceValue = parseInt(balance.value)  //balance
    currentBalance.innerHTML = parseInt(balanceValue);
  }
}

const addExpense = () => {
  let expense = document.getElementById("amountInput");
  let date = document.getElementById("amountDate");
  let option = document.getElementById("amountOption");
  let allElement = document.getElementById("allElement");
  let currentBalance = document.getElementById("currentBalance");  //update on dashboard

  if (expense.value === "") {
    alert("please Enter Amount First")
  } else if (date.value === "") {
    alert("please Enter Date First")
  } else if (option.value === "Categories") {
    alert("please Select Option First")
  } else if (balance.value === "") {
    alert("please add balance First")
  } else {
    let expenseValue = parseInt(expense.value);
    let dateValue = date.value;
    let optionValue = option.value;

    currentBalance.innerHTML = balanceValue -= expenseValue  //calculation here

    //create tr (Single)
    var tr = document.createElement("tr");


    //Craete td for Amount (1st Child)
    var tdAmount = document.createElement("td");
    var tdAmountText = document.createTextNode(expenseValue);
    tdAmount.appendChild(tdAmountText);
    tr.appendChild(tdAmount);

    //Craete td for Category (2st Child)
    var tdCategory = document.createElement("td");
    var tdCategoryText = document.createTextNode(optionValue);
    tdCategory.appendChild(tdCategoryText);
    tr.appendChild(tdCategory)

    //Craete td for date (3st Child)
    var tdDate = document.createElement("td");
    var tdDateText = document.createTextNode(dateValue);
    tdDate.appendChild(tdDateText);
    tr.appendChild(tdDate);

    //Craete edit button (4st Child)
    var tdEdit = document.createElement("td")
    var editBtn = document.createElement("button")
    var editBtnText = document.createTextNode("Edit")
    editBtn.appendChild(editBtnText);
    tdEdit.appendChild(editBtn);
    editBtn.setAttribute("onclick", "EditItem(this)")
    tr.appendChild(tdEdit);

    //Craete delete button (4st Child)
    var tdDelete = document.createElement("td")
    var deleteBtn = document.createElement("button")
    var deleteBtnText = document.createTextNode("Delete")
    deleteBtn.appendChild(deleteBtnText);
    deleteBtn.setAttribute("onclick", "deleteItem(this)")
    tdDelete.appendChild(deleteBtn)
    tr.appendChild(tdDelete);

    allElement.appendChild(tr)
  }
}

function deleteItem(e) {
  var currentBalance = document.getElementById("currentBalance");
  e.parentNode.parentNode.remove();
  var newExpense = e.parentNode.parentNode.firstChild.innerText;
  var expense = parseInt(newExpense)

  currentBalance.innerHTML = balanceValue += expense;
}

function EditItem(e) {
  var currentBalance = document.getElementById("currentBalance");
  var newExpense = prompt("Enter New Value");
  var expense = parseInt(newExpense);
  e.parentNode.parentNode.firstChild.innerText = expense;
  console.log(currentBalance);
  currentBalance.innerHTML = balanceValue += expense 
}
























