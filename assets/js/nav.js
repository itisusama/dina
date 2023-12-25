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

// Toggler Working
document.addEventListener('DOMContentLoaded', function() {
    function setupDropdowns(selector, positionRight) {
      var dropdowns = document.querySelectorAll(selector);

      dropdowns.forEach(function(dropdown) {
        var button = dropdown.querySelector('.dropdown-toggle');
        var menu = dropdown.querySelector('.dropdown-menu');

        button.addEventListener('click', function() {
          menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
          if (positionRight) menu.style.left = button.offsetWidth + 'px';
        });

        document.addEventListener('click', function(event) {
          if (!dropdown.contains(event.target)) menu.style.display = 'none';
        });
      });
    }

    setupDropdowns('.dropdown', false);
    setupDropdowns('.dropend', true);
  });

  // Product page Thumbnail
  $(document).ready(function () {
    // Get references to elements
    var showcase = $(".img-showcase");
    var thumbnails = $(".img-item a");

    // Add click event listeners to each thumbnail
    thumbnails.on("click", function (event) {
      event.preventDefault();

      // Change the showcase image source to the clicked thumbnail's source
      showcase.find("img").attr("src", $(this).find("img").attr("src"));
    });
  });

$(document).ready(function () {
  $('.nav-tabs a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
  });
});