(function($) {
    var	$window = $(window)

	// Dropdowns.
		$('#nav > ul').dropotron({
			alignment: 'right',
			hideDelay: 400
		});

	// Header.
		if ($('#banner').length > 0
		&&	$('#header').hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$("#banner").scrollex({
				bottom:		$('#header').outerHeight() + 5,
				terminate:	function() { $('#header').removeClass('alt'); },
				enter:		function() { $('#header').addClass('alt'); },
				leave:		function() { $('#header').removeClass('alt'); $('#header').addClass('reveal'); }
			});

		}
})(jQuery);