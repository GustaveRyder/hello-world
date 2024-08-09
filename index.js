
// IMPORTANT! I NEED TO THINK ABOUT THIS INTERFACE! I dont think it's user friendly




// adding new to-do list, also clears the input bar
function enterInput(){

    let enter = document.getElementById("userInput").value
    
    
    if(enter !== ""){
        let unorderedList = document.createElement("input")
        unorderedList.setAttribute("type","checkbox")
        let toDoList = document.createElement("label")
        let addBreakLine = document.createElement("br")
        
        

        toDoList.textContent = enter
        document.getElementById('userInput').value = ""
        let attachToTheList = document.getElementById("theList")
        attachToTheList.appendChild((unorderedList))
        attachToTheList.appendChild((toDoList))
        
        // actually removes the list by itself, no need for fancy stuff
        let removeList = document.createElement("button")
        removeList.textContent = "Delete"
        removeList.addEventListener("click", function(){

            unorderedList.remove()
            toDoList.remove()
            removeList.remove()
            addBreakLine.remove()

        })
        attachToTheList.appendChild(removeList)
        attachToTheList.appendChild(addBreakLine)
    }
    
}
 
// next: display finished task
    
