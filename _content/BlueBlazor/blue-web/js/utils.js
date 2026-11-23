// src/js/utils.ts
function s4() {
	return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1);
}
var guid = () => s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
export { guid };
