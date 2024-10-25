document.addEventListener('DOMContentLoaded', () => {
	anime({
		targets: 'header',
		opacity: [0, 1],
		translateY: [-50, 0],
		visibility: 'visible',
		duration: 1000,
		easing: 'easeOutQuad',
		begin: (anim) => {
			document.querySelector('header').style.visibility = 'visible';
		},
		complete: () => {
			anime({
				targets: '.countdown-element__container',
				opacity: [0, 1],
				translateY: [-20, 0],
				delay: anime.stagger(500),
				duration: 800,
				easing: 'easeOutQuad',
				begin: (anim) => {
					document
						.querySelectorAll('.countdown-element__container')
						.forEach((el) => {
							el.style.visibility = 'visible';
						});
				},
				complete: () => {
					anime({
						targets: 'footer',
						opacity: [0, 1],
						translateY: [50, 0],
						duration: 800,
						easing: 'easeOutQuad',
						begin: (anim) => {
							document.querySelector('footer').style.visibility = 'visible';
						},
					});
				},
			});
		},
	});
});
