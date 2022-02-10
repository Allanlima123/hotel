let menuAtivo = document.querySelectorAll("[data-menu]");

//Menu
let menuHambuguer = document.querySelector(".menuHambuguer");
let removeNavBar =  document.getElementById("removebars")
let navMenu = document.querySelector(".navbar");

menuHambuguer.addEventListener("click", ()=>{
    navMenu.classList.add("active");
});

removeNavBar.addEventListener("click", () =>{
    navMenu.classList.remove("active");
});

menuAtivo.forEach((menu)=>{
    menu.addEventListener("click",function(){
        for(i = 0; i < menuAtivo.length; i++){
            menuAtivo[i].classList.remove("ativo");
        }
        menu.classList.add("ativo");
    });
});
