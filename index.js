const { app, BrowserWindow, Menu } = require("electron");
const contextMenu = require("electron-context-menu");

// Support copy & paste
contextMenu();

app.on("ready", () => {
	mainWindow = new BrowserWindow({
		width: 335,
		height: 490,
		resizable: false,
		maximizable: false,
		backgroundColor: "#9BA6A7",
		alwaysOnTop: true,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
			enableRemoteModule: true,
		},
	});

	Menu.setApplicationMenu(null);

	mainWindow.loadURL(`file://${__dirname}/app/index.html`);
});

app.on("window-all-closed", () => {
	app.quit();
});
