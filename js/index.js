// Получаем элементы
const slides = document.querySelectorAll('#slides .itc-slider-item');
const indicators = document.querySelectorAll('#indicators .itc-slider-indicator');
const citiesNav = document.querySelectorAll('#cities-nav .itc-slider-cities-nav-elem');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('previous');

let currentSlide = 0;

// Функция для сброса активных классов
function resetActiveClasses() {
    slides[currentSlide].classList.remove('showing');
    indicators[currentSlide].classList.remove('indicator-active');
    citiesNav[currentSlide].classList.remove('nav-active');
}

// Основная функция перехода
function goToSlide(n) {
    resetActiveClasses();
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('showing');
    indicators[currentSlide].classList.add('indicator-active');
    citiesNav[currentSlide].classList.add('nav-active');
}

// Функции навигации
function nextSlide() {
    goToSlide(currentSlide + 1);
}

function prevSlide() {
    goToSlide(currentSlide - 1);
}

// Привязываем обработчики событий
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
