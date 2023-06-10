const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const nbSlides = slides.length - 1;
let currentSlide = 0;

const slidesContainer = document.querySelector(".slides_container");
const nextBtn = document.querySelector(".arrow_right");
const prevBtn = document.querySelector(".arrow_left");
const dotsNav = document.querySelector(".dots");

const dotCreation = () => {
    slides.forEach((element,index) => {
        const dotElement = document.createElement('div');
        if(index === 0){dotElement.classList.add('dot_selected');}
        dotElement.classList.add('dot');
        dotsNav.appendChild(dotElement);
    });
}

const dotselection = (dotIndex) => {
    Array.from(document.querySelectorAll('.dot')).forEach((element,index) => {
        element.classList.remove('dot_selected');
        if(index === dotIndex){element.classList.add('dot_selected');}
    });
}

const slide = (direction) => {
    currentSlide = currentSlide + direction;
    console.log('Position of slide', currentSlide, slides[currentSlide]);

    if(currentSlide === -1){
        currentSlide = nbSlides;
    }else if(currentSlide > nbSlides){
        currentSlide = 0;
    }

    document.querySelector('.slide_img').setAttribute('src', './assets/images/slideshow/'+slides[currentSlide].image);
    document.querySelector('.tagLine').innerHTML = slides[currentSlide].tagLine;
    dotselection(currentSlide);
}

nextBtn.addEventListener("click", () => {
    console.log('Next Slide');
    slide(1);
});

prevBtn.addEventListener("click", () => {
    console.log('Previous Slide');
    slide(-1);
});

dotCreation();


















