Template.aboutus.rendered = function () {
  	$("#speed").selectmenu();
	$("#time").selectmenu();
	$("#datepicker").datepicker();
};
Template.aboutus.events({
	'click .hamburger':function(){
		$('.navbar').slideToggle();
		$('.hamburger').stop().toggleClass('active');
	},
	'click a[href^="#"]':function(){
		$('html,body').animate({ scrollTop: $(this.hash).offset().top}, 500);
		return false;
		e.preventDefault();
	}
});