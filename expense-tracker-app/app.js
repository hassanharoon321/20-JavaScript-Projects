var expenses = [];
var income;
var id = 0;
const addIncome = () => {
    income = document.getElementById("income").value;
    var currentBalance = document.getElementById("currentBalance");
    income == "" ? alert("Please enter some amount") : null;
    currentBalance.innerHTML += income;

}
const addExpense = () => {
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

    expenses.reduce((acc, current) => {
        const x = acc.find(item => item.id === current.id);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, []);

      console.log(filteredArr)

    // expenses.map( (obj)=>{
    //     if(obj.id === obj.id){
    //         console.log("ok")
    //     }
    // } )

    // var totalIncome = parseInt(income);
    // expenses.forEach((obj) => {
    //     var newExpense = obj.expense;
    //     console.log("one ",newExpense)
    //     console.log(totalIncome - newExpense)
    // })


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

// var expense = parseInt(amountInput);
// var amount = parseInt(amountInput);

// var totalAmount = parseInt(emptyArr[0]);

// var currentBalance = totalAmount - amount;
// var orignalValue = currentBalance - amount;

// var current = currentBalance.toString();

// console.log(orignalValue)
// currentBalance = document.getElementById("currentBalance")
// currentBalance.innerHTML = current;