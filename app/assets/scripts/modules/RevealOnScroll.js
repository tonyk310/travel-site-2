import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

// function redBody(){
// 	$('body').css('background', 'red');
// }
// redBody();

class RevealOnScroll {

	constructor(element, offset) {
		this.itemsToReveal = element;
		this.hideIntially();
		// this.offsetPercentage = offset;
		this.createWaypoints(offset);
	}

	hideIntially() {
		this.itemsToReveal.addClass("reveal-item");
	}

	createWaypoints(offset) {
		// var that = this;
		
		var myOffset = offset;


		// this is pointing to createWaypoints
		this.itemsToReveal.each(function() {

			// this is pointing to the element ie itemToReveal looped through
			var currentItem = this;
			
			new Waypoint({
				element: currentItem,
				handler: function() {
					$(currentItem).addClass('reveal-item--is-visible');
				},
				// offset: that.offsetPercentage
				
				offset: myOffset

			});
		});
	}
}

export default RevealOnScroll;