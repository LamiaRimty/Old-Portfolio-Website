// Show Hidden Menu

const navMenu=document.getElementById("nav-menu")
const navToggle=document.getElementById("nav-toggle")
const navClose=document.getElementById("nav-close")

// Show  Menu
if(navToggle){
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add("show-menu")
    })
}

//Hide Menu

if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove("show-menu");
    })
}

// Remove Menu Mobile

const navLink=document.querySelectorAll(".nav-link")

function linkAction(){
    const navMenu=document.getElementById("nav-menu");
    //jokhn protita class e click dibo menur list ta remove hoye jabe
    navMenu.classList.remove("show-menu");
}

navLink.forEach(n=>n.addEventListener("click",linkAction))


//Skills

