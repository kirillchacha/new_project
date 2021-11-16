"use strict"

document.addEventListener ('DOMContentLoaded', function (){
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);
	}


	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		form (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if(input.classList.contains('_email')){
				if (emailTest(input)){
					formAddError(input);
					erro++;
				}
			}else if(input.getAttribute("type") === "checkbox" && input.checked === false){
				formAddError(input);
				error++;
			}else{
				if (input.value === ''){
					formAddError(input);
					erro++;
				}
			}

		}
	}
	function formAddError(input) {
		input.preventElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formAddError(input) {
		input.preventElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
});