// Modules to control application life and create native browser window
const {app, screen , BrowserWindow} = require('electron')

const createWindow = () => {
  
	const display = screen.getPrimaryDisplay()
	const width = display.bounds.width

  	const mainWindow = new BrowserWindow({
		width: 480,
		height: 480,
		resizable: false,
		center: true,
		x: width - 480,
  		y: 0,
    	webPreferences: { }
  	})

	mainWindow.loadURL(`https://youtube.com`)
	mainWindow.setAlwaysOnTop(true, "floating", 1)
	mainWindow.setVisibleOnAllWorkspaces(true) 
	mainWindow.setMenu(null) 
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
	createWindow()
	
	app.on('activate', function () {
		// On macOS it's common to re-create a window in the app when the
		// dock icon is clicked and there are no other windows open.
		if (BrowserWindow.getAllWindows().length === 0) createWindow()
	})
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  	if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
