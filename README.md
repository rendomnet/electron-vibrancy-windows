# Electron Vibrancy for Windows

This module uses native API calls to achieve the blur effect on an [Electron](https://github.com/electron/electron) app.

![](http://i.imgur.com/0sRPzpn.png)

## Running

Since this is a native addon, you will need platforms build tools. Like Visual Studio, etc. Also Python for `node-gyp`.

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
