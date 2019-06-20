import $ from 'jquery';

class Modal {
	constructor() {
		// this.modalClose = $('.modal-close');

		this.openModalButton = $('.open-modal');
		this.closeModalButton = $('.modal__close');
		this.modal = $('.modal');

		// this.revealModal();
		// this.closeModal();

		this.events();
	}

	events() {
		//clicking the open modal button
		this.openModalButton.click(this.openModal.bind(this));

		// clicking the close modal button
		this.closeModalButton.click(this.closeModal.bind(this));

		// pressing the any key
		$(document).keyup(this.keyPressHandler.bind(this));
	}

	keyPressHandler(event) {
		if (event.keyCode == 27) {
			this.closeModal();
		}
	}

	openModal() {
		this.modal.addClass('modal--is-visible');
		return false;
	}

	closeModal() {
		this.modal.removeClass('modal--is-visible');
	}

	// revealModal(){

	// 	// return false;

	// 	this.openModalButton.click(function(){
	// 		$('.modal').css('visibility', 'visible');
	// 	});
	// }

	// closeModal() {
	// 	this.closeModalButton.click(function() {
	// 		$('.modal').css('visibility', 'hidden');
	// 	});
	// }
}

export default Modal;