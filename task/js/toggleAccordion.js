const toggleAccordions = document.querySelectorAll('.toggleAccordion');

toggleAccordions.forEach((toggleAccordion) => {
	toggleAccordion.addEventListener('click', function () {
		const openedAccordion = this.nextElementSibling;
		openedAccordion.classList.toggle('active');
	});
});
