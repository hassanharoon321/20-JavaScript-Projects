var income = document.getElementById("income")
var id = 0;
const addIncome = () => {
  var currentBalance = document.getElementById("currentBalance");
  currentBalance.innerHTML += income.value;
}
const addExpense = () => {
  var expenses = [];
  var kharcha = [];
  id = ++id;
  var amountInput = document.getElementById("amountInput").value;
  var amountDate = document.getElementById("amountDate").value;
  var amountOption = document.getElementById("amountOption").value;
  var allElement = document.getElementById("allElement");

  //something weird here dont cross border (start)

  var expenseObj = {
    id: id,
    expense: amountInput,
    date: amountDate,
    categories: amountOption
  }

  expenses.push(expenseObj);

  var totalIncome = parseInt(income.value);  //paisa

  expenses.forEach((obj) => {
    var totalExpense = parseInt(obj.expense); //kharcha
    kharcha.push(totalExpense);
    console.log(kharcha);
    var hello = 0;
    for (var i = 0; i <= kharcha.length; i++) {
      hello += kharcha[i];
      console.log(hello)
    }
  })

  //something weird here dont cross border (end)

  //create tr (Single)
  var tr = document.createElement("tr");
  allElement.appendChild(tr)

  //Craete td for date (1st Child)
  var tdDate = document.createElement("td");
  var tdDateText = document.createTextNode(amountDate);
  tdDate.appendChild(tdDateText);
  allElement.appendChild(tdDate);

  //Craete td for Category (2st Child)
  var tdCategory = document.createElement("td");
  var tdCategoryText = document.createTextNode(amountOption);
  tdCategory.appendChild(tdCategoryText);
  allElement.appendChild(tdCategory);

  //Craete td for Amount (3st Child)
  var tdAmount = document.createElement("td");
  var tdAmountText = document.createTextNode(amountInput);
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
