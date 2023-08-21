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

const SkillsContent= document.getElementsByClassName("skills-content"),
skillsHeader = document.querySelectorAll(".skills-header")


function toggleSkills(){
    let skillClass=this.parentNode.className;

    for(i =0 ; i<SkillsContent.length; i++){
        SkillsContent[i].className="skills-content skills-close"
    }

    if(skillClass === "skills-content skills-close"){
        this.parentNode.className="skills-content skills-open"
    }
}

skillsHeader.forEach((e)=>{
    e.addEventListener("click",toggleSkills)
})


// Education-Course Qualification
const tabs= document.querySelectorAll(["data-target"]),
tabContents=document.querySelectorAll(["data-content"]);

tabs.forEach(tab =>{
    tab.addEventListener("click",()=>{
        const target=document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove("qualification-active")
        })

        target.classList.add("qualification-active")

        tabs.forEach(tab=>{
            tab.classList.remove("qualification-active")
        })
        tab.classList.add("qualification-active")
    })
})

// PORTFOLIO

 let swiper = new Swiper(".portfolio-container", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop:true,
       
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


// Scroll active link
  const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

