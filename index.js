

function addNew(){

    if (document.getElementById("Input") == null) {

        let tag = document.createElement("input")
        tag.setAttribute("id", "input")
        let element = document.getElementById("input-old")
        element.replaceWith(tag)

    } 
    
    
}