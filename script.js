var list_Input = document.getElementById("inp_task")
var todo_btn = document.getElementById("button-addon2")
var list_Item = document.getElementById("todo_list")
var inputDataArray = []
var inputData;

// function deleteLocalstorage() {
//     localStorage.removeItem("Todo_input")
// }
function buildUI() {
   
 
    


}
function addLIst(event) {

    inputData = list_Input.value;
    if (inputData === '') {
        alert("please enter somthing")
    }
    else {
        var li = document.createElement('li')
        var span_element = document.createElement('span')
        li.appendChild(span_element)
        span_element.innerHTML = inputData
        // li.innerText=inputData
        list_Item.appendChild(li);
        list_Input.value = "";
        list_Input.focus()

        // create edit button
        var editButton = document.createElement('i');
        editButton.classList.add('fas', 'fa-edit');
        li.appendChild(editButton)

        // create trash button
        var deleteButton = document.createElement('i');
        deleteButton.classList.add('fas', 'fa-trash');
        li.appendChild(deleteButton)
        console.log(deleteButton);
       
    }
}

function editInput(event) {
    console.log(event.target.classList[1]);
    if (event.target.classList[1] === 'fa-edit') {
        // var editValue = prompt("please add new text")
        var editValue = prompt("please add new text")

        var item = event.target.parentElement;
        // item.innerText=editValue;
        var spanElements = item.querySelector("span");
        spanElements.innerHTML = editValue

    }

}

function deleteIcon(event) {
    console.log(event.target.classList[0]);
    if (event.target.classList[1] === 'fa-trash') {
        var parent_element = event.target.parentElement
        console.log(parent_element);
        parent_element.remove()
    }
}

// add event listener
todo_btn.addEventListener('click', (addLIst))
list_Item.addEventListener('click', (deleteIcon))
list_Item.addEventListener('click', (editInput))

todo_btn.addEventListener('click', (event) => {
    list_Input.textContent = event.target.value
})
