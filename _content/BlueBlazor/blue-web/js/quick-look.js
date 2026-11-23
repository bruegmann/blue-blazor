import { dialog } from "@ui-sdk/core/dialog";
import { createParts, wrappedButton } from "@ui-sdk/web";
// src/js/quick-look.ts
var instances = /* @__PURE__ */ new Map();
var returnTargets = /* @__PURE__ */ new WeakMap();
function ownedPart(root, selector) {
	return [...root.querySelectorAll(selector)].find((part) => part.closest("bl-quick-look") === root);
}
function bindHover(root, api) {
	const document = root.ownerDocument;
	const listeners = new AbortController();
	const options = { signal: listeners.signal };
	let openTimer;
	let closeTimer;
	let hoverOpen = false;
	let blockedUntilExit = false;
	let triggerBounds;
	let pointer;
	instances.set(root, api);
	const containsPoint = (rect, point) => rect !== void 0 && point.clientX >= rect.left && point.clientX <= rect.right && point.clientY >= rect.top && point.clientY <= rect.bottom;
	const eventPart = (event, selector) => {
		const target = event.target;
		if (!(target instanceof Element)) return;
		const part = target.closest(selector);
		if (part?.closest("bl-quick-look") === root) return part;
	};
	const anyOpen = () => [...instances].some(([element, instance]) => element.ownerDocument === document && instance.isOpen());
	const cancelOpen = () => {
		clearTimeout(openTimer);
		openTimer = void 0;
	};
	const cancelClose = () => {
		clearTimeout(closeTimer);
		closeTimer = void 0;
	};
	const activate = () => {
		cancelOpen();
		cancelClose();
		hoverOpen = false;
	};
	const scheduleClose = () => {
		if (!hoverOpen || closeTimer !== void 0) return;
		closeTimer = setTimeout(() => {
			closeTimer = void 0;
			if (hoverOpen) api.close();
		}, 250);
	};
	root.addEventListener("pointerover", (event) => {
		if (event.pointerType !== "mouse" || blockedUntilExit || anyOpen()) return;
		const trigger = eventPart(event, "bl-quick-look-trigger");
		if (!trigger) return;
		const button = wrappedButton(trigger);
		if (!button) throw new Error("Quick Look trigger requires a native button or link.");
		if (event.relatedTarget instanceof Node && button.contains(event.relatedTarget)) return;
		if (button.matches(":disabled, [aria-disabled=\"true\"]")) return;
		pointer = event;
		cancelOpen();
		triggerBounds = button.getBoundingClientRect();
		openTimer = setTimeout(() => {
			openTimer = void 0;
			if (!button.isConnected || button.closest("bl-quick-look") !== root || button.matches(":disabled, [aria-disabled=\"true\"]") || anyOpen()) return;
			if (!ownedPart(root, "bl-quick-look-content")) throw new Error("Quick Look requires a bl-quick-look-content part.");
			triggerBounds = button.getBoundingClientRect();
			returnTargets.set(root, button);
			hoverOpen = true;
			api.setOpen(true);
			if (!api.isOpen()) hoverOpen = false;
		}, 500);
	}, options);
	root.addEventListener("pointerout", (event) => {
		const trigger = eventPart(event, "bl-quick-look-trigger");
		const button = trigger && wrappedButton(trigger);
		if (button && !(event.relatedTarget instanceof Node && button.contains(event.relatedTarget))) cancelOpen();
	}, options);
	root.addEventListener("click", (event) => {
		if (!eventPart(event, "bl-quick-look-trigger")) return;
		returnTargets.delete(root);
		activate();
	}, {
		...options,
		capture: true
	});
	for (const type of ["pointerdown", "keydown"]) root.addEventListener(type, (event) => {
		if (eventPart(event, "bl-quick-look-content")) activate();
	}, {
		...options,
		capture: true
	});
	document.addEventListener("pointermove", (event) => {
		if (event.pointerType !== "mouse") return;
		pointer = event;
		const overTrigger = containsPoint(triggerBounds, event);
		if (!overTrigger) blockedUntilExit = false;
		if (!hoverOpen) return;
		const content = ownedPart(root, "bl-quick-look-content");
		if (overTrigger || containsPoint(content?.getBoundingClientRect(), event)) cancelClose();
		else scheduleClose();
	}, {
		...options,
		capture: true
	});
	document.addEventListener("pointerout", (event) => {
		if (event.relatedTarget !== null) return;
		pointer = void 0;
		blockedUntilExit = false;
		cancelOpen();
		scheduleClose();
	}, options);
	root.addEventListener("openchange", () => {
		cancelOpen();
		cancelClose();
		queueMicrotask(() => {
			if (listeners.signal.aborted || api.isOpen()) return;
			hoverOpen = false;
			blockedUntilExit = pointer !== void 0 && containsPoint(triggerBounds, pointer);
		});
	}, options);
	return () => {
		listeners.abort();
		activate();
		instances.delete(root);
		returnTargets.delete(root);
	};
}
var { Root: QuickLook, Trigger: QuickLookTrigger, Backdrop: QuickLookBackdrop, Content: QuickLookContent, Title: QuickLookTitle, Description: QuickLookDescription, Close: QuickLookClose } = createParts(dialog, {
	root: {
		tag: "bl-quick-look",
		display: "contents",
		state: { open: {
			get: (api) => api.isOpen(),
			set: (api, value) => api.setOpen(value)
		} },
		api: [
			"isOpen",
			"setOpen",
			"open",
			"close",
			"toggle",
			"getPayload",
			"focus"
		],
		render: (root, instance) => bindHover(root, instance.api)
	},
	trigger: {
		tag: "bl-quick-look-trigger",
		target: wrappedButton,
		display: "contents"
	},
	backdrop: "bl-quick-look-backdrop",
	content: {
		tag: "bl-quick-look-content",
		context: (content) => {
			const root = content.closest("bl-quick-look");
			return { finalFocus: () => {
				if (!root) return;
				const trigger = ownedPart(root, "bl-quick-look-trigger");
				return returnTargets.get(root) ?? (trigger && wrappedButton(trigger));
			} };
		}
	},
	title: "bl-quick-look-title",
	description: "bl-quick-look-description",
	close: {
		tag: "bl-quick-look-close",
		target: wrappedButton,
		display: "contents"
	}
});
