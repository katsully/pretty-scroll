$(document).ready(function(){
	// when the user scrolls
	var initialScrollPos = 0;

	// height() gives up height in pixels
	var heightOfViewport = $('body').height()/5;

	// array of colors!
	var colors = ["#8c14fc", "#f22613", "#81cfe0", "#26c281", "#2e3131"];
	var bannerText = ["My Jokes are Funny", "Section 2", "Section 3", "Section 4", "Section 5"];
	var sectionIndex = 0;


	$(window).on('scroll', function() {
		var currentScrollPos = $(this).scrollTop();
		// console.log(currentScrollPos);

		// initialScrollPos - how far up/down had you scrolled?
		// currentScrollPos - how far up/down are you currently scrolled?

		// numbers are going up - i'm scrolling down
		if(currentScrollPos > initialScrollPos) {
			// console.log("yea! scrolling downnnnnnn");
			// if i enter this if statment, user is entering a new section
			if($(window).scrollTop() > heightOfViewport*(sectionIndex+1)) {
				sectionIndex += 1;
				$(".banner").html(bannerText[sectionIndex]);
				$("body").css("background", colors[sectionIndex]);
				// $("body").css("background", "linear-gradient(red,blue)")
			} 
		// else statment tells us user is scrolling up
		} else {
			// if i enter this is statment the user is going back a section
			if($(window).scrollTop() <= heightOfViewport*(sectionIndex)) {
				sectionIndex -= 1;
				$(".banner").html(bannerText[sectionIndex]);
				$("body").css("background", colors[sectionIndex]);
			}
		}
		initialScrollPos = currentScrollPos;
	})
})