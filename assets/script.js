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




let img = document.querySelector(".banner-img");
let title = document.querySelector("#banner p");

index = 0;



let clickDroit = document.querySelector(".arrow_right");
	clickDroit.addEventListener("click", () =>{
		index++;
		if (index > slides.length -1){
			index = 0;
		}
		img.src = slides[index].image;
		title.innerHTML = slides[index].tagLine;
	})




let clickGauche = document.querySelector(".arrow_left");
	clickGauche.addEventListener("click", () =>{
		index--;
		img.src = slides[index].image;
		title.innerHTML = slides[index].tagLine;
})

