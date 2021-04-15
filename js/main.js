// About Section Tabs
(()=>{
	const aboutSection = document.querySelector(".about-section"),
	tabsContainer = document.querySelector(".about-tabs");

	tabsContainer.addEventListener("click",(event)=>{
		/* If event.target contains 'tab-item' class and not contains 'active' class*/
		if(event.target.classList.contains("tab-item") && 
		!event.target.classList.contains("active")){

			// console.log("event.target contains 'tab-item' class and not contains 'active' class ");
			// console.log(event.target);
		const target = event.target.getAttribute("data-target");
			console.log(target);
			// deactive existing active 'tab-item '
			tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");

			// active new 'tab-item '
			event.target.classList.add("active","outer-shadow");

			// deactive existing active 'tab-content '
			aboutSection.querySelector(".tab-content.active").classList.remove("active");

			// active new 'tab-content'
			aboutSection.querySelector(target).classList.add("active");

		}
	})
})();