window.alert ("Bienvenido a la página de Rommell Delgado");

const menuItems = document.querySelectorAll (".barra_navegacion") 

console.log (menuItems);

menuItems.forEach(function (item) {
    item.addEventListener("click",function (e) {
        const currentItem = document.querySelector(".elemento_navegacion")
        currentItem.classList.remove("elemento_navegacion")
        e.target.classList.add("activate")
    })
})