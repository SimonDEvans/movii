/**
 * Mobile menu behaviour
 * Imported via app.js
 */

var mobileMenu = function() {

	var $openButton	 		= $( '.js-menu-open' ),
		$closeButton		= $( '.js-menu-close' ),
		$menuContainer		= $( '.main-menu-container' ),
		menuOpenClass		= 'main-menu-container--open',
		state				= {
								open: false
							};

	function menuOpen() {
		if ( !state.open ) {
			$menuContainer.addClass( menuOpenClass );
			state.open = true;
		}
	}

	function menuClose() {
		if ( state.open ) {
			$menuContainer.removeClass( menuOpenClass );
			state.open = false;
		}
	}

	$( $openButton ).on( 'click', function() {
		menuOpen();
	});

	$( $closeButton ).on( 'click', function() {
		menuClose();
	});
}

mobileMenu();