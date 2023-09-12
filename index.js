

function addNew(){

    if (document.getElementById("Input") == null) {

        let tag = document.createElement("input")
        tag.setAttribute("id", "input")
        let element = document.getElementById("input-old")
        element.replaceWith(tag)

        let cancelButton = document.createElement("button")
        cancelButton.setAttribute("id", "cancelButton")
        cancelButton.textContent = "Cancel"
        let noButton = document.getElementById("cancel-button")
        noButton.replaceWith(cancelButton)

    } 
    
    
}