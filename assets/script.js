// const slides = [
// 	{
// 		"image":"slide1.jpg",
// 		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
// 	},
// 	{
// 		"image":"slide2.jpg",
// 		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
// 	},
// 	{
// 		"image":"slide3.jpg",
// 		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
// 	},
// 	{
// 		"image":"slide4.png",
// 		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
// 	}
// ]

const slidesContainer = document.querySelector(".slides_container") 
const slides = Array.from(slidesContainer.children);
const nbSlides = slides.length;

const nextBtn = document.querySelector(".arrow_right");
const prevBtn = document.querySelector(".arrow_left");

const dotsNav = document.querySelector(".dots");
const dot = Array.from(dotsNav.children);

let currentSlide = 0;

nextBtn.addEventListener("click", function () {
        if(currentSlide < nbSlides - 1){
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    });
});

prevBtn.addEventListener("click", function () {
    if(currentSlide > 0){
        currentSlide--; 
    } else {
        currentSlide = nbSlides - 1;
    }; 
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    });
});


















