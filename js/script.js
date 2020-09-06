let linkHover = document.querySelector('._hover');
let subMenu = document.querySelector('.submenu-footer__list');

linkHover.addEventListener("mouseenter", function(e) {
   subMenu.classList.add('_active-mouse');
});
subMenu.addEventListener("mouseleave", function(e) {
   subMenu.classList.remove('_active-mouse');
});

let cart = document.querySelector('.cart-icon');
let cartItem = document.querySelector('.cart-icon__body')

cart.addEventListener("click", function(e) {
    cartItem.classList.toggle('_active');
});

let menuBurger = document.querySelector('.burger-menu');
let menuBurgerBody = document.querySelector('.body-mobile');

   menuBurger.addEventListener("click", function(e) {
   menuBurger.classList.toggle('burger-menu_active');
   menuBurgerBody.classList.toggle('body-mobile_active');
});

let arrowDownFirst = document.querySelector('.arrow-down__first-level');
let arrowDownSecond = document.querySelector('.arrow-down__second-level');
let subSubMenu = document.querySelector('.sub-submenu-footer__list');


   arrowDownFirst.addEventListener("click", function(e) {
   subMenu.classList.toggle('_active');
   });
   arrowDownSecond.addEventListener("click", function(e) {
   subSubMenu.classList.toggle('_active');
});