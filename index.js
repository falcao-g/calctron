const { app, BrowserWindow, Tray, Menu, globalShortcut } = require("electron")
const contextMenu = require("electron-context-menu")

// Support copy & paste
contextMenu()

app.on("ready", () => {
	mainWindow = new BrowserWindow({
		width: 335,
		height: 485,
		resizable: true,
		maximizable: false,
		backgroundColor: "#9BA6A7",
		alwaysOnTop: true,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
			enableRemoteModule: true,
		},
	})

	Menu.setApplicationMenu(null)

	mainWindow.loadURL(`file://${__dirname}/app/index.html`)

	cientifica = false
	globalShortcut.register("Alt+C", () => {
		if (cientifica) {
			mainWindow.setSize(335, 485)
			mainWindow.loadURL(`file://${__dirname}/app/index.html`)
			cientifica = false
		} else {
			mainWindow.setSize(410, 485)
			mainWindow.loadURL(`file://${__dirname}/app/cientifica.html`)
			cientifica = true
		}
	})

	tray = new Tray(__dirname + "/app/img/icon.png")
	tray.setContextMenu(
		Menu.buildFromTemplate([
			{
				label: "Padrão",
				click: () => {
					if (cientifica) {
						mainWindow.setSize(335, 485)
						mainWindow.loadURL(`file://${__dirname}/app/index.html`)
						cientifica = false
					}
				},
			},
			{
				label: "Científica",
				click: () => {
					if (!cientifica) {
						mainWindow.setSize(410, 485)
						mainWindow.loadURL(`file://${__dirname}/app/cientifica.html`)
						cientifica = true
					}
				},
			},
			{
				type: "separator",
			},
			{
				label: "Fechar",
				click: () => {
					app.quit()
				},
			},
		])
	)
})

app.on("window-all-closed", () => {
	app.quit()
})
