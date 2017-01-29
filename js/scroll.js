/**
 * Scroll events
 * Imported via app.js
 */

$(window).scroll(function () {

    /**
     * Display fixed header after scrolling past header banner
     */
     var headerStick = function() {

        var $siteHeader          = $( '.site-header' ),
            siteHeaderTop        = $siteHeader.offset().top,
            siteHeaderHeight     = $siteHeader.outerHeight(true),
            $mainMenu            = $( '.main-menu-container' ),
            mainMenuFixed        = 'main-menu-container--fixed';

        if ( $siteHeader.length ) {

            var offset = siteHeaderTop + siteHeaderHeight;

            if ( $(window).scrollTop() > offset ) {
                $mainMenu.addClass( mainMenuFixed );
            }

            else {
                $mainMenu.removeClass( mainMenuFixed );
            }
        }
     }

     // headerStick();

     var scrollToTop = function() {

        var $scrollButton        = $( '.scroll-to-top' ),
            showButton           = 'scroll-to-top--show',
            scrollDistance       = '500';

        if ( $(window).scrollTop() > scrollDistance ) {
            $scrollButton.addClass( showButton );
        }

        else {
            $scrollButton.removeClass( showButton );
        }

     }

     // scrollToTop();

});



/**
 * Smooth anchor link animation
 */
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 800);
                return false;
            }
        }
    });
});