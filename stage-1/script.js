const uiDataElements = [
	['2024-12-25', 'my-element'],
	['2025-01-01', 'my-element2'],
];

function getDaysRemaining(date, id) {
	const millisecondsPerDay = 1000 * 60 * 60 * 24;

	const daysRemaining = Math.round(
		(new Date(date).setHours(0, 0, 0, 0) - new Date().setHours(0, 0, 0, 0)) /
			millisecondsPerDay
	);

	return (document.getElementById(id).innerText = daysRemaining);
}

uiDataElements.forEach((dataElement) => {
	getDaysRemaining(dataElement[0], dataElement[1]);
});
