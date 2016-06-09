Template.userhome.rendered = function () {
  	$('.acc_tab').each(function(index) {
	    $(this).click(function(event) {
	        $('.acc-tab-body').hide();
	        $('.acc_tab').removeClass('active');
	        $(this).parent().find('a').first().addClass('active');
	        $('.acc-tab-body').eq(index).show();
	        return false;
	    });
	});
};
Template.userhome.events({
	'click #save':function(event){
		Meteor.call
	}
});