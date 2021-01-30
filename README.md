# Electron Vibrancy for Windows

This module uses native API calls to achieve the blur effect on an [Electron](https://github.com/electron/electron) app.

![](http://i.imgur.com/0sRPzpn.png)

## Running

Since this is a native addon, you will need your platforms build tools. Like Visual Studio, etc. Also Python for `node-gyp`.

## Things to note
- `BrowserWindow` must be transparent. (`transparent:true`)
- If you get `A dynamic link library (DLL) initialization routine failed.` error, it means that the module isn't compiled against Electron or compiled against the wrong version. 

Although it works, I dont recommend using this module on a machine below Windows 10.

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

    vibrancy.SetVibrancy(mainWindow, 0);

    mainWindow.loadFile(path.join(__dirname, 'index.html'));
};

app.on('ready', createWindow);
```

## API
There are several methods depending on what you want to do and what platform you are on.

### `SetVibrancy(window, material)`

Returns `Integer`. View id of `NSVisualEffectView`. You need this for `UpdateView` or `RemoveView`. `material` has no effect on Windows.

* `window` `BrowserWindow` instance

Enables or disables vibrancy for the **WHOLE** window. It will resize automatically. If you want something custom, see `AddView`.


### `DisableVibrancy(window)`

Disables Vibrancy completely.

* `window` `BrowserWindow` instance


## Screenshots

![](https://cloud.githubusercontent.com/assets/174864/19833319/bc7214f8-9e0b-11e6-8331-be49ca3eeab9.png)

![](https://cloud.githubusercontent.com/assets/174864/19833322/bc7f168a-9e0b-11e6-9c84-c2a746538edc.png)

![](https://cloud.githubusercontent.com/assets/174864/19833327/bc8b2c2c-9e0b-11e6-9272-8d84ad3b7116.png)


## Platform notices

### Windows
The addon uses ```SetWindowCompositionAttribute```, which is an undocumented API, which means it can be changed by Microsoft any time and break the functionality.


## License

This project is under MIT.
See [LICENSE](https://github.com/arkenthera/electron-vibrancy/blob/master/LICENSE)
