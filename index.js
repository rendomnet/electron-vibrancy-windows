const Vibrancy = require('bindings')('Vibrancy');

function EnableVibrancy(buffer) {
	Vibrancy.SetVibrancy(true, buffer);
}

function DisableVibrancy(buffer) {
	Vibrancy.SetVibrancy(false, buffer);
}

module.exports = {
	EnableVibrancy: (window) => {
		window.setBackgroundColor('#00000000');
		EnableVibrancy(window.getNativeWindowHandle());
	},
	DisableVibrancy: (window) => {
		window.setBackgroundColor('#FFF');
		DisableVibrancy(window.getNativeWindowHandle());
	}
}