const childrenServicesContainer = document.querySelector('#childrenServicesContainer');
const childrenServices = document.querySelectorAll(".children-service");
const childrenServiceBtns = document.querySelectorAll(".children-service-btn");

childrenServiceBtns.forEach((btn, index) => {
	btn.addEventListener("click", (e) => {

		childrenServices[index].classList.remove("hidden");

		switch (index) {
			case 0:
				childrenServices[index + 1].classList.add("hidden");
                childrenServicesContainer.classList.add('border-pink-600');
                childrenServicesContainer.classList.remove('border-emerald-800');
				break;
			case 1:
				childrenServices[index - 1].classList.add("hidden");
                childrenServicesContainer.classList.add('border-emerald-800');
                childrenServicesContainer.classList.remove('border-pink-600');
				break;
		}
	});
});
