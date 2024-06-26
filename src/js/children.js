const childrenServicesContainer = document.querySelector("#childrenServicesContainer");
const childrenServices = document.querySelectorAll(".children-service");
const childrenServiceBtnsContainer = document.querySelector("#childrenServiceBtnsContainer");
const childrenServiceBtns = document.querySelectorAll(".children-service-btn");

childrenServiceBtns.forEach((btn, index) => {
	btn.addEventListener("click", (e) => {
		childrenServices[index].classList.remove("hidden");
		btn.classList.remove("opacity-50", "md:hover:opacity-70");
		switch (index) {
			case 0:
				childrenServiceBtns[index].classList.add("animate-[shadow-pulse-pink_3s_ease-in-out_infinite]");
				childrenServiceBtns[index + 1].classList.remove("animate-[shadow-pulse-emerald_3s_ease-in-out_infinite]");
				childrenServiceBtns[index + 1].classList.add("opacity-50", "md:hover:opacity-70");
				childrenServices[index + 1].classList.add("hidden");
				childrenServicesContainer.classList.add("border-pink-600");
				childrenServicesContainer.classList.remove("border-emerald-800");
				childrenServiceBtnsContainer.classList.replace("from-emerald-50", "from-pink-100");
				childrenServiceBtnsContainer.classList.replace("border-emerald-100", "border-pink-200");
				break;
			case 1:
				childrenServiceBtns[index].classList.add("animate-[shadow-pulse-emerald_3s_ease-in-out_infinite]");
				childrenServiceBtns[index - 1].classList.remove("animate-[shadow-pulse-pink_3s_ease-in-out_infinite]");
				childrenServiceBtns[index - 1].classList.add("opacity-50", "md:hover:opacity-70");
				childrenServices[index - 1].classList.add("hidden");
				childrenServicesContainer.classList.add("border-emerald-800");
				childrenServicesContainer.classList.remove("border-pink-600");
				childrenServiceBtnsContainer.classList.replace("from-pink-100", "from-emerald-50");
				childrenServiceBtnsContainer.classList.replace("border-pink-200", "border-emerald-100");
				break;
		}
	});
});
