const toggleAccordion = document.getElementById('toggleAccordion');
const openedAccordion = document.getElementById('openedAccordion');

toggleAccordion.addEventListener('click', () => {
	openedAccordion.classList.toggle('active');
});
