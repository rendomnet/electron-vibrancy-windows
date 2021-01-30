const Vibrancy = require('bindings')('Vibrancy');

module.exports = Vibrancy;

function AddView(buffer,options) {
	const viewOptions = {
		Material: options.Material,
		Position: { x: options.X, y: options.Y},
		Size: { width: options.Width, height: options.Height},
		ResizeMask: options.ResizeMask
	}
	return Vibrancy.AddView(buffer,viewOptions);
}

function DisableVibrancy(buffer) {
	Vibrancy.SetVibrancy(false,buffer);
}

module.exports = {
	SetVibrancy: (window) => {
		if (!window) return -1;
		
		const [width, height] = window.getSize();
		const resizeMask = 2; // auto resize on both axis
		const viewOptions = {
			Material: 0,
			Width: width,
			Height: height,
			X: 0,
			Y:0,
			ResizeMask: resizeMask
		};

		return AddView(window.getNativeWindowHandle(), viewOptions);
	},
	DisableVibrancy: (window) => DisableVibrancy(window.getNativeWindowHandle())
}