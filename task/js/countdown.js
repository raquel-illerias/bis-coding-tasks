const uiDataElements = [
	['12-25', 'my-element'],
	['01-01', 'my-element2'],
	['02-14', 'my-element3'],
];

function getDaysRemaining(date, id) {
	const currentDate = new Date();
	const targetDate = new Date(`${currentDate.getFullYear()}-${date}`);
	const millisecondsPerDay = 1000 * 60 * 60 * 24;

	if (currentDate > targetDate) {
		targetDate.setFullYear(currentDate.getFullYear() + 1);
	}

	const daysRemaining = Math.round(
		(targetDate.setHours(0, 0, 0, 0) - currentDate.setHours(0, 0, 0, 0)) /
			millisecondsPerDay
	);

	return (document.getElementById(id).innerText = daysRemaining);
}

uiDataElements.forEach((dataElement) => {
	getDaysRemaining(dataElement[0], dataElement[1]);
});
