var lang = navigator.language;
// var lang = "zh-TW";
// look for logics to extract lang from https://github.com/mozilla/node-webmaker-i18n/blob/master/i18n.js

Localized.ready({ url: window.pathToTheme + "/js/" + lang + ".json" });

document.querySelector("#site-title").innerHTML = Localized.get("Mozilla: View Source Fundraising");
document.querySelector("#site-description").innerHTML = Localized.get("Site Description");
document.querySelector("#masthead .donate #donate-button").innerHTML = Localized.get("Donate Button");

document.querySelector("#country-breakdown-chart-section h2").innerHTML = Localized.get("Viz heading");

document.querySelector(".chart text.CA").innerHTML = Localized.get("chart country - CA");
document.querySelector(".chart text.FR").innerHTML = Localized.get("chart country - FR");
document.querySelector(".chart text.DE").innerHTML = Localized.get("chart country - DE");
document.querySelector(".chart text.CH").innerHTML = Localized.get("chart country - CH");
document.querySelector(".chart text.BR").innerHTML = Localized.get("chart country - BR");
document.querySelector(".chart text.GB").innerHTML = Localized.get("chart country - GB");
document.querySelector(".chart text.US").innerHTML = Localized.get("chart country - US");
document.querySelector(".chart text.Other").innerHTML = Localized.get("chart country - Other");
document.querySelector(".chart text.AU").innerHTML = Localized.get("chart country - AU");
