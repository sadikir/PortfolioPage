let icons = document.querySelector(".sticks");
let menu = document.querySelector(".menu");
icons.addEventListener("click",() =>{
menu.classList.toggle("change");
})
let menuLink = document.querySelectorAll(".link");
for(let i = 0; i < menuLink.length; i++){
  menuLink[i].addEventListener("click", () => {
    menu.classList.toggle("change");
  })
}