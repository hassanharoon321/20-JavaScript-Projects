let expenseItem = localStorage.getItem('expenseItem');
expenseItem = JSON.parse(expenseItem);

console.log(expenseItem);

const tBody = document.getElementById("table-expense-body");

expenseItem.map( (item)=>{

    const tr = document.createElement("tr");

const thId = document.createElement("th");
const thIdText = document.createTextNode(item.id);
thId.appendChild(thIdText)
tr.appendChild(thId)

const thDescription = document.createElement("th");
const thDescriptionText = document.createTextNode(item.description);
thDescription.appendChild(thDescriptionText);
tr.appendChild(thDescription)

const thAmount = document.createElement("th");
const thAmountText = document.createTextNode(item.amount);
thAmount.appendChild(thAmountText);
tr.appendChild(thAmount);

const thCategory = document.createElement("th");
const thCategoryText = document.createTextNode(item.category);
thCategory.appendChild(thCategoryText);
tr.appendChild(thCategory);

const thDate = document.createElement("th");
const thDateText = document.createTextNode(item.createdOn);
thDate.appendChild(thDateText);
tr.appendChild(thDate);

const thActions = document.createElement("th");

const editBtn = document.createElement('button');
const editBtnText = document.createTextNode("Edit");
editBtn.setAttribute("class","btn btn-primary")
editBtn.appendChild(editBtnText);

const deleteBtn = document.createElement('button');
const deleteBtnText = document.createTextNode("Delete");
deleteBtn.setAttribute("class","btn btn-danger")
deleteBtn.appendChild(deleteBtnText);

thActions.appendChild(editBtn)
thActions.appendChild(deleteBtn)

tr.appendChild(thActions)


tBody.appendChild(tr);

} )

