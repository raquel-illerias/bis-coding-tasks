const uiDataElements = [
	['2024-12-25', 'my-element'],
	['2025-01-01', 'my-element2'],
	['2024-02-14', 'my-element3'],
];

function calculateDaysDifference(date, id) {
	const millisecondsPerDay = 1000 * 60 * 60 * 24;

	const daysDifference = Math.abs(
		Math.round(
			(new Date(date).setHours(0, 0, 0, 0) - new Date().setHours(0, 0, 0, 0)) /
				millisecondsPerDay
		)
	);

	return (document.getElementById(id).innerText = daysDifference);
}

uiDataElements.forEach((dataElement) => {
	calculateDaysDifference(dataElement[0], dataElement[1]);
});
