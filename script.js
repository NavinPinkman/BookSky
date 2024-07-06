//Selecting popup, popup-overlay, popup-box
var plus=document.getElementById("popup")
var overlay=document.querySelector(".popup-overlay")
var box=document.querySelector(".pop-box")

plus.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="block"
    box.style.display="block"
})

var cancel=document.querySelector(".cancel-book")
cancel.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
    box.style.display="none"
})


//select container popup-title popup-author popup-text
var container=document.querySelector(".container")
var popuptitle=document.getElementById("popup-title")
var popupauthor=document.getElementById("popup-author")
var popuptext=document.getElementById("popup-text")
var add=document.getElementById("add-book")

add.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","sub-container")
    div.innerHTML=` <h2>${popuptitle.value}</h2>
            <h5>${popupauthor.value}</h5>
            <p>${popuptext.value}</p>
            <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    overlay.style.display="none"
    box.style.display="none"
})

function deletebook(event)
{
    event.target.parentElement.remove()
}
