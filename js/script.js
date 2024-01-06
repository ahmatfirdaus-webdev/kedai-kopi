const navBar = document.querySelector('nav.navbar');
const navLink = document.querySelector('.nav-link');
const hamMenu = document.querySelector('.nav-extra a.hamburger-icon');
const searchIcon = document.querySelector('.search-icon');
const searchBar = document.querySelector('.searchbar');
const searchInput = document.querySelector('#search');
const search = document.querySelector('.search-link');
const shoppingCart = document.querySelector('.shopping-cart');
const shopIcon = document.querySelector('.shop-icon');
const detailIcon = document.querySelectorAll('.detail-icon');
const closeButton = document.querySelector('.close-btn');
const modal = document.querySelector('.modal');
const form = document.querySelector('div.form-buyer form');
const checkoutBtn = document.querySelector('button.checkout');

hamMenu.addEventListener('click', (e) => {
  e.preventDefault()
  navLink.classList.toggle('active');
});

document.addEventListener('click', function(e) {
  if(!hamMenu.contains(e.target) && !navBar.contains(e.target)){
    navLink.classList.remove('active');
  }
});

searchIcon.addEventListener('click', function(e) {
  e.preventDefault();
  searchBar.classList.toggle('active');
  searchInput.focus()
})

document.addEventListener('click', (e) => {
  if(!searchIcon.contains(e.target) && !searchBar.contains(e.target)){
    searchBar.classList.remove('active');
  }
})

shopIcon.addEventListener('click', (e) => {
  e.preventDefault();
  shoppingCart.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if(!shopIcon.contains(e.target) && !shoppingCart.contains(e.target)){
    shoppingCart.classList.remove('active');
  }
});

detailIcon.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = "flex";
  })
});

closeButton.addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = 'none';
});


