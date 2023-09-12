

function addNew() {

    if (document.getElementById("input") == null) {

        let inputList = document.createElement("input")
        inputList.setAttribute("id", "input")
        document.getElementById("user-input").appendChild(inputList)

        let cancelButton = document.createElement("button")
        cancelButton.setAttribute("id", "cancelButton")
        cancelButton.setAttribute("onclick", "cancelInput()")
        cancelButton.textContent = "Cancel"
        document.getElementById("user-input").appendChild(cancelButton)
         
    } 
}
function cancelInput() {

    let removeInput = document.getElementById("input")
    removeInput.remove()

    let removeCancelButton = document.getElementById("cancelButton")
    removeCancelButton.remove()
}
    
    
