import $ from 'jquery';

class MobileMenu {
	constructor(){
		// $('.site-header__menu-icon').click(function(){
		// 	console.log("CLICK");
		// });

		this.siteHeader = $('.site-header');

		this.menuIcon = $('.site-header__menu-icon');

		this.menuContent = $('.site-header__menu-content');

		this.events();
	}

	events() {
		// console.log(this);
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	}

	toggleTheMenu() {
		// console.log(this);
		this.menuContent.toggleClass('site-header__menu-content--is-visible');
		this.siteHeader.toggleClass('site-header--is-expanded');
		this.menuIcon.toggleClass('site-header__menu-icon--close-x');
	}
}

export default MobileMenu;