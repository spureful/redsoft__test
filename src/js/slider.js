function silmpleSlide() {

	const slider = document.querySelector(".promo__slider");
	const slide = document.getElementsByClassName("promo__slide");
	const promoSection = document.querySelector('.promo')


	let slideWidth = parseInt(getComputedStyle(slider).width);
	let CurrentSlide = 0;


	let nextSlide;
	let prevSlide;

	let autoSlider = setInterval(moveSlideNext, 5000);


	for (const slideItem of slide) {
		slideItem.addEventListener('click', moveSlideNext)

	};

	slider.addEventListener('mouseover', function () {
		console.log('focus');
		clearInterval(autoSlider)
	});

	slider.addEventListener('mouseout', function () {
		console.log('focus off');

		autoSlider = setInterval(moveSlideNext, 5000);
	});



	function moveSlideNext() {


		if (CurrentSlide >= slide.length - 1) {
			CurrentSlide = 0;
		} else if (CurrentSlide < 0) {
			CurrentSlide = 0;
		} else {
			CurrentSlide += 1;
		}
		nextSlide = -(slideWidth * CurrentSlide);


		for (let i = 0; i < slide.length; i++) {
			let bgSlide = CurrentSlide + 1;
			slide[i].style.transform = `translateX(${nextSlide}px)`;
			promoSection.style.backgroundImage = `url('../img/promo-${bgSlide}.png')`;


		}

	}

}
silmpleSlide();
