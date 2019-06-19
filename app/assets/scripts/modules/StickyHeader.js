import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
	constructor() {
		// this.siteHeader = $('.site-header');
		// this.headerTriggerElement = $('.large-hero__title');
		this.createHeaderWaypoint();

		// this.pageSections = $('.page-section');

		this.createPageSectionWaypoints();

		this.headerLinks = $('.primary-nav a');

		this.addSmoothScrolling();
	}

// METHODS ///////////////////////////

	addSmoothScrolling() {
		this.headerLinks.smoothScroll();
	}

	createHeaderWaypoint() {
		// var that = this;
		new Waypoint({

			element: document.getElementsByClassName('large-hero__title')[0],
			handler: function(direction) {
				if(direction === 'down'){
					$('.site-header').addClass('site-header--dark');
				} else {
					$('.site-header').removeClass('site-header--dark');
				}
			}
		});
	}

	createPageSectionWaypoints() {
		$('.page-section').each(function(){

			var currentPageSection = this;
			
			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {

					if(direction === 'down'){
						var matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
						$('.primary-nav a').removeClass('is-current-link');
						$(matchingHeaderLink).addClass('is-current-link');
					}
				},
				offset: '18%'
			});

			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {

					if(direction === 'up'){
						var matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
						$('.primary-nav a').removeClass('is-current-link');
						$(matchingHeaderLink).addClass('is-current-link');
					}
				},
				offset: '-40%'
			});
		});
	}
}

export default StickyHeader;