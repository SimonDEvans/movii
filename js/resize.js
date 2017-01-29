/**
 * Window resize events
 * Imported via app.js
 */

$(window).resize(function () {

    // Disable transitions while resizing browser
    var disableTransition = function() {

    	var transitionElement   = $( '.main-menu-container' ),	// You can list more elements here
    	    disabledClass       = 'disable-transition',
    	    delaySpeed          = '500';

    	transitionElement.addClass( disabledClass );

    	setTimeout(function() {
    	    transitionElement.removeClass( disabledClass );
    	}, delaySpeed);
    }

    // disableTransition();

    // Refresh sub-menus
    // subMenu();

});
