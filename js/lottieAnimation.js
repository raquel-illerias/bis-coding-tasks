function loadLottieAnimation(containerId, animationPath) {
	return lottie.loadAnimation({
		container: document.getElementById(containerId),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: animationPath,
	});
}

const christmasTreeAnimation = loadLottieAnimation(
	'christmas-tree__animation',
	'../src/assets/animations/christmas-tree.json'
);
const serpentineAnimation = loadLottieAnimation(
	'serpentine-cone__animation',
	'../src/assets/animations/serpentine-cone.json'
);
const heartsAnimation = loadLottieAnimation(
	'hearts__animation',
	'../src/assets/animations/hearts.json'
);
