# Electron Vibrancy for Windows

[![Dependencies](https://status.david-dm.org/gh/DrunkWinter/electron-vibrancy-windows.svg)](https://david-dm.org/DrunkWinter/electron-vibrancy-windows)

This module uses native API calls to achieve the blur effect on an [Electron](https://github.com/electron/electron) app.

![](http://i.imgur.com/0sRPzpn.png)

## Installation
You will need Python, Visual Studio or Visual C++ build tools to install this. An easy way to install them can be found [here](https://www.npmjs.com/package/windows-build-tools).

```shell script
yarn add DrunkWinter/electron-vibrancy-windows
```

or

```shell script
npm install DrunkWinter/electron-vibrancy-windows
```

## Important

Although it might work, it is not recommended using this module on a machine older than Windows 10.

## How to use

```javascript
const vibrancy = require('electron-vibrancy');

function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        title: 'My App',
        width: 1200,
        height: 760,
        frame: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    vibrancy.EnableVibrancy(mainWindow);

    mainWindow.loadFile(path.join(__dirname, 'index.html'));
};

app.on('ready', createWindow);
```

## API

### `EnableVibrancy(window)`

Returns `Integer`.

* `window` `BrowserWindow` instance


### `DisableVibrancy(window)`

Returns `Integer`. Disables Vibrancy.

* `window` `BrowserWindow` instance


## Platform notices

The addon uses ```SetWindowCompositionAttribute```, which is an undocumented Windows API, which means it can be changed by Microsoft any time and break the functionality.


## License

This project is under MIT.
See [LICENSE](https://github.com/arkenthera/electron-vibrancy/blob/master/LICENSE)
