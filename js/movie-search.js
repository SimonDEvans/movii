var movieSearch = function() {

  var $input              = $( '.home__search' ),
      $searchForm         = $( '.home__form' ),
      $listingGrid        = $( '.current-popular .grid' ),
      $hero               = $( '.hero' ),
      $movieID            = $( '.movie-id' ),
      key                 = 'd69ac47b3abbdd090506891feaac1088'
      proxyUrl            = 'https://query.yahooapis.com/v1/public/yql',
      movieDB             = 'https://api.themoviedb.org/3/',
      popular             = '' + movieDB + 'discover/movie?sort_by=popularity.desc&api_key=' + key + '';

  // Search for movies
  function searchMovies() {
    var rawValue          = $input.val(),
        inputValue        = rawValue.replace(/\s/g, "%20"),
        searchURL         = '' + movieDB + 'search/movie?query=' + inputValue + '&api_key=' + key + '';

    if ( inputValue.trim().length == 0 ) {
      console.log( 'nada' )
    } else {
      emptyResults();
      retrieveMovies( searchURL );
      scrollToResults();
    }
  }

  function emptyResults() {
    $listingGrid.empty();
  }

  function scrollToResults() {
    $( 'html,body' ).animate({
       scrollTop: $( '.current-popular' ).offset().top - 50
    }, 800);
  }

  function populateSearchMovies( movieList ) {

    var movieCount = movieList.length;

    for ( var i = 0; i < movieCount; i++ ) {
      var movie = movieList[i];

      $( '.js-grid-home .grid' ).append( 
        '<div class="grid__item one-quarter">' +
          '<a href="" class="current-popular__item js-modal">' +
            '<div class="current-popular__item-image" style="background-image: url(https://image.tmdb.org/t/p/w500/' + movie.poster_path + ' )"></div>' +
            '<div class="current-popular__item-info">' +
              '<h2 class="current-popular__item-title">' + movie.title + '</h2>' +
              '<div class="current-popular__item-rating">' + movie.vote_average + '/10</div>' +
              '<div class="movie-id">' + movie.id + '</div>' +
              '<div class="current-popular__item-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.49 31.49"><path d="M21.205 5.007c-.43-.444-1.143-.444-1.587 0-.43.43-.43 1.143 0 1.57l8.047 8.048H1.11c-.618 0-1.11.493-1.11 1.112 0 .62.492 1.127 1.11 1.127h26.555l-8.047 8.032c-.43.444-.43 1.16 0 1.587.444.444 1.16.444 1.587 0l9.952-9.952c.444-.428.444-1.142 0-1.57l-9.952-9.953z" fill="#fff"/></svg></div>' +
            '</div>' +
            '<div class="current-popular__item-quick-rating">' + movie.vote_average + '/10</div>' +
          '</a>' +
        '</div>'
      );
    }
  }

  function populatePopularMovies( movieList ) {

    var $heroHeading        = $( '.hero__heading' ),
        $heroDate           = $( '.hero__date span' ),
        $heroRating         = $( '.hero__rating span' ),
        $heroAge            = $( '.hero__age-rating' ),
        $heroSummary        = $( '.hero__summary' );
        $movieID            = $( '.hero .movie-id' );

    // movieCount = movieList.length;
    movieCount = 8;

    var mostPopular = movieList[6],
        bgImage = 'https://image.tmdb.org/t/p/original' + mostPopular.backdrop_path,
        heroImage = 'url("' + bgImage + '")';

    $hero.css({
      'background-image' : heroImage,
    });

    $heroHeading.text(mostPopular.title);
    $heroDate.text(mostPopular.release_date);
    $heroRating.text(mostPopular.vote_average);
    $heroSummary.text(mostPopular.overview);
    $movieID.text(mostPopular.id);

    if (mostPopular.adult != 'false') {
      $heroAge.text( 'Suitable for children' );
    } else {
      $heroAge.text( 'Not suitable for children' );
    }

    for ( var i = 0; i < movieCount; i++ ) {
      var movie = movieList[i];

      // console.log('https://image.tmdb.org/t/p/original' + movie.backdrop_path );

      $( '.js-grid-popular .grid' ).append( 
        '<div class="grid__item one-quarter">' +
          '<a href="" class="current-popular__item js-modal">' +
            '<div class="current-popular__item-image" style="background-image: url(https://image.tmdb.org/t/p/w500/' + movie.poster_path + ' )"></div>' +
            '<div class="current-popular__item-info">' +
              '<h2 class="current-popular__item-title">' + movie.title + '</h2>' +
              '<div class="current-popular__item-rating">' + movie.vote_average + '/10</div>' +
              '<div class="movie-id">' + movie.id + '</div>' +
              '<div class="current-popular__item-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.49 31.49"><path d="M21.205 5.007c-.43-.444-1.143-.444-1.587 0-.43.43-.43 1.143 0 1.57l8.047 8.048H1.11c-.618 0-1.11.493-1.11 1.112 0 .62.492 1.127 1.11 1.127h26.555l-8.047 8.032c-.43.444-.43 1.16 0 1.587.444.444 1.16.444 1.587 0l9.952-9.952c.444-.428.444-1.142 0-1.57l-9.952-9.953z" fill="#fff"/></svg></div>' +
            '</div>' +
            '<div class="current-popular__item-quick-rating">' + movie.vote_average + '/10</div>' +
          '</a>' +
        '</div>'
      );
    }
  }

  function popularMovies() {
    var searchURL = popular;
    retrieveMovies( searchURL );
  }

  function retrieveMovies( searchURL ) {
    $.ajax({
      'url': proxyUrl,
      'data': {
        'q': 'SELECT * FROM json WHERE url="' + searchURL + '"',
        'format': 'json',
        'jsonCompat': 'new',
       },

      'dataType': 'jsonp',

      'success': function(response) {

        // Set response vars
        var response      = response['query']['results']['json'];
            movieList     = response['results'];

        // Populate image list
        populatePopularMovies( movieList );

        // Populate search list
        populateSearchMovies( movieList );
        
        modal();
                
      },
    });
  }

  function bindEvents() {

    // Initial search
    $searchForm.on( 'submit', function () {
      searchMovies();
      return false;
    });

    // Initial search
    $(window).on( 'load', function () {
      popularMovies();
    });
  }

  bindEvents();

};









var modal = function() {

  var key                 = 'd69ac47b3abbdd090506891feaac1088',
      movieDB             = 'https://api.themoviedb.org/3/';

  function populateModal( response ) {

    var bgImage = 'https://image.tmdb.org/t/p/original' + response.backdrop_path,
        heroImage = 'url("' + bgImage + '")';

    $( '.modal__hero' ).css({
      'background-image' : heroImage,
    });

    $( '.modal__title' ).text( response.title );
    $( '.modal__summary' ).text( response.overview );

    history.replaceState(null, null, window.location.pathname + '?' + response.id)

  }

  function populateVideo( videoID ) {
    $( '.modal__video a' ).attr('href', "http://youtube.com/watch?v=" + videoID + "");
  }

  function showModal() {
    $( '.modal' ).fadeIn(300);
    $( '.home' ).fadeOut(300);
    $( '.home-wrapper' ).fadeOut(300)
    $( 'html, body' ).animate({
       scrollTop: $( 'body' ).offset().top
    }, 0);
  }

  function hideModal() {
    $( '.modal' ).fadeOut(300);
    $( '.home' ).fadeIn(300);
    $( '.home-wrapper' ).fadeIn(300)
  }

  function retrieveMovies( linkText ) {

    var searchURL = '' + movieDB + 'movie/' + linkText + '?api_key=' + key + '';
    var videoURL = '' + movieDB + 'movie/' + linkText + '/videos?api_key=' + key + '';

    $.ajax({
      'url': proxyUrl,
      'data': {
        'q': 'SELECT * FROM json WHERE url="' + searchURL + '"',
        'format': 'json',
        'jsonCompat': 'new',
       },

      'dataType': 'jsonp',

      'success': function(response) {

        // Set response vars
        var response      = response['query']['results']['json'];
            movieList     = response['results'];

        populateModal( response );
        showModal();

      },
    });

    $.ajax({
      'url': proxyUrl,
      'data': {
        'q': 'SELECT * FROM json WHERE url="' + videoURL + '"',
        'format': 'json',
        'jsonCompat': 'new',
       },

      'dataType': 'jsonp',

      'success': function(response) {

        // Set response vars
        var response      = response['query']['results']['json'];
            videoID       = response['results']['0']['key'];

        populateVideo(videoID);

      },
    });
  }

  $( '.hero__launch' ).on( 'click', function() {
    showModal();
  });

  $( '.site-header' ).on( 'click', function() {
    hideModal();
  });

  $( '.js-modal' ).on( 'click', function(e) {
    e.preventDefault();
    var link = $(this).closest( 'div' ).find( '.movie-id' );
    var linkText = link.text();

    retrieveMovies( linkText );

    // populateModal( link );
    // displayModal();
  });
}











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

$(document).ready(function () {
  movieSearch();
  homeImage();
});
