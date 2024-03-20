const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addtodo() {
    if (inputbox.value === '') {              //if inputbox is empty then give the message you must write sth
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");    //create an li element in inner Html
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);  //the li is displayed in the listcontainer
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; //this code will cross the icon , which is the x symbole
        li.appendChild(span);
        
    } 
        inputbox.value = "";   
        saveData();
}


listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){            //this code is if we are clicked in LI it cheaked for cheacked class name and if the cheacked class name is alredy there it will remove the cheacked icon 
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){  //if clciked item is span tag it will remove the list item
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask() {
    listcontainer.innerHTML = localStorage.getItem("data");
}

showTask();

