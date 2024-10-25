const toggleAccordions = document.querySelectorAll('.toggleAccordion');

toggleAccordions.forEach((toggleAccordion) => {
	toggleAccordion.addEventListener('click', function () {
		const openedAccordion = this.nextElementSibling;
		const rotatedArrow = this.lastElementChild;
		openedAccordion.classList.toggle('active');
		rotatedArrow.classList.toggle('active');
	});
});
