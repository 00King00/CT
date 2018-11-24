$(document).ready(function() {
$('select').niceSelect();
// pgs-panel

$('.pgs-nav ul').scrollbar();

// end pgs-panel

//for footer
$(window).resize(function(){
	var browserMinWidth = window.innerWidth;
	if (browserMinWidth >= 800){
		$(".footer__list").show();
	}
	else {
		$('.filters-select-col').removeClass("active")
	}
	if (browserMinWidth < 1024){
			if($(".model-selection_grey").hasClass("fixed")){
				$(".model-selection_grey").removeClass("fixed")
			}

	}
	if (browserMinWidth > 1024 && browserMinWidth<1100){
		$(".show-4").removeClass("active")
		$('.filters-select-col').addClass("active")
		$(".show-4").hide()
		$(".show-3").hide()
	}
	else {
		$(".show-4").show()
		$(".show-3").show()
	}
});
$('.footer__title').click(function(){
	var browserMinWidth = $(window).width();
	console.log(browserMinWidth)
		if (browserMinWidth < 800){
			$(this).next('.footer__list').slideToggle("slow");
		}

});
// end for footer

// input-mask
	$('input[type="tel"]').inputmask('+7(999) 999 - 99 - 99');
// end input-mask

//add item to favorites
$('.add-to-fav').click(function(){
	$(this).toggleClass('active')
});

	var last_seen_slider=$('#last-seen-slider').lightSlider({
			slideMargin: 25,
			item: 4,
			slideMove:1,
			pager: false,
			addClass: '',
			mode: "slide",
			useCSS: true,
			cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
			easing: 'linear', //'for jquery animation',////
			speed: 400, //ms'
			auto: true,
			loop: true,
			slideEndAnimation: true,
			pause: 10000,
			controls: false,
			responsive:[
				{
					breakpoint: 1200,
					settings:
						{
							item:3,
							slideMove:1,
						}
				},
				{
					breakpoint: 800,
					settings:
						{
							item:2,
							slideMove:1,
						}
				},
				{
					breakpoint: 600,
					settings:
						{
							item:2,
							slideMove:1,
							slideMargin: 3,

						}
				},
				],
		});
		$("#last-seen .ls-prevSlide").click(function(){
			last_seen_slider.goToPrevSlide();
		});
		$("#last-seen .ls-nextSlide").click(function(){
			last_seen_slider.goToNextSlide();
		});
	var recommend_slider=$('#recommend-slider').lightSlider({
			slideMargin: 25,
			item: 4,
			slideMove:1,
			pager: false,
			addClass: '',
			mode: "slide",
			useCSS: true,
			cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
			easing: 'linear', //'for jquery animation',////
			speed: 400, //ms'
			auto: true,
			loop: true,
			slideEndAnimation: true,
			pause: 10000,
			controls: false,
			responsive:[
				{
					breakpoint: 1200,
					settings:
						{
							item:3,
							slideMove:1,
						}
				},
				{
					breakpoint: 800,
					settings:
						{
							item:2,
							slideMove:1,
						}
				},
				{
					breakpoint: 600,
					settings:
						{
							item:1.2,
							slideMove:1,
							slideMargin: 35,

						}
				},
				],
		});
		$(".ls-prevSlide.recommend-slider").click(function(){
			recommend_slider.goToPrevSlide();
		});
		$(".ls-nextSlide.recommend-slider").click(function(){
			recommend_slider.goToNextSlide();
		});
	var review_slider = $("#review-slider").lightSlider({
			slideMargin: 60,
			galleryMargin: 55,
			item: 2.25,
			slideMove:1,
			pager: true,
			addClass: '',
			mode: "slide",
			useCSS: true,
			cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
			easing: 'linear', //'for jquery animation',////
			speed: 400, //ms'
			auto: true,
			loop: true,
			slideEndAnimation: true,
			pause: 10000,
			controls: true,
			responsive:[

				{
					breakpoint: 600,
					settings:
						{
							item:1.2,
							slideMove:1,
							slideMargin: 35,
							controls: false,

						}
				},
				],
		});
		$("#review-slider_wrapper .ls-prevSlide").click(function(){
			review_slider.goToPrevSlide();
		});
		$("#review-slider_wrapper .ls-nextSlide").click(function(){
			review_slider.goToNextSlide();
		});
	var product_cardSlider = $("#product_card-slider").lightSlider({
		enableDrag: true,
		gallery:true,
		currentPagerPosition: 'middle',
		item: 1,
		slideMove:1,
		thumbItem:5,
		useCSS: true,
		cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
		easing: 'linear', //'for jquery animation',////
		speed: 400, //ms'
		auto: true,
		loop: true,
		slideEndAnimation: true,
		pause: 10000,
		controls: true,
		responsive:[
			{
				breakpoint: 600,
				settings:
					{
						thumbItem:3,
					}
			}
		]
	})
	// for tabs
	$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
	$(this)
	  .addClass('active').siblings().removeClass('active')
	  .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });

	// show-hide filters
		$('#show-filter-mobile').click(function(){
			$(".filters").addClass('filters_active');
			$('.backdrop').toggleClass('on');
			$('body').toggleClass('no-scroll');
		})
		$('.filters__close-btn').click(function(){
			$(".filters").removeClass('filters_active');
			$('.backdrop').toggleClass('on');
			$('body').toggleClass('no-scroll');
		})
	// end show-hide filters
	$(".fancybox").fancybox({
	 toolbar  : true,
	 thumbs: {
		autoStart: true, // Display thumbnails on opening
		},
		afterLoad : function( instance, slide ) {
		    console.info( slide.$content );
		  }
  });
	//product_card script
	$(".flex-column__thumbnail .fancybox").mouseover(function(){
		var src = $(this).prop('href');
		var srcChild = $(this).children().prop('src');
		$(".flex-column__main .fancybox").prop('href', src)
		$(".flex-column__main .fancybox").children().prop('src', srcChild)
	});
	$(".product_card-menu li").click(function(){
		$(".product_card-menu li").removeClass("active");
		$(this).addClass("active")
	});
	//end product_card script
	//close modal window
	$(".close-btn").click(function(){
		$(".fixed-overlay").removeClass('active');
	});
	$(".fixed-overlay__modal input[type='submit']").click(function(){
		$(".fixed-overlay").removeClass('active');
	});
	$(".fixed-overlay").click(function(e){
		var elem = $(".modal");
			if (!elem.is(e.target) && elem.has(e.target).length === 0) elem.parent().removeClass('active');
	});
	//open modal window
	$(".btn btn_left-comments").click(function(){
		var browserMinWidth = window.innerWidth;
		if (browserMinWidth >= 800){
			$(".fixed-overlay.review-modal").addClass('active');
		}
	});
	$(".btn_add-to-card").click(function(){
		var browserMinWidth = window.innerWidth;
		if (browserMinWidth >= 800){
			$(".fixed-overlay.fast-cart-modal").addClass('active');
		}
	});
	$(".btn_left-comments").click(function(e){
		e.preventDefault()
		$(".fixed-overlay.form-label-modal").addClass('active');
	});

	$(".one-click-buy").click(function(){
		var browserMinWidth = window.innerWidth;
		if (browserMinWidth >= 800){
			$(".fixed-overlay.fast-order-modal").addClass('active');
		}
	});
	//change number column
	$(".show-3").click(function(){
		$(".show-4").removeClass("active")
		$('.filters-select-col').addClass("active")
		$(this).addClass("active")
	})
	$(".show-4").click(function(){
		$(".show-3").removeClass("active")
		$('.filters-select-col').removeClass("active")
		$(this).addClass("active")
	})
	//show menu parts
	if (window.location.pathname == '/product_card.html'){
		var menu_pos = $('.product_card-menu').offset().top + 50;
	}
	if (window.location.pathname == '/choice-of-model.html'){
		var filterPos = $('.model-selection_grey').offset().top;
	}
	if (window.location.pathname == '/catalog.html'){
		var pos_top = $('.section-product-catalog').offset().top;
	}
$(window).scroll(function(){
		var browserMinWidth = window.innerWidth;
		var scrollTop = $('body').scrollTop();

		if(scrollTop > pos_top){
			$(".parts-menu").addClass("active")
		}
		else {
			$(".parts-menu").removeClass("active")
		}
		if(scrollTop > menu_pos){
			$(".product_card-menu").addClass("fixed")
		}
		else {
			$(".product_card-menu").removeClass("fixed")
		}
		console.log(browserMinWidth);
		if (browserMinWidth > 1024){
			if(scrollTop > filterPos-3){
				$(".model-selection_grey").addClass("fixed")
				$('body').addClass("pt-106");
			}
			else {
				$(".model-selection_grey").removeClass("fixed")
				$('body').removeClass("pt-106");
			}
		}
	});


	// scroll to anchor

	$(".product_card-menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top - 50;

		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
		//this part for rating
		$(".rating").mousemove(function(e){
			if($(".rating").hasClass("rated")){
				return false;
			}
			var offset = $(this).offset();
			coords = e.pageX - offset.left;
			var ratingWidth = $(this).width();
			star = ratingWidth/5;
			var rating = Math.round((coords+(star*0.25))/(star*0.5));
			var stars_width =rating*10 + "%";

			$(".rating-hover").css("width",stars_width);
		});
		$(".rating").mouseleave(function(){
			if($(this).hasClass("rated")){
				return false;
			}
			$(".rating-hover").css("width",0);
		});
		$(".rating").click(function(e){
			var offset = $(this).offset();
			coords = e.clientX - offset.left;
			var ratingWidth = $(this).width();
			star = ratingWidth/5;
			var rating = Math.round((coords+(star*0.25))/(star*0.5));
			var stars_width =rating*10 + "%";
			$('.rating>input').attr('value',rating/2);
			$(".rating-hover").css("width",stars_width);
			$(this).addClass("rated")
			console.log(rating);
		});

	/// mobile-menu
	$('.sub-menu-mobile').hide();
	$('.main-menu-mobile ul li span').click(function() {
		var $more = $(this).siblings('.sub-menu-mobile');
			if ($more.is(':hidden')) {
				$more.slideDown();
				$(this).parent('li').addClass('active');
				$(this).siblings('i').addClass('active');
			} else {
				$more.slideUp();
				$(this).parent('li').removeClass('active');
				$(this).siblings('i').removeClass('active');
			}
		$(this).children('.circle-plus').toggleClass('opened');
	})
	//burger buttons and menu
	$('.bars').click(function(){
		$(this).toggleClass('active');
		// $(".main-menu-mobile").animate(
		// 	{height: 'toggle'},
		// 	{duration:500}
		// );
		$(".main-menu-mobile").toggleClass('active')
	})
	$(".btn_up").click(function(){
		$("body").animate({scrollTop:0}, '500');
	});
	//show-hide filters
		$('.btn_show-filter').click(function(){
			$(".filters").addClass('filters_active');
			$('.backdrop').toggleClass('on');
			$('body').toggleClass('no-scroll');
		})
		$('.filters__close-btn').click(function(){
			$(".filters").removeClass('filters_active');
			$('.backdrop').toggleClass('on');
			$('body').toggleClass('no-scroll');
		})
});
