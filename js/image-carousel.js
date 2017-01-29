var homeCarousel = function() {

  var $homeHero         = $( '.home__image' ),
      currentImage      = 0,
      heroImages        = [
        "https://image.tmdb.org/t/p/original/PIXSMakrO3s2dqA7mCvAAoVR0E.jpg",
        "https://image.tmdb.org/t/p/original/1jgulSytTJcATkGX8syGbD2glXD.jpg",
        "https://image.tmdb.org/t/p/original/9X3cDZb4GYGQeOnZHLwMcCFz2Ro.jpg",
        "https://image.tmdb.org/t/p/original/qXQinDhDZkTiqEGLnav0h1YSUu8.jpg",
        "https://image.tmdb.org/t/p/original/cNLZ7YGRikb4IsLblrzu86ndZPw.jpg",
        "https://image.tmdb.org/t/p/original/6bbZ6XyvgfjhQwbplnUh1LSj1ky.jpg",
        "https://image.tmdb.org/t/p/original/dkMD5qlogeRMiEixC4YNPUvax2T.jpg"
      ];

  function loadImages(){

    $homeHero.animate({ 
      opacity: 1
    }, 600, function(){

      // Fade out and in
      $homeHero.animate({ 
        opacity: 0.6 
      }, 600, function(){

        currentImage++;

        if( currentImage > heroImages.length-1 ){
          currentImage=0;
        }

        var nextImage = heroImages[currentImage];

        //swap out bg src
        $homeHero.css('background-image', 'url('+nextImage+')'); 

        //animate fully back in
        $homeHero.animate({ 
          opacity: 1 
        }, 600, function(){

          //set timer for next
          setTimeout(loadImages,5000);
        });
      });
    });
  }

  setTimeout( loadImages, 5000);

};

homeCarousel();