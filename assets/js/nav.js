let navToggle = document.getElementById('nav-toggle');
let mobileMenu = document.getElementById('mobile-menu');
let closeNav = document.getElementById('close-nav');
let mobileSearch = document.getElementById('mobile_search');
let mobileSearchBox = document.getElementById('mobile_search_box');
let closeSearchBox = document.getElementById('close-search-box');

navToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
})

mobileSearch.addEventListener('click', () => {
  mobileSearchBox.classList.toggle('active');
})
closeSearchBox.addEventListener('click', () => {
  mobileSearchBox.classList.remove('active');
})

closeNav.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

// Counter
      function decreaseQuantity(id) {
          var quantityInput = document.getElementById(id);
          var currentValue = parseInt(quantityInput.value, 10);
          
          if (currentValue > 1) {
              quantityInput.value = currentValue - 1;
          }
      }
  
      function increaseQuantity(id) {
          var quantityInput = document.getElementById(id);
          var currentValue = parseInt(quantityInput.value, 10);
          
          quantityInput.value = currentValue + 1;
      }