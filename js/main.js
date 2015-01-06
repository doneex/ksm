;(function(){

			$('#menuToggle, .menu-close').click(function() {
				$('#menuToggle').toggleClass('active');
				$('#theMenu').toggleClass('menu-open');
			});
			
			$('#toTop').click(function(){
			$('html, body').animate({scrollTop : 0},800);
			return false;
			});

})(jQuery)