
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
    let unorderedList = document.createElement("p")
    unorderedList.textContent = "- " + enter
    document.getElementById("toDoList").appendChild(unorderedList)
    cancelInput()

}
 
// next: make delete function for each of the list (idk how to do it)
    
