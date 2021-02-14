var addItems = document.getElementById("addItems");
var unorderList = document.getElementById("unorderList");



function add() {

    item = addItems.value;

    var li = document.createElement("li");  //<li></li>
    var liText = document.createTextNode(item);//<li>fhgfjghdfkjh</li>
    li.appendChild(liText);
    //list.appendChild(li)


    var deleteBtn = document.createElement("button");
    var deleteText = document.createTextNode("X")
    deleteBtn.appendChild(deleteText);
    deleteBtn.setAttribute("onclick", "btnDelete(this)")
    deleteBtn.className = "x-button";

    var hr = document.createElement("hr");
    hr.className = "horizontal-table";

    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("onclick", "checkBox(this)")
    checkbox.className = "box"

    li.appendChild(deleteBtn);
    li.appendChild(checkbox);
    li.appendChild(hr);

    unorderList.appendChild(li);
}

function btnDelete(e) {
    e.parentElement.remove();
}

function checkBox(e) {

    e.parentElement.className = "strike"


}


// var del = document.createElement("s");
// delText = document.createTextNode(e.parentElement.firstChild.nodeValue)
// del.appendChild(delText);

// unorderList.firstChild

// e.parentElement.innerHTML = del;