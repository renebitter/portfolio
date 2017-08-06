(function ($) {
		  $(document).ready(function(){
		    
			// hide .navbar first
			$('.navbar').hide();
			
			// fade in .navbar
			$(function () {
				$(window).scroll(function () {
		            // set distance user needs to scroll before we fadeIn navbar
					if ($(this).scrollTop() > 900) {
		                $('.navbar').fadeIn();
		            } else {
		            	if($(this).scrollTop() + $(window).height() < $(document).height())
		                $('.navbar').fadeOut();
					}
				});

			
			});

		});
		  }(jQuery));		
