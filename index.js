let menuAtivo = document.querySelectorAll("[data-menu]");

menuAtivo.forEach((menu)=>{
    menu.addEventListener("click",function(){
        for(i = 0; i < menuAtivo.length; i++){
            menuAtivo[i].classList.remove("ativo");
        }
        menu.classList.add("ativo");
    });
});

