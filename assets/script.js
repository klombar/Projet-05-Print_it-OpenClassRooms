const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]




let bannerImage = document.querySelector(".banner-img");
let bannerTitle = document.querySelector("#banner p");
let dots = document.querySelectorAll(".dots .dot");
currentIndex = 0;



let arrowRight = document.querySelector(".arrow_right");
	arrowRight.addEventListener("click", () =>{
		dots[currentIndex].classList.remove("dot_selected");
		currentIndex++;
		if (currentIndex > slides.length -1){
			currentIndex = 0;
		};
		dots[currentIndex].classList.add("dot_selected");
		bannerImage.src = slides[currentIndex].image;
		bannerTitle.innerHTML = slides[currentIndex].tagLine;
	})



let arrowLeft = document.querySelector(".arrow_left");
	arrowLeft.addEventListener("click", () =>{
		dots[currentIndex].classList.remove("dot_selected");
		currentIndex--;
		if (currentIndex < 0) {
			currentIndex = 3
		};
		dots[currentIndex].classList.add("dot_selected");
		bannerImage.src = slides[currentIndex].image;
		bannerTitle.innerHTML = slides[currentIndex].tagLine;
})

