const Vibrancy = require('bindings')('Vibrancy');

function EnableVibrancy(buffer) {
	Vibrancy.SetVibrancy(true, buffer);
}

function DisableVibrancy(buffer) {
	Vibrancy.SetVibrancy(false, buffer);
}

module.exports = {
	EnableVibrancy: (window) => EnableVibrancy(window.getNativeWindowHandle()),
	DisableVibrancy: (window) => DisableVibrancy(window.getNativeWindowHandle())
}