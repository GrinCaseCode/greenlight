$(document).ready(function() {


    // Функция проверки заполненности всех полей
    function checkFields() {
        let allFilled = true;

        $('.row_calculation input[required]').each(function() {
            if ($(this).val() === '') {
                allFilled = false;
                return false; // Выход из цикла each
            }
        });

        if (allFilled) {
            $('.calculation__more').slideDown(200);
        } else {
            $('.calculation__more').slideUp(200);
        }
    }

    // Проверка полей при изменении значений
    $('input[required]').on('input', function() {
        checkFields();
    });

    // Проверка полей при загрузке страницы
    checkFields();


// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.header').outerHeight();

$(window).scroll(function(event){
	didScroll = true;
});

setInterval(function() {
	if (didScroll) {
		hasScrolled();
		didScroll = false;
	}
}, 250);

function hasScrolled() {
	var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
    	return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
        	$('.header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

	//плавный скролл
	$(".navigat li a").mPageScroll2id();


	//кнопка sandwich
$(".sandwich_mobile").click(function() {
	if ($(".menu-mobile").is(":hidden")) {
		$(".menu-mobile").slideDown(200);
		$(".menu-overlay").fadeIn(200);
		$(this).addClass("active");
		$(".header").addClass("active");
	} else {
		$(".menu-mobile").slideUp(200);
		$(".menu-overlay").fadeOut(200);
		$(this).removeClass("active");
		$(".header").removeClass("active");
	}
});

$(".menu-overlay").click(function() {
	$(".menu-mobile").slideUp(200);
	$(".menu-overlay").fadeOut(200);
	$(".sandwich").removeClass("active");
	$(".header").removeClass("active");
});

$(".navigation__haschild > a").click(function(e) {
	e.preventDefault();
	$(this).parent().siblings().removeClass("active");
	$(this).parent().siblings().find("ul").slideUp(200);
	$(this).parent().toggleClass("active");
	$(this).siblings("ul").slideToggle(200);
	
});

	$(".open-search").click(function() {
		if ($(".header-search").hasClass("active")) {
			$(".header-search").removeClass("active");
		} else {
			$(".header-search").addClass("active");
		}
	});


	  $(document).mouseup(function (e) {
    var container = $(".header-search");
    if (container.has(e.target).length === 0){
     $(".header-search").removeClass("active");
    }
  });

	//слайдер

	$('.slider-marquee').slick({
		arrows: false,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 12000,
        autoplay: true,
		variableWidth: true,
        autoplaySpeed: 0, 
        cssEase: 'linear',
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16669 20C4.16669 12.5361 4.16669 8.80414 6.48542 6.4854C8.80416 4.16666 12.5361 4.16666 20 4.16666C27.4639 4.16666 31.1959 4.16666 33.5146 6.4854C35.8334 8.80414 35.8334 12.5361 35.8334 20C35.8334 27.4639 35.8334 31.1959 33.5146 33.5146C31.1959 35.8333 27.4639 35.8333 20 35.8333C12.5361 35.8333 8.80416 35.8333 6.48542 33.5146C4.16669 31.1959 4.16669 27.4639 4.16669 20Z" stroke="#02080A" stroke-width="1.5"/><path d="M23.3334 28.3333L17.2875 21.0412C16.8736 20.5419 16.6667 20.2923 16.6667 20C16.6667 19.7077 16.8736 19.4581 17.2875 18.9588L23.3334 11.6667" stroke="#02080A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16669 20C4.16669 12.5361 4.16669 8.80414 6.48542 6.4854C8.80416 4.16666 12.5361 4.16666 20 4.16666C27.4639 4.16666 31.1959 4.16666 33.5146 6.4854C35.8334 8.80414 35.8334 12.5361 35.8334 20C35.8334 27.4639 35.8334 31.1959 33.5146 33.5146C31.1959 35.8333 27.4639 35.8333 20 35.8333C12.5361 35.8333 8.80416 35.8333 6.48542 33.5146C4.16669 31.1959 4.16669 27.4639 4.16669 20Z" stroke="#02080A" stroke-width="1.5"/><path d="M16.6667 28.3333L22.7125 21.0412C23.1264 20.5419 23.3334 20.2923 23.3334 20C23.3334 19.7077 23.1264 19.4581 22.7125 18.9588L16.6667 11.6667" stroke="#02080A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><div/>',
	});

	$('.slider-cases').slick({
		arrows: true,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
				}
			}
			]
		});

	$(".item-dropdown__head").click(function() {
		$(this).parent().toggleClass("active");
		$(this).siblings().slideToggle(200);
		$(this).parent().siblings(".item-dropdown").removeClass("active");
		$(this).parent().siblings(".item-dropdown").find(".item-dropdown__content").slideUp(200);
	  });

	  jQuery('.tabs-wrap').each(function() {
		var currentTab = $(this);
		var initalTextTab = currentTab.find(".active a").html();
		currentTab.find(".btn-tab").html(initalTextTab);
}); 
$('.btn-tab').click(function() {
	$(this).toggleClass("active");
	$(this).siblings(".tabs-page").slideToggle(200);
	$('.tabs-page li a').click(function(event) {
		$(this).parent().parent().slideUp(200);
	}); 
}); 

	  $('.tabs-page li a').click(function(event) {
		event.preventDefault();
		var textTab = $(this).html();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(".tab-pane-page").fadeOut(0);
		var selectTab = $(this).attr("href");
		$(selectTab).fadeIn(200);
		$(this).parent().parent().siblings(".btn-tab").html(textTab);
		$(this).parent().parent().siblings(".btn-tab").removeClass("active");
	});

	$('.tabs-main li a').click(function(event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(".tab-pane-main").fadeOut(0);
		var selectTab2 = $(this).attr("href");
		$(selectTab2).fadeIn(200);
	});

	$(".input-phone").mask("+7 (999) 999-99-99");

	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'dHM'});


	 // стайлер для select
	 $('select').styler();

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox({
		autoFocus: false,
		backFocus: false,
	});


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	objectFitImages();


});


/*polifyl*/
  /*! npm.im/object-fit-images 3.2.4 */
  var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

