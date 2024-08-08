
// IMPORTANT! I NEED TO THINK ABOUT THIS INTERFACE! I dont think it's user friendly




// adding new to-do list, also clears the input bar
function enterInput(){

    let enter = document.getElementById("userInput").value
    if(enter !== ""){
        let unorderedList = document.createElement("li")
        unorderedList.textContent = enter
        document.getElementById("toDoList").appendChild(unorderedList)
        // actually removes the list by itself, no need for fancy stuff
        let removeList = document.createElement("button")
        removeList.textContent = "Delete"
        removeList.addEventListener("click", function(){

            unorderedList.remove()

        })
        unorderedList.appendChild(removeList)
    }
    
}
 
// next: adding check marks and display finished task
    
