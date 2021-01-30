# electron-vibrancy

## As of [#7898](https://github.com/electron/electron/pull/7898) Vibrancy is now supported in Electron for *macOS*.

This module is intended to give an [Electron](https://github.com/electron/electron) BrowserWindow blur on its behind. Electron does not support 'blur behind' from a transparent window and this module uses native API calls to achieve the effect.

![](http://i.imgur.com/0sRPzpn.png)

![](http://i.imgur.com/42jOnRV.png)

## Running

Since this is a native addon, you will need your platforms build tools. Visual Studio, XCode etc. Also Python for `node-gyp`.

To rebuild again:

```
npm run rebuild
```


## Current Supported Platforms
- macOS 10.10+
- Windows 10

## Things to note
- `BrowserWindow` must be transparent. (`transparent:true`)
- Requires Yosemite on macOS.
- If you get `A dynamic link library (DLL) initialization routine failed.` error, it means that the module isn't compiled against Electron or compiled against the wrong version. 

Although it works, I dont recommend using this module on a machine below Windows 10. See platforms section below for more information for macOS.

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

### `SetVibrancy(window, material)` _win_ , _macOS_

Returns `Integer`.View id of `NSVisualEffectView`. You need this for `UpdateView` or `RemoveView`. `material` has no effect on Windows.

* `window` `BrowserWindow` instance
* `Material` - Integer. The Material for `NSVisualEffectMaterial`.
  * `0` - `NSVisualEffectMaterialAppearanceBased` *10.10+*
  * `1` - `NSVisualEffectMaterialLight` *10.10+*
  * `2` - `NSVisualEffectMaterialDark` *10.10+*
  * `3` - `NSVisualEffectMaterialTitlebar` *10.10+*
  * `4` - `NSVisualEffectMaterialSelection` *10.11+*
  * `5` - `NSVisualEffectMaterialMenu` *10.11+*
  * `6` - `NSVisualEffectMaterialPopover` *10.11+*
  * `7` - `NSVisualEffectMaterialSidebar` *10.11+*
  * `8` - `NSVisualEffectMaterialMediumLight` *10.11+*
  * `9` - `NSVisualEffectMaterialUltraDark` *10.11+*

Enables or disables vibrancy for the **WHOLE** window. It will resize automatically. If you want something custom, see `AddView`.
See [here](https://developer.apple.com/reference/appkit/nsvisualeffectmaterial?language=objc) for more info about `NSVisualEffectMaterial`.


### `DisableVibrancy(window)` _win_, _macOS_

Disables Vibrancy completely.

* `window` `BrowserWindow` instance


### `AddView(window,options)` _macOS_

Returns `Integer`.View id of `NSVisualEffectView`. You need this for `UpdateView` or `RemoveView`.

* `window` `BrowserWindow` instance
* `options` Object
  * `Material` - Integer. The Material for `NSVisualEffectMaterial`.See `SetVibrancy` method for material properties.
  * `X` X Position of the `NSVisualEffectView` relative to the main `BrowserWindow`.
  * `Y` X Position of the `NSVisualEffectView` relative to the main `BrowserWindow`.
  * `Width` - Integer Width of the `NSVisualEffectView`. Should not be larger than the window's.
  * `Height` - Integer Height of the `NSVisualEffectView`. Should not be larger than the window's.
  * `ResizeMask`- Integer.Resize mask for the `NSVisualEffectView`.
    * `0` - Auto width resize
    * `1` - Auto height resize
    * `2` - Auto width-height resize
    * `3` - No resize

Adds a `NSVisualEffectView` to the window with the specified properties.If you dont specify a `ResizeMask`,default value for it is `2`.


### `UpdateView(window,options)` _macOS_

Returns `Boolean`.

* `window` `BrowserWindow` instance
* `options` Object
  * `ViewId` - Integer. Return value from `AddView`.
  * `Material` - Integer. The Material for `NSVisualEffectMaterial`.See `SetVibrancy` method for material properties.
  * `X` X Position of the `NSVisualEffectView` relative to the main `BrowserWindow`.
  * `Y` X Position of the `NSVisualEffectView` relative to the main `BrowserWindow`.
  * `Width` - Integer Width of the `NSVisualEffectView`. Should not be larger than the window's.
  * `Height` - Integer Height of the `NSVisualEffectView`. Should not be larger than the window's.

Updates the `NSVisualEffectView` with the specified properties.


### `RemoveView(window,viewId)` _macOS_

Returns `Boolean`.

* `window` `BrowserWindow` instance
* `ViewId`- Integer.Identifier of `NSVisualEffectView`.

Removes the `NSVisualEffectView`.

## Screenshots

![](https://cloud.githubusercontent.com/assets/174864/19833319/bc7214f8-9e0b-11e6-8331-be49ca3eeab9.png)

![](https://cloud.githubusercontent.com/assets/174864/19833322/bc7f168a-9e0b-11e6-9c84-c2a746538edc.png)

![](https://cloud.githubusercontent.com/assets/174864/19833327/bc8b2c2c-9e0b-11e6-9272-8d84ad3b7116.png)


## Platform notices

### Windows
On **Windows 10** the addon uses ```SetWindowCompositionAttribute```, which is an undocumented API, which means it can be changed by Microsoft any time and break the functionality.

### MacOS
Requires Yosemite and above.Some materials require 10.11+. Since this is the case, if you use a material that's not available on that macOS version, it will
fallback to the default material value which is `0`, which might not be what you want.


## License

This project is under MIT.
See [LICENSE](https://github.com/arkenthera/electron-vibrancy/blob/master/LICENSE)
