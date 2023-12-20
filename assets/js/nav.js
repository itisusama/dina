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

// Collection
// init Isotope
var $grid = $('.collection-list').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  resetFilterBtns();
  $(this).addClass('active-filter-btn');
  $grid.isotope({ filter: filterValue });
});

var filterBtns = $('.filter-button-group').find('button');
function resetFilterBtns(){
  filterBtns.each(function(){
    $(this).removeClass('active-filter-btn');
  });
}

// Product
const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
  imgItem.addEventListener('click', (event) => {
      event.preventDefault();
      imgId = imgItem.dataset.id;
      slideImage();
  });
});

function slideImage(){
  const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

  document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);

