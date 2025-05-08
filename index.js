
// IMPORTANT! I NEED TO THINK ABOUT THIS INTERFACE! I dont think it's user friendly


// next: display finished task

    

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

let addByEnter = document.getElementById("userInput")

addByEnter.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("enterButton").click()
    }
  });

// adding new to-do list, also clears the input bar
function enterInput(){
    
    let enter = document.getElementById("userInput").value
    
    
    if(enter !== ""){
        
        let toDoList = document.createElement("li")
        let listButton = document.createTextNode(enter)
        
        
        
        document.getElementById('userInput').value = ""
        let attachToTheList = document.getElementById("theList")
        
        
        attachToTheList.appendChild(toDoList)
        toDoList.appendChild(listButton)
        
        // actually removes the list by itself, no need for fancy stuff
        let removeList = document.createElement("SPAN")
        removeList.className = "remove"
        let removeTxt = document.createTextNode("\u00D7")
        removeList.addEventListener("click", function(){

            
            toDoList.remove()
            removeList.remove()
            

        })
        toDoList.appendChild(removeList)
        removeList.appendChild(removeTxt)
        
    } else {
        alert("You must write something")
    }
    
}
 


    




    

