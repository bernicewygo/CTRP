$(function () { 
		// init
		var controller = new ScrollMagic.Controller();
		// get all slides
		var slides = document.querySelectorAll("section.panel");

		// create scene for every slide
		for (var i=0; i<slides.length; i++) {
			new ScrollMagic.Scene({
					triggerElement: slides[i],
					triggerHook: 'onLeave',
					duration: "100%"

				})
				.setPin(slides[i])
				.addTo(controller);
		}

		var scene = new ScrollMagic.Scene({
            triggerElement: "#animate1",
            triggerHook: 'onEnter',
            triggerOffset: 250
        })
	        .setTween("#animate1", .75, {scale: 2}) // trigger a TweenMax.to tween
	        .addTo(controller);		
	});