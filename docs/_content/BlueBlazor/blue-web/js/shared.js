"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPhrase = getPhrase;
const phrases = {
  Cancel: ["Cancel", "Abbrechen"],
  Yes: ["Yes", "Ja"],
  No: ["No", "Nein"],
  Message: ["Message", "Nachricht"],
  "Toggle menu": ["Toggle menu", "Menü umschalten"],
  "Close all": ["Close all", "Alle schließen"],
  Error: ["Error", "Fehler"],
  Information: ["Information", "Information"]
};
function getPhrase(keyword) {
  let countryCode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  let _phrases = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  countryCode = countryCode || navigator.language.toLowerCase().indexOf("de") > -1 ? "de-DE" : "en-US";
  _phrases = _phrases || phrases;
  if (_phrases[keyword]) {
    if (countryCode.indexOf("de-") > -1) {
      return _phrases[keyword][1];
    } else {
      return _phrases[keyword][0];
    }
  } else {
    return keyword;
  }
}