const { contextBridge, ipcRenderer } = require('electron');

const API = {
  getAllPlayers: (callback) =>
    ipcRenderer.on('players', (event, args) => {
      callback(args);
    }),
  sendPlayer: (data) => ipcRenderer.send('sendPlayer', data),
  deletePlayer: (data) => ipcRenderer.send('delPlayer', data),
  updatePlayer: (data) => ipcRenderer.send('update', data),
  ETableau: (data) => ipcRenderer.send('Tableau', data),
  RTableau: (callback) =>
    ipcRenderer.on('RTableau', (event, data) => {
      callback(data);
    }),
  showTab: () => ipcRenderer.send('show-tab'),
  closeTab: () => ipcRenderer.send('close-tab'),
  openFile: () => ipcRenderer.send('openFile'),
  importFile: () => ipcRenderer.send('importFile'),
};

contextBridge.exposeInMainWorld('api', API);
