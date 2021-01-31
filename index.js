const Vibrancy = require('bindings')('Vibrancy');

function EnableVibrancy(buffer) {
	buffer.setBackgroundColor('#00000000');
	Vibrancy.SetVibrancy(true, buffer);
}

function DisableVibrancy(buffer) {
	buffer.setBackgroundColor('#FFF');
	Vibrancy.SetVibrancy(false, buffer);
}

module.exports = {
	EnableVibrancy: (window) => EnableVibrancy(window.getNativeWindowHandle()),
	DisableVibrancy: (window) => DisableVibrancy(window.getNativeWindowHandle())
}