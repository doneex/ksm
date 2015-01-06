$(document).ready(function() {
    $(window).resize(function() {
    	if($(window).width() < 1100) { 
    		$('#smallnav').fadeIn('.dino'); 
    		$('#theMenu').fadeOut('.dino');
    	} else {
    		$('#smallnav').fadeOut('.dino'); 
    		$('#theMenu').fadeIn('.dino');
    	}
    });
});

$(document).ready(function() {
if($(window).width() < 1100) {
			$('#smallnav').fadeIn('.dino'); 
    		$('#theMenu').fadeOut('.dino');
    	} else {
    		$('#smallnav').fadeOut('.dino'); 
    		$('#theMenu').fadeIn('.dino');
    	}
});