$(function(){
	$('.pic-stars .fa-star').mouseover(function(e){
		stars = $(e.target).parent().find('.fa-star');
		for(var i=0; i<stars.length; i++){
			$(stars[i]).addClass('myHover');
			if(stars[i] == e.target){ break; }
		}
	});

	$('.fa-star').mouseout(function(e){
		$(e.target).parent().find('.fa-star').removeClass('myHover');
	});
});