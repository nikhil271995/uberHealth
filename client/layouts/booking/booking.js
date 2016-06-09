Template.booking.rendered = function () {
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
Template.booking.events({
  	'click #go1':function(event){
  			event.preventDefault();
  			$('#1').fadeOut();
  			$('#1').addClass("hidden");
  			$('#2').removeClass("hidden");
  			$('#2').fadeIn();
  	},
  	'click #go2':function(event){
  			event.preventDefault();
  			$('#2').fadeOut();
  			$('#2').addClass("hidden");
  			$('#3').removeClass("hidden");
  			$('#3').fadeIn();
  	},
  	'click #cancel':function(event){
  			event.preventDefault();
  			if($('#street').val() && $('#street2').val() && $('#city').val() && $('#state').val() && $('#zip').val())
  			{
  				$('#3').fadeOut();
  				$('#3').addClass("hidden");
  				$('#1').removeClass("hidden");
  				$('#1').fadeIn();
  			}
  	},
  	'click #confirm':function(event){
  			alert("Booking Confirmed");
  			$('#2').fadeOut();
  			$('#2').addClass("hidden");
  			$('#3').removeClass("hidden");
  			$('#3').fadeIn();
  	}
});