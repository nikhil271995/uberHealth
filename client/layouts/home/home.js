Template.home.rendered = function () {
  	$('.slider').slick();
	$(".drop").selectmenu();
	$("#speed").selectmenu();
	$("#time").selectmenu();
	$("#datepicker").datepicker();
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
};
Template.home.events({
	'click .tab':function(){
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
	},
	'click .hamburger':function(){
		$('.navbar').slideToggle();
		$('.hamburger').stop().toggleClass('active');
	},
	'click a[href^="#"]':function(){
		$('html,body').animate({ scrollTop: $(this.hash).offset().top}, 500);
		return false;
		e.preventDefault();
	},
	'click .card-tabs .tab':function(index){
		$(this).click(function(event) {
            $('.card-content').fadeOut();
            $('.card-tabs .tab').removeClass('active');
            $(this).parent().find('a').first().addClass('active');
            $('.card-content').eq(index).fadeIn();
            return false;
        });
  	}
});