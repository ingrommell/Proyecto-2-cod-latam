window.alert("Bienvenido a la página de Rommell Delgado");

const menuItems = document.querySelectorAll(".barra_navegacion");

const menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener("click", function () {
  document.body.classList.toggle("mobile-menu-activate");
});

menuItems.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const currentItem = document.querySelector(".elemento_navegacion");
    currentItem.classList.remove("elemento_navegacion");
    e.target.classList.add("activate");
  });
});
