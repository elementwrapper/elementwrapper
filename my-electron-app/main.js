const { app, BrowserWindow, Menu, Tray } = require('electron');

let win = null;
let tray = null;
const ICON="./icon.jpg";

const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: ICON
  });
  
  win.loadURL('https://app.element.io/');
}

const toggle_show_hide = () => {
  if (win.isVisible()) win.hide();
  else win.show()
}

const quit = () => {
  win.destroy(); // see also: https://www.electronjs.org/docs/latest/api/browser-window#winclose
  tray.destroy();
}

app.whenReady().then(() => {
  createWindow();
  tray = new Tray(ICON)
  tray.on('click', toggle_show_hide);
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Show/Hide Element', type: 'normal', click: toggle_show_hide },
    { label: 'Quit', type: 'normal', click: quit }
  ])
  tray.setToolTip('Element')
  tray.setContextMenu(contextMenu)
})
