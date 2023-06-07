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

const next = document.querySelector(".arrow_right");
const prev = document.querySelector(".arrow_left");

const dotsNav = document.querySelector(".dots");
const dot = Array.from(dotsNav.children);

let i = 0;

const bannerWidth = banner.clientWidth;

// function slideNext(){
//     slide[i].classList.remove('.active'); 

//     if(i < nbSlide - 1){
//         i++;
//     } else {
//         i = 0
//     }

//     slide[i].classList.add('active')
//     console.log(i);
// }

// next.addEventListener('click', slideNext);
// console.log(next);











