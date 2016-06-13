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
        console.log($("#street").val().length,$("#street2").val().length>0,$("#city").val().length,$("#state").val().length,$("#zip").val().length);
        if(($("#street").val().length>0 && $("#street2").val().length>0 && $("#city").val().length>0 && $("#state").val().length>0 && $("#zip").val().length>0 )){
          $('#2').fadeOut();
          $('#2').addClass("hidden");
          $('#3').removeClass("hidden");
          $('#3').fadeIn();
        }
        else{
          bootbox.dialog({
            message:"Please fill all the input feilds",
            title:"Alert",
            backdrop:true,
            onEscape:true
          });
        }
  			
  	},
  	'click #cancel':function(event){
  			event.preventDefault();
          bootbox.dialog({
            message:"Your booking has been Cancelled",
            title:"Booking Alert",
            backdrop:true,
            onEscape:true
          });
  				FlowRouter.go("userhome");
  	},
  	'click #confirm':function(event){
      event.preventDefault();
      			bootbox.dialog({
            message:"Your booking has been Confirmed",
            title:"Booking Alert",
            backdrop:true,
            onEscape:true
          });
          const address={
            street1:$("#street").val(), 
            street2:$("#street2").val(),  
            city:$("#city").val(),
            state:$("#state").val(),
            zip:$("#zip").val(),  
            };
          const booking={
            address:address,
            type:$('#type').val(),
            date:$('#datepicker').val()
            };
          Meteor.call("bookings",booking);
          FlowRouter.go("userhome");
  	}
});