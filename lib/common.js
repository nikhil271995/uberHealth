$(document).ready(function() {
	$('.slider').slick();


	$('.tab').click(function(){

	    if ( $(this).hasClass('active')) {

	        $(this).parent().find(".content").stop().slideUp();
	        $(this).removeClass('active');

	    }

	    else{

	        $('.tab').removeClass('active');
	        $('.content').slideUp();

	        $(this).parent().find('.content').stop().slideToggle();
	        $(this).addClass('active');
	    }
	
	    
	});



//		slider

	$( ".drop" ).selectmenu();

	$( "#speed" ).selectmenu();
	$( "#time" ).selectmenu();
	$( "#datepicker" ).datepicker();


    $('#slider').slick({ 
      slidesToShow: 3,
      slidesToScroll: 3,
     responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	      }
	  },
	  {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	      }
	  }
	]
    });



//    		Header mobile

	$('.hamburger').click(function(){
		$('.navbar').slideToggle();
		$('.hamburger').stop().toggleClass('active');
	});


	$('a[href^="#"]').click(function() {
		$('html,body').animate({ scrollTop: $(this.hash).offset().top}, 500);
		return false;
		e.preventDefault();
	});



			// About Us		


		$('.abt_tab').each(function(index) {

	        $(this).click(function(event) {
	            $('.tab-body').fadeOut();
	            $('.abt_tab').removeClass('active');
	            $(this).parent().find('a').first().addClass('active');
	            $('.tab-body').eq(index).fadeIn();
	            return false;
	        });
	        
	    });

			
		//			Form steps booking

	    	$('.card-tabs .tab').each(function(index) {

	            $(this).click(function(event) {
	                $('.card-content').fadeOut();
	                $('.card-tabs .tab').removeClass('active');
	                $(this).parent().find('a').first().addClass('active');
	                $('.card-content').eq(index).fadeIn();
	                return false;
	            });
	            
	        });
});
