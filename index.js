const Vibrancy = require('bindings')('Vibrancy');

module.exports = {
	EnableVibrancy: (window) => Vibrancy.SetVibrancy(true, window.getNativeWindowHandle()),
	DisableVibrancy: (window) => Vibrancy.SetVibrancy(false, window.getNativeWindowHandle()),
}