$(function () { 
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

		// init
		var controller = new ScrollMagic.Controller();
		// get all slides
		var slides = document.querySelectorAll("section.panel");

		// create scene for every slide
		// for (var i=0; i<slides.length; i++) {
		// 	new ScrollMagic.Scene({
		// 			triggerElement: slides[i],
		// 			triggerHook: 'onLeave',

		// 		})
		// 		.setPin(slides[i])
		// 		.addTo(controller);
		// }

		var scene = new ScrollMagic.Scene({
            triggerElement: "#animate1",
            triggerHook: 'onEnter',
            triggerOffset: 250
        })
	        .setTween("#animate1", .75, {scale: 2}) // trigger a TweenMax.to tween
	        .addTo(controller);		
	});