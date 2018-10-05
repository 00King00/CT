$(document).ready(function() {
$('select').niceSelect();
// pgs-panel

$('.pgs-nav ul').scrollbar();

// end pgs-panel
$(window).resize(function(){
	var browserMinWidth = $(window).width();
	if (browserMinWidth >= 800){
		$(".footer__list").show();
	}
	
});
$('.footer__title').click(function(){
	var browserMinWidth = $(window).width();
	console.log(browserMinWidth)
		if (browserMinWidth < 800){
			$(this).next('.footer__list').slideToggle("slow");
		}
	
});
	
});
