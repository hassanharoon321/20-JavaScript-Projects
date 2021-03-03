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
    allElement.appendChild(tr)

    //Craete td for date (1st Child)
    var tdDate = document.createElement("td");
    var tdDateText = document.createTextNode(dateValue);
    tdDate.appendChild(tdDateText);
    allElement.appendChild(tdDate);

    //Craete td for Category (2st Child)
    var tdCategory = document.createElement("td");
    var tdCategoryText = document.createTextNode(optionValue);
    tdCategory.appendChild(tdCategoryText);
    allElement.appendChild(tdCategory);

    //Craete td for Amount (3st Child)
    var tdAmount = document.createElement("td");
    var tdAmountText = document.createTextNode(expenseValue);
    tdAmount.appendChild(tdAmountText);
    allElement.appendChild(tdAmount);

    //Craete edit button (4st Child)
    var tdEdit = document.createElement("td")
    var editBtn = document.createElement("button")
    var editBtnText = document.createTextNode("Edit")
    editBtn.appendChild(editBtnText);
    tdEdit.appendChild(editBtn)
    allElement.appendChild(tdEdit)

    //Craete delete button (4st Child)
    var tdDelete = document.createElement("td")
    var deleteBtn = document.createElement("button")
    var deleteBtnText = document.createTextNode("Delete")
    deleteBtn.appendChild(deleteBtnText);
    tdDelete.appendChild(deleteBtn)
    allElement.appendChild(deleteBtn)
  }




}





























// var income = document.getElementById("income")
// var id = 0;
// const addIncome = () => {
//   var currentBalance = document.getElementById("currentBalance");
//   currentBalance.innerHTML += income.value;
// }
// const addExpense = () => {
//   var expenses = [];
//   var kharcha = [];
//   id = ++id;
//   var amountInput = document.getElementById("amountInput").value;
//   var amountDate = document.getElementById("amountDate").value;
//   var amountOption = document.getElementById("amountOption").value;
//   var allElement = document.getElementById("allElement");

//   //something weird here dont cross border (start)

//   var expenseObj = {
//     id: id,
//     expense: amountInput,
//     date: amountDate,
//     categories: amountOption
//   }

//   expenses.push(expenseObj);

//   var totalIncome = parseInt(income.value);  //paisa

//   expenses.forEach((obj) => {
//     var totalExpense = parseInt(obj.expense); //kharcha
//     kharcha.push(totalExpense);
//     console.log(kharcha);
//     var hello = 0;
//     for (var i = 0; i <= kharcha.length; i++) {
//       hello += kharcha[i];
//       console.log(hello)
//     }
//   })

//   //something weird here dont cross border (end)

//   //create tr (Single)
//   var tr = document.createElement("tr");
//   allElement.appendChild(tr)

//   //Craete td for date (1st Child)
//   var tdDate = document.createElement("td");
//   var tdDateText = document.createTextNode(amountDate);
//   tdDate.appendChild(tdDateText);
//   allElement.appendChild(tdDate);

//   //Craete td for Category (2st Child)
//   var tdCategory = document.createElement("td");
//   var tdCategoryText = document.createTextNode(amountOption);
//   tdCategory.appendChild(tdCategoryText);
//   allElement.appendChild(tdCategory);

//   //Craete td for Amount (3st Child)
//   var tdAmount = document.createElement("td");
//   var tdAmountText = document.createTextNode(amountInput);
//   tdAmount.appendChild(tdAmountText);
//   allElement.appendChild(tdAmount);

//   //Craete edit button (4st Child)
//   var tdEdit = document.createElement("td")
//   var editBtn = document.createElement("button")
//   var editBtnText = document.createTextNode("Edit")
//   editBtn.appendChild(editBtnText);
//   tdEdit.appendChild(editBtn)
//   allElement.appendChild(tdEdit)

//   //Craete delete button (4st Child)
//   var tdDelete = document.createElement("td")
//   var deleteBtn = document.createElement("button")
//   var deleteBtnText = document.createTextNode("Delete")
//   deleteBtn.appendChild(deleteBtnText);
//   tdDelete.appendChild(deleteBtn)
//   allElement.appendChild(deleteBtn)



// }
