var currentBalance = document.getElementById("currentBalance");
var expenses = [];
var newTotal;

const addIncome = () => {
    var income = document.getElementById("income").value;
    newTotal = income;
    income == "" ? alert("Please enter some amount") : null;
    currentBalance.innerHTML += income;

    income = "";
}


const addExpense = () => {
    var expense = document.getElementById("amountInput").value;
    var amountDate = document.getElementById("amountDate").value;
    var amountOption = document.getElementById("amountOption").value;

    expenses.push(expense);

    var newArr = parseInt(expenses);

    var totalExpenses = expenses.reduce(function (a,newArr) {
        return a + newArr;
    });
    
    console.log(typeof totalExpenses)
    
    
    const total = parseInt(newTotal);

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