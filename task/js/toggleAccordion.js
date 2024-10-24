const toggleAccordion = document.getElementById('toggleAccordion');
const openedAccordion = document.getElementById('openedAccordion');

toggleAccordion.addEventListener('click', () => {
	console.log('hi');
	openedAccordion.classList.toggle('active');
});
