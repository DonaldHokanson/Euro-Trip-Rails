var main;

main = function() {
	$('.burger-nav').on("click", function(){
		$('.mobile > ul').toggleClass('open');
	});

};



$(document).on('turbolinks:load', main);
