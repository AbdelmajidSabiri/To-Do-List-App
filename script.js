const inputBox = document.getElementById("input-box");
const listeContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something !")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listeContainer.appendChild(li);
    }
}