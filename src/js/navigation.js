const toggler = (element, ...classes) => {
	for (const classElement of classes) {
		element.classList.toggle(classElement);
	}
};

const scrollActionMenu = () => {
	let lastScrollTop = 0;

	window.addEventListener("scroll", () => {
		let currentScroll = window.scrollY || document.documentElement.scrollTop;
		const headerFixed = document.querySelector("#headerFixed");

		if (currentScroll > lastScrollTop) {
			headerFixed.classList.replace("translate-y-0", "-translate-y-full");
		} else {
			headerFixed.classList.replace("-translate-y-full", "translate-y-0");
		}

		lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
	});
};

const activeDropdown = () => {
	const dropdown = window.innerWidth >= 1280 ? document.querySelectorAll("#menuDesktop .dropdown") : document.querySelectorAll("#menu .dropdown");

	for (const dropdownElement of dropdown) {
		const dropdownMainLink = dropdownElement.querySelector(".dropdown a");
		const dropdownLinks = dropdownElement.querySelector(".dropdown-links");
		const dropdownIcon = dropdownElement.querySelector("i");

		if (window.innerWidth >= 1280) {
			dropdownElement.addEventListener("mouseenter", () => {
				dropdownMainLink.classList.add("text-pink-500");
				dropdownLinks.classList.replace("*:opacity-0", "*:opacity-100");
				dropdownLinks.classList.replace("scale-y-0", "scale-y-100");
				dropdownIcon.classList.replace("rotate-0", "-rotate-180");
				dropdownLinks.classList.add("shadow");
			});

			dropdownElement.addEventListener("mouseleave", () => {
				dropdownMainLink.classList.remove("text-pink-500");
				dropdownLinks.classList.replace("*:opacity-100", "*:opacity-0");
				dropdownLinks.classList.replace("scale-y-100", "scale-y-0");
				dropdownIcon.classList.replace("-rotate-180", "rotate-0");
				dropdownLinks.classList.remove("shadow");
			});
		} else {
			dropdownElement.addEventListener("click", () => {
				toggler(dropdownLinks, "hidden");
				toggler(dropdownIcon, "rotate-0", "-rotate-180");
			});
		}
	}
};

const mobileMenu = () => {
	const menuTrigger = document.querySelector("#menuTrigger");
	const menuTriggerIcons = menuTrigger.querySelectorAll("i");
	const menu = document.querySelector("#menu");
	const menuList = document.querySelector("#menu ul");

	menuTrigger.addEventListener("click", () => {
		const currentAriaLabel = menuTrigger.getAttribute("aria-label");
		const ariaLabel = currentAriaLabel === "Ouvrir le menu" ? "Fermer le menu" : "Ouvrir le menu";
		menuTrigger.setAttribute("aria-label", ariaLabel);
		toggler(menuList, "opacity-0", "opacity-100");
		toggler(menu, "scale-y-0", "scale-y-100");

		for (let icon of menuTriggerIcons) {
			toggler(icon, "!opacity-0", "opacity-100", "rotate-0", "rotate-90");
		}

		activeDropdown();
	});
};

const desktopMenu = () => {
	activeDropdown();
};

const activeMenu = () => {
	window.innerWidth >= 1280 ? desktopMenu() : mobileMenu();
};

window.addEventListener("resize", () => {
	activeMenu();
});

activeMenu();
scrollActionMenu();
