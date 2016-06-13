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
	event.preventDefault();
	Meteor.call('updatePhone', event.target.form.phone.value);
	},
	'click #saveadd':function(event){
		event.preventDefault();
		var address ={
			"street":event.target.form.street.value,
			"street2":event.target.form.street2.value,
			"zip":event.target.form.zip.value,
			"suite":event.target.form.suite.value,
			"city":event.target.form.city.value,
			"state":event.target.form.state.value,
		}
		Meteor.call("updateAddress",address);
	}
});