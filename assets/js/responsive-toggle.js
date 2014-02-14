//	Responsive Toggle v1.0, Copyright 2014, Joe Mottershaw, https://github.com/joemottershaw/
//	=========================================================================================

	$(document).ready(function() {
		// Initiate
			$('.toggle').each(function() {
				// Hide panels
					$('.toggle-panel', this).hide();

				// Set Expand/Collapse Icons
					$('.minus', this).hide();

				// Bind the click event handler
					$('.toggle-head').click(function(e) {
						// Toggle head
							$(this).toggleClass('active');

						// Toggle icons
							var thisPlus	=	$(this).find('.plus').toggle();
							var thisMinus	=	$(this).find('.minus').toggle();

						// Toggle panel
							$(this).next('.toggle-panel').toggleClass('active').slideToggle();
					});
			});
	});