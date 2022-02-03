var itemCount = 0;

//make list item
function newListItem() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("addTask").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Please enter an item."); //replace with GUI later
    } else {
        document.getElementById("fList").appendChild(li);
        this.itemCount = itemCount + 1;
    }
    document.getElementById("addTask").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < closeButton.length; i++) {
        closeButton[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
            itemCount = itemCount -1;
            document.getElementById("counter").innerHTML = itemCount;
        }
        document.getElementById("counter").innerHTML = itemCount;
    }
}

//make new list item close
var closeButton = document.getElementsByClassName("close");
var i;
for (i = 0; i < closeButton.length; i++) {
    closeButton[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

//checked off
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);






/*

this.itemCount = itemCount - 1;



function addT() {
    
}

function all() {
    
}

function active() {
    
}

function completed() {
    
}*/
