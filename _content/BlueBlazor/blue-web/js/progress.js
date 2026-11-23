// src/js/progress.ts
window.blueWeb = window.blueWeb || {};
window.blueWeb.progress = { instances: /* @__PURE__ */ new Map([]) };
window.blueWeb.progress = {
	...window.blueWeb.progress,
	start: (id = "blueWebProgress", parent = document.body, ariaLabel = "Loading data", positionClass = "fixed-top") => {
		const parentEl = typeof parent === "string" || parent instanceof String ? document.querySelector(parent.toString()) : parent;
		let progressEl = document.getElementById(id);
		if (!progressEl) {
			progressEl = document.createElement("div");
			progressEl.id = id;
			progressEl.className = `progress ${positionClass} rounded-0`;
			progressEl.setAttribute("style", "--bs-progress-height: 0.25rem");
			progressEl.setAttribute("role", "progressbar");
			progressEl.setAttribute("aria-label", ariaLabel);
			progressEl.setAttribute("aria-valuemin", "0");
			progressEl.setAttribute("aria-valuemax", "100");
			progressEl.innerHTML = `<div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 0%"></div>`;
			parentEl.appendChild(progressEl);
		}
		const progressBar = progressEl.querySelector(".progress-bar");
		if (!progressBar) return;
		window.blueWeb.progress.instances.set(id, 0);
		var interval = setInterval(function() {
			let progress = window.blueWeb.progress.instances.get(id);
			var increment = Math.random() * (progress < 90 ? 5 : .1);
			progress += increment;
			progress = Math.min(progress, 99);
			window.blueWeb.progress.instances.set(id, progress);
			progressBar.style.width = progress + "%";
			progressEl?.setAttribute("aria-valuenow", Math.round(progress).toString());
			if (progress >= 100) clearInterval(interval);
		}, 200);
	},
	stop: (id = "blueWebProgress") => {
		const progressEl = document.getElementById(id);
		if (!progressEl) return;
		window.blueWeb.progress.instances.set(id, 100);
		setTimeout(() => {
			progressEl.remove();
		}, 500);
	}
};
window.blueWeb.progress;
