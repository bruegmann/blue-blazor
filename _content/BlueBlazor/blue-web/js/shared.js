// src/js/shared.ts
var phrases = {
	Cancel: ["Cancel", "Abbrechen"],
	Message: ["Message", "Nachricht"],
	Question: ["Question", "Frage"],
	Confirm: ["Confirm", "Bestätigen"],
	"Toggle menu": ["Toggle menu", "Menü umschalten"],
	"Close all": ["Close all", "Alle schließen"],
	Error: ["Error", "Fehler"],
	Information: ["Information", "Information"],
	Loading: ["Loading", "Laden"],
	Successful: ["Successful", "Erfolgreich"]
};
function getPhrase(keyword, countryCode = void 0, _phrases = void 0) {
	countryCode = countryCode || navigator.language.toLowerCase().indexOf("de") > -1 ? "de-DE" : "en-US";
	_phrases = _phrases || phrases;
	if (_phrases[keyword]) {
		if (countryCode.indexOf("de-") > -1) return _phrases[keyword][1];
		else return _phrases[keyword][0];
	} else return keyword;
}
export { getPhrase };
