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
  	},
  	'click #apply':function(event){
		event.preventDefault();
		var add=event.target.form;
		console.log(add.email.value,add.first_name,add.last_name,add.phone,add.zip);
		if (add.email.value.length>0 && add.first_name.value.length>0 && add.last_name.value.length>0 && add.phone.value.length>0 && add.zip.value.length>0)
		{
			const profile={
				email:add.email.value,
				first_name:add.first_name.value,
				last_name:add.last_name.value,
				phone:add.phone.value,
				zip:add.zip.value,
				info:add.info.value,
				gender:add.gender.value
			};
			Meteor.call("apply",profile,function(err,data){
				if(err)
				{
					console.log(err);
				}
				else{
					bootbox.dialog({
			            message:"Profile Created",
			            title:"New Profile",
			            backdrop:true,
			            onEscape:true
			          });
					console.log("result",data);
				}
			});
		}
		else{
			bootbox.dialog({
            message:"Please Fill all the details",
            title:"New Profile",
            backdrop:true,
            onEscape:true
          });

		}
	},
	'click .hvr-sweep-to-right':function(event){
		event.preventDefault();
		FlowRouter.go("login");
		bootbox.dialog({
            message:"Please FLogin to Continue",
            title:"Booking Alert",
            backdrop:true,
            onEscape:true
          });
	}
});