(function validForm() {

	const wrapper = document.querySelector('.wrapper');
	const modal = document.querySelector('.modal');
	const modalBtn = document.querySelector('.modal__btn');
	const modalText = document.querySelector('.modal__text');

	const form = document.querySelector('.access__form');
	const input = document.querySelector('.access__input');
	const sendBtn = document.querySelector('.access__btn');

	const regMail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

	modalBtn.addEventListener('click', function () {
		
		closeFade(modal);
		

	})

	form.addEventListener('submit', function (e) {
		e.preventDefault();

		if (regMail.test(input.value) === false) {
			openFade(modal);
			modalText.textContent = 'Пожалуйста, введите корректный e-mail'
		} else {
			fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
  .then(response => response.json())
  .then(commits =>{
				openFade(modal);
			modalText.textContent = 'Ваши данные успешно отправлены'
			});
			
}


	});


	function openFade(modal) {
		let opOpen = 0;

		modal.style.display = 'flex';
		modal.style.opacity = opOpen;

		setTimeout(function fadeIn() {
			opOpen += 0.1;
			if (opOpen < 1) {

				modal.style.opacity = opOpen;
			}
			setTimeout(fadeIn, 50);
		}, 300);

	}

	function closeFade(modal) {
		let opClose = 1;

		setTimeout(function fadeOut() {
			opClose -= 0.1;
			if (opClose > 0) {
				modal.style.opacity = opClose;
				setTimeout(fadeOut, 50);

			} else {
				modal.style.display = 'none';
			}
		}, 300);
	}

})();
