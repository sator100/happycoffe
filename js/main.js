let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

let search = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    search.classList.toggle('active');
}

let cart = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cart.classList.toggle('active');
}