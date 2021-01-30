# Electron Vibrancy for Windows

[![Dependencies](https://status.david-dm.org/gh/DrunkWinter/electron-vibrancy-windows.svg)](https://david-dm.org/DrunkWinter/electron-vibrancy-windows)

This module uses native API calls to achieve the blur effect on an [Electron](https://github.com/electron/electron) app.

![](http://i.imgur.com/0sRPzpn.png)

## Installation
You will need Python, Visual Studio or Visual C++ build tools to install this. An easy way to install them can be found [here](https://www.npmjs.com/package/windows-build-tools).

```shell script
yarn add https://github.com/DrunkWinter/electron-vibrancy-windows
```

or

```shell script
npm install https://github.com/DrunkWinter/electron-vibrancy-windows
```

Since this is a native addon, you will need platforms build tools. Like Visual Studio, etc. Also Python for `node-gyp`.

## Important
- `BrowserWindow` must be transparent. (`transparent:true`)
- If you get `A dynamic link library (DLL) initialization routine failed.` error, it means that the module isn't compiled against Electron or compiled against the wrong version. 

Although it might works, it is not recommended using this module on a machine older than Windows 10.

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
        center: true,
        transparent: true,
        webPreferences: {
            nodeIntegration: true
        }
    });

    vibrancy.SetVibrancy(mainWindow);

    mainWindow.loadFile(path.join(__dirname, 'index.html'));
};

app.on('ready', createWindow);
```

## API
There are several methods depending on what you want to do and what platform you are on.

### `SetVibrancy(window)`

Returns `Integer`.

* `window` `BrowserWindow` instance

Enables or disables vibrancy for the **WHOLE** window. It will resize automatically.


### `DisableVibrancy(window)`

Disables Vibrancy completely.

* `window` `BrowserWindow` instance


## Platform notices

The addon uses ```SetWindowCompositionAttribute```, which is an undocumented Windows API, which means it can be changed by Microsoft any time and break the functionality.


## License

This project is under MIT.
See [LICENSE](https://github.com/arkenthera/electron-vibrancy/blob/master/LICENSE)
