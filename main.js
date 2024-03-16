const { app, BrowserWindow, Menu, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');
const Json2csv = require('json2csv');
const chemin = app.getPath('home');
console.log(chemin);
const sqlite3 = require('sqlite3');
sqlite3.verbose();
const dbname = path.join(process.resourcesPath, 'base/users.db');
// Ouverture base de donnée
let db = new sqlite3.Database(dbname, (err) => {
  if (err) throw err;
});
Menu.setApplicationMenu(null);
const createWindow = () => {
  const win = new BrowserWindow({
    minWidth: 1400,
    minHeight: 800,
    webPreferences: {
      nodeIntegrationInWorker: true,
      enableRemoteModule: true,
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, './preload.js'),
    },
  });
  win.loadFile('./index.html');
  win.webContents.openDevTools({ mode: 'detach' });

  ///////Requête -> Toutes les infos Joueurs

  db.all('SELECT * FROM users ORDER BY name ASC', (err, data) => {
    if (err) throw err;
    win.webContents.send('players', data);
  });

  ipcMain.on('sendPlayer', (event, args) => {
    let name = args[0];
    let crane = args[1];
    let grade = args[2];
    console.log(name, grade, crane);
    let sql =
      'INSERT OR IGNORE INTO users VALUES(:name,:grade,:crane,:base,:tresor,:guerre,:bh,:bd,:bg,:th,:td,:tg,:gh,:gd,:gg)';
    db.run(sql, name, grade, crane, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  });
  ipcMain.on('delPlayer', (event, data) => {
    let nom = data;
    console.log(nom);
    sql = 'DELETE FROM users WHERE name = ?';
    db.run(sql, nom);
  });
  ipcMain.on('update', (event, data) => {
    let name = data[0];
    let grade = data[1];
    let crane = data[2];
    let base = data[3];
    let tresor = data[4];
    let guerre = data[5];
    let bh = data[6];
    let bd = data[7];
    let bg = data[8];
    let th = data[9];
    let td = data[10];
    let tg = data[11];
    let gh = data[12];
    let gd = data[13];
    let gg = data[14];
    sql =
      'UPDATE users SET grade=?, crane=?, base=?, tresor=?, guerre=?, bh=?, bd=?, bg=?, th=?, td=?, tg=?, gh=?, gd=?, gg=? WHERE name=?';
    db.run(
      sql,
      grade,
      crane,
      base,
      tresor,
      guerre,
      bh,
      bd,
      bg,
      th,
      td,
      tg,
      gh,
      gd,
      gg,
      name
    );
  });

  const winNew = new BrowserWindow({
    minWidth: 1000,
    minHeight: 700,
    show: false,
    titleBarStyle: 'hidden',
    parent: win,
    webPreferences: {
      nodeIntegrationInWorker: true,
      enableRemoteModule: true,
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, './preload.js'),
    },
  });
  winNew.loadFile('./france98.html');
  winNew.webContents.openDevTools({ mode: 'detach' });
  //winNew.setPosition(20, 20);

  // Récupération depuis index.html
  ipcMain.on('Tableau', (event, content) => {
    console.log(content);
    // Retransmission vers france98.html
    winNew.webContents.send('RTableau', content);
  });
  ipcMain.on('show-tab', () => {
    winNew.show();
  });
  ipcMain.on('close-tab', () => {
    winNew.hide();
  });
  ipcMain.on('openFile', () => {
    fs.copyFile(
      './base/users.db',
      chemin + '/desktop/users_export.db',
      (err) => {
        if (err) throw err;
        const options = {
          buttons: ['Ok'],
          message: 'Fichier copié sur ton bureau : users_export.db',
        };
        dialog.showMessageBox(null, options);
      }
    );
  });
  ipcMain.on('importFile', () => {
    fs.copyFile(
      chemin + '/desktop/users_export.db',
      './base/users1.db',
      (err) => {
        if (err) throw err;
      }
    );
    db.all('SELECT * FROM users.db', (err, data) => {});
    const options = {
      buttons: ['Ok'],
      message: 'Fichier importé',
    };
    dialog.showMessageBox(null, options);

    //fs.unlink(chemin + '/desktop/users_export.db');
  });
};
app.whenReady().then(() => {
  createWindow();
});
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
