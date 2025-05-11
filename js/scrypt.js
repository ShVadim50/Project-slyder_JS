let slides = document.querySelectorAll('#slides .itc-slider-item');
let indicators = document.querySelectorAll('#indicators .itc-slider-indicator');
let citiesNav = document.querySelectorAll('#cities-nav .itc-slider-cities-nav-elem');
let next = document.getElementById('next');
let previous = document.getElementById('previous');

let currentSlide = 0;

function goToSlide(n) {
    slides[currentSlide].className = 'itc-slider-item';
    indicators[currentSlide].className = 'itc-slider-indicator';
    citiesNav[currentSlide].className = 'itc-slider-cities-nav-elem';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'itc-slider-item showing';
    indicators[currentSlide].className = 'itc-slider-indicator indicator-active';  
    citiesNav[currentSlide].className = 'itc-slider-cities-nav-elem nav-active';
  };

function nextSlide() {
	goToSlide(currentSlide + 1);
};

function previousSlide() {
	goToSlide(currentSlide - 1);
};

next.onclick = function() {
	nextSlide();
};

previous.onclick = function() {
	previousSlide();
};