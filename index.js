
// IMPORTANT! I NEED TO THINK ABOUT THIS INTERFACE! I dont think it's user friendly

// adding new to do list
function addNew() {

    if (document.getElementById("input") == null) {

        let inputList = document.createElement("input")
        inputList.setAttribute("id", "input")
        document.getElementById("user-input").appendChild(inputList)

        let enterButton = document.createElement("button")
        enterButton.setAttribute("id", "enterButton")
        enterButton.setAttribute("onclick", "enterInput()")
        enterButton.textContent = "Enter"
        document.getElementById("user-input").appendChild(enterButton)
        

        let cancelButton = document.createElement("button")
        cancelButton.setAttribute("id", "cancelButton")
        cancelButton.setAttribute("onclick", "cancelInput()")
        cancelButton.textContent = "Cancel"
        document.getElementById("user-input").appendChild(cancelButton)
         
    } 
}

//cancelling input
function cancelInput() {

    let removeInput = document.getElementById("input")
    removeInput.remove()

    let removeEnterButton = document.getElementById("enterButton")
    removeEnterButton.remove()

    let removeCancelButton = document.getElementById("cancelButton")
    removeCancelButton.remove()
}

// displaying input from user, also clears the input bar (by deleting it)
function enterInput(){

    let enter = document.getElementById("input").value
    let unorderedList = document.createElement("li")
    unorderedList.textContent = enter
    document.getElementById("toDoList").appendChild(unorderedList)
    cancelInput()

    // actually removes the list by itself, no need for fancy stuff
    let removeList = document.createElement("button")
    removeList.textContent = "Delete"
    removeList.addEventListener("click", function(){

        unorderedList.remove()

    })
    unorderedList.appendChild(removeList)

}
 
// next: adding check marks and display finished task
    
