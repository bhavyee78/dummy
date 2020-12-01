$(document).ready(function() {
  var owl = $('.owl-carousel1');
  owl.owlCarousel({				
	nav: true,
	autoplay:true,
	autoplayTimeout:1000,
	autoplayHoverPause:true,
	loop: true,
	responsive: {
	  0: {
		items: 1
	  },
	  600: {
		items: 1
	  },
	  1000: {
		items: 1
	  }
	}
  })
  var owl2 = $('.owl-carousel2');
			  owl2.owlCarousel({
				nav: true,
				autoplay:true,
				autoplayTimeout:2000,
				autoplayHoverPause:true,
				loop: true,
				responsive: {
				  0: {
					items: 1
				  },
				  600: {
					items: 3
				  },
				  1000: {
					items: 4
				  }
				}
			  })
	 var owl3 = $('.owl-carousel3');
			  owl3.owlCarousel({				
				nav: true,
				autoplay:true,
				autoplayTimeout:2000,
				autoplayHoverPause:true,
				loop: true,
				responsive: {
				  0: {
					items: 1
				  },
				  600: {
					items: 1
				  },
				  1000: {
					items: 1
				  }
				}
			  })
	var owl4 = $('.owl-carousel4');
			  owl4.owlCarousel({				
				nav: true,
				autoplay:true,
				autoplayTimeout:2000,
				autoplayHoverPause:true,
				loop: true,
				responsive: {
				  0: {
					items: 1
				  },
				  600: {
					items: 2
				  },
				  1000: {
					items: 2
				  }
				}
			  })
			  "use strict";

			$('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
			//Checks if li has sub (ul) and adds class for toggle icon - just an UI


			$('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
			//Checks if drodown menu's li elements have anothere level (ul), if not the dropdown is shown as regular dropdown, not a mega menu (thanks Luka Kladaric)

			$(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\">MENU</a>");

			//Adds menu-mobile class (for mobile toggle menu) before the normal menu
			//Mobile menu is hidden if width is more then 959px, but normal menu is displayed
			//Normal menu is hidden if width is below 959px, and jquery adds mobile menu
			//Done this way so it can be used with wordpress without any trouble

			$(".menu > ul > li").hover(function (e) {
				if ($(window).width() > 943) {
					$(this).children("ul").stop(true, false).slideToggle(350);
					e.preventDefault();
				}
			});
			//If width is more than 943px dropdowns are displayed on hover

			$(".menu > ul > li").click(function () {
				if ($(window).width() <= 943) {
					$(this).children("ul").slideToggle(350);
				}
			});
			//If width is less or equal to 943px dropdowns are displayed on click (thanks Aman Jain from stackoverflow)

			$(".menu-mobile").click(function (e) {
				$(".menu > ul").toggleClass('show-on-mobile');
				e.preventDefault();
			});
			//when clicked on mobile-menu, normal menu is shown as a list, classic rwd menu story (thanks mwl from stackoverflow)

})
/************* Website JS **************/

		