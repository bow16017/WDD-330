var itemCount = 0;
var tC = document.getElementById("completed");
var tA = document.getElementById("active");
function newListItem() {
    var meaning = document.getElementById("addTask");
    var li = document.createElement("object");
    var inputValue = document.getElementById("addTask").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        meaning.setAttribute("placeholder", "Please Enter A Task");
    } else {
        li.setAttribute("name", "d");
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
            itemCount = itemCount - 1;
            document.getElementById("counter").innerHTML = itemCount;
        }
        document.getElementById("counter").innerHTML = itemCount;
    }
    
}
var closeButton = document.getElementsByClassName("close");
var i;
for (i = 0; i < closeButton.length; i++) {
    closeButton[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}
list = document.querySelector('section');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'OBJECT') {
        ev.target.classList.toggle('checked');
    }
    if (ev.target.classList.contains('checked')) {
        ev.target.setAttribute("name", "c");
    } else {
        ev.target.setAttribute("name", "d");
    }
}, false);
function completed() {
    var nowArray = Array.prototype.slice.call(document.getElementsByName("c"));
    if (tC.value == "True") {
        tC.value = "False";
        nowArray.map(function (i) {
            i.classList.add('invisible');
        });
    } else if (tC.value == "False") {
        tC.value = "True";
        nowArray.map(function (i) {
            i.classList.remove('invisible');
        });
    }
}
function active() {
    var nowArray = Array.prototype.slice.call(document.getElementsByName("d"));
    if (tA.value == "True") {
        tA.value = "False";
        nowArray.map(function (i) {
            i.classList.add('invisible');
        });
    } else if (tA.value == "False") {
        tA.value = "True";
        nowArray.map(function (i) {
            i.classList.remove('invisible');
        });
    }
}
function allr() {
    var arrayrA = Array.prototype.slice.call(document.getElementsByName("c"));
    var arrayrB = Array.prototype.slice.call(document.getElementsByName("d"));
    arrayrA.map(function (i) {
        i.classList.remove('invisible');
    });
    arrayrB.map(function (i) {
        i.classList.remove('invisible');
    });
}
