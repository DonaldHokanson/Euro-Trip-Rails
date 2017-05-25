var main;

main = function() {
	$('.burger-nav').on("click", function(){
		$('.mobile > ul').toggleClass('open');
	});

};


$(document).ready(main);
$(document).on('page:load', main);
