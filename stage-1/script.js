function getDaysRemaining1() {
	const currentDate = new Date();
	const targetDate = new Date('2024-12-25');

	const daysRemaining = Math.round(
		(targetDate.setHours(0, 0, 0, 0) - currentDate.setHours(0, 0, 0, 0)) /
			(1000 * 60 * 60 * 24)
	);

	const daysRemainingElement = document.getElementById('my-element');
	daysRemainingElement.innerText = daysRemaining;
}

function getDaysRemaining2() {
	const currentDate = new Date();
	const targetDate = new Date('2025-01-01');

	const daysRemaining = Math.round(
		(targetDate.setHours(0, 0, 0, 0) - currentDate.setHours(0, 0, 0, 0)) /
			(1000 * 60 * 60 * 24)
	);

	const daysRemainingElement = document.getElementById('my-element2');
	daysRemainingElement.innerText = daysRemaining;
}

getDaysRemaining1();
getDaysRemaining2();
