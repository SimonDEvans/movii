var homeImage = function() {
  var images = Array(
    "https://image.tmdb.org/t/p/original/PIXSMakrO3s2dqA7mCvAAoVR0E.jpg",
    "https://image.tmdb.org/t/p/original/1jgulSytTJcATkGX8syGbD2glXD.jpg",
    "https://image.tmdb.org/t/p/original/9X3cDZb4GYGQeOnZHLwMcCFz2Ro.jpg",
    "https://image.tmdb.org/t/p/original/qXQinDhDZkTiqEGLnav0h1YSUu8.jpg",
    "https://image.tmdb.org/t/p/original/cNLZ7YGRikb4IsLblrzu86ndZPw.jpg",
    "https://image.tmdb.org/t/p/original/6bbZ6XyvgfjhQwbplnUh1LSj1ky.jpg",
    "https://image.tmdb.org/t/p/original/dkMD5qlogeRMiEixC4YNPUvax2T.jpg"
  );

  var currimg = 0;

  function loadimg(){

     $('.home__image').animate({ opacity: 1 }, 600,function(){

          //finished animating, minifade out and fade new back in           
          $('.home__image').animate({ opacity: 0.6 }, 600,function(){

              currimg++;

              if(currimg > images.length-1){

                  currimg=0;

              }

              var newimage = images[currimg];

              //swap out bg src                
              $('.home__image').css("background-image", "url("+newimage+")"); 

              //animate fully back in
              $('.home__image').animate({ opacity: 1 }, 600,function(){

                  //set timer for next
                  setTimeout(loadimg,5000);

              });

          });

      });

    }
    setTimeout(loadimg,5000);
}

// homeImage();