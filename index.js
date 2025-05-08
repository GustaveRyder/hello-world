

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

function enterInput(){
    
    let enter = document.getElementById("userInput").value
    
    
    if(enter !== ""){
        
        let toDoList = document.createElement("li")
        let listButton = document.createTextNode(enter)
        
        
        
        document.getElementById('userInput').value = ""
        let attachToTheList = document.getElementById("theList")
        
        
        attachToTheList.appendChild(toDoList)
        toDoList.appendChild(listButton)
        

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
 


    




    

