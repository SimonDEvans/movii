!function($){$(document).ready(function(){})}(jQuery);var movieSearch=function(){function e(){var e=l.val(),a=e.replace(/\s/g,"%20"),i=""+movieDB+"search/movie?query="+a+"&api_key="+d;0==a.trim().length?console.log("nada"):(t(),n(i),o())}function t(){m.empty()}function o(){$("html,body").animate({scrollTop:$(".current-popular").offset().top-50},800)}function a(e){for(var t=e.length,o=0;o<t;o++){var a=e[o];$(".js-grid-home .grid").append('<div class="grid__item one-quarter"><a href="" class="current-popular__item js-modal"><div class="current-popular__item-image" style="background-image: url(https://image.tmdb.org/t/p/w500/'+a.poster_path+' )"></div><div class="current-popular__item-info"><h2 class="current-popular__item-title">'+a.title+'</h2><div class="current-popular__item-rating">'+a.vote_average+'/10</div><div class="movie-id">'+a.id+'</div><div class="current-popular__item-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.49 31.49"><path d="M21.205 5.007c-.43-.444-1.143-.444-1.587 0-.43.43-.43 1.143 0 1.57l8.047 8.048H1.11c-.618 0-1.11.493-1.11 1.112 0 .62.492 1.127 1.11 1.127h26.555l-8.047 8.032c-.43.444-.43 1.16 0 1.587.444.444 1.16.444 1.587 0l9.952-9.952c.444-.428.444-1.142 0-1.57l-9.952-9.953z" fill="#fff"/></svg></div></div><div class="current-popular__item-quick-rating">'+a.vote_average+"/10</div></a></div>")}}function i(e){var t=$(".hero__heading"),o=$(".hero__date span"),a=$(".hero__rating span"),i=$(".hero__age-rating"),r=$(".hero__summary");p=$(".hero .movie-id"),movieCount=8;var n=e[6],s="https://image.tmdb.org/t/p/original"+n.backdrop_path,l='url("'+s+'")';u.css({"background-image":l}),t.text(n.title),o.text(n.release_date),a.text(n.vote_average),r.text(n.overview),p.text(n.id),"false"!=n.adult?i.text("Suitable for children"):i.text("Not suitable for children");for(var c=0;c<movieCount;c++){var m=e[c];$(".js-grid-popular .grid").append('<div class="grid__item one-quarter"><a href="" class="current-popular__item js-modal"><div class="current-popular__item-image" style="background-image: url(https://image.tmdb.org/t/p/w500/'+m.poster_path+' )"></div><div class="current-popular__item-info"><h2 class="current-popular__item-title">'+m.title+'</h2><div class="current-popular__item-rating">'+m.vote_average+'/10</div><div class="movie-id">'+m.id+'</div><div class="current-popular__item-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.49 31.49"><path d="M21.205 5.007c-.43-.444-1.143-.444-1.587 0-.43.43-.43 1.143 0 1.57l8.047 8.048H1.11c-.618 0-1.11.493-1.11 1.112 0 .62.492 1.127 1.11 1.127h26.555l-8.047 8.032c-.43.444-.43 1.16 0 1.587.444.444 1.16.444 1.587 0l9.952-9.952c.444-.428.444-1.142 0-1.57l-9.952-9.953z" fill="#fff"/></svg></div></div><div class="current-popular__item-quick-rating">'+m.vote_average+"/10</div></a></div>")}}function r(){var e=popular;n(e)}function n(e){$.ajax({url:proxyUrl,data:{q:'SELECT * FROM json WHERE url="'+e+'"',format:"json",jsonCompat:"new"},dataType:"jsonp",success:function(e){var e=e.query.results.json;movieList=e.results,i(movieList),a(movieList),modal()}})}function s(){c.on("submit",function(){return e(),!1}),$(window).on("load",function(){r()})}var l=$(".home__search"),c=$(".home__form"),m=$(".current-popular .grid"),u=$(".hero"),p=$(".movie-id"),d="d69ac47b3abbdd090506891feaac1088";proxyUrl="https://query.yahooapis.com/v1/public/yql",movieDB="https://api.themoviedb.org/3/",popular=""+movieDB+"discover/movie?sort_by=popularity.desc&api_key="+d,s()},modal=function(){function e(e){var t="https://image.tmdb.org/t/p/original"+e.backdrop_path,o='url("'+t+'")';$(".modal__hero").css({"background-image":o}),$(".modal__title").text(e.title),$(".modal__summary").text(e.overview),history.replaceState(null,null,window.location.pathname+"?"+e.id)}function t(e){$(".modal__video a").attr("href","http://youtube.com/watch?v="+e)}function o(){$(".modal").fadeIn(300),$(".home").fadeOut(300),$(".home-wrapper").fadeOut(300),$("html, body").animate({scrollTop:$("body").offset().top},0)}function a(){$(".modal").fadeOut(300),$(".home").fadeIn(300),$(".home-wrapper").fadeIn(300)}function i(a){var i=""+n+"movie/"+a+"?api_key="+r,s=""+n+"movie/"+a+"/videos?api_key="+r;$.ajax({url:proxyUrl,data:{q:'SELECT * FROM json WHERE url="'+i+'"',format:"json",jsonCompat:"new"},dataType:"jsonp",success:function(t){var t=t.query.results.json;movieList=t.results,e(t),o()}}),$.ajax({url:proxyUrl,data:{q:'SELECT * FROM json WHERE url="'+s+'"',format:"json",jsonCompat:"new"},dataType:"jsonp",success:function(e){var e=e.query.results.json;videoID=e.results[0].key,t(videoID)}})}var r="d69ac47b3abbdd090506891feaac1088",n="https://api.themoviedb.org/3/";$(".hero__launch").on("click",function(){o()}),$(".site-header").on("click",function(){a()}),$(".js-modal").on("click",function(e){e.preventDefault();var t=$(this).closest("div").find(".movie-id"),o=t.text();i(o)})},homeImage=function(){function e(){$(".home__image").animate({opacity:1},600,function(){$(".home__image").animate({opacity:.6},600,function(){o++,o>t.length-1&&(o=0);var a=t[o];$(".home__image").css("background-image","url("+a+")"),$(".home__image").animate({opacity:1},600,function(){setTimeout(e,5e3)})})})}var t=Array("https://image.tmdb.org/t/p/original/PIXSMakrO3s2dqA7mCvAAoVR0E.jpg","https://image.tmdb.org/t/p/original/1jgulSytTJcATkGX8syGbD2glXD.jpg","https://image.tmdb.org/t/p/original/9X3cDZb4GYGQeOnZHLwMcCFz2Ro.jpg","https://image.tmdb.org/t/p/original/qXQinDhDZkTiqEGLnav0h1YSUu8.jpg","https://image.tmdb.org/t/p/original/cNLZ7YGRikb4IsLblrzu86ndZPw.jpg","https://image.tmdb.org/t/p/original/6bbZ6XyvgfjhQwbplnUh1LSj1ky.jpg","https://image.tmdb.org/t/p/original/dkMD5qlogeRMiEixC4YNPUvax2T.jpg"),o=0;setTimeout(e,5e3)};$(document).ready(function(){movieSearch(),homeImage()});var mobileMenu=function(){function e(){n.open||(i.addClass(r),n.open=!0)}function t(){n.open&&(i.removeClass(r),n.open=!1)}var o=$(".js-menu-open"),a=$(".js-menu-close"),i=$(".main-menu-container"),r="main-menu-container--open",n={open:!1};$(o).on("click",function(){e()}),$(a).on("click",function(){t()})};mobileMenu(),$(window).resize(function(){var e=function(){var e=$(".main-menu-container"),t="disable-transition",o="500";e.addClass(t),setTimeout(function(){e.removeClass(t)},o)}}),$(window).scroll(function(){var e=function(){var e=$(".site-header"),t=e.offset().top,o=e.outerHeight(!0),a=$(".main-menu-container"),i="main-menu-container--fixed";if(e.length){var r=t+o;$(window).scrollTop()>r?a.addClass(i):a.removeClass(i)}},t=function(){var e=$(".scroll-to-top"),t="scroll-to-top--show",o="500";$(window).scrollTop()>o?e.addClass(t):e.removeClass(t)}}),$(function(){$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html, body").animate({scrollTop:e.offset().top},800),!1}})});