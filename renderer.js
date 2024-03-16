// Appel aux infos de la base de donnée et affichage des joueurs
window.api.getAllPlayers((data) => {
  // Affichage des informations utilisateurs
  let container = document.querySelector('.container');
  for (let i of data) {
    let srcBH, srcBD, srcBG, srcTH, srcTD, srcTG, srcGH, srcGD, srcGG;
    let srcB, srcT, srcG, checkBase, checkTresor, checkGuerre;
    let baseH,
      baseD,
      baseG,
      tresorH,
      tresorD,
      tresorG,
      guerreH,
      guerreD,
      guerreG;
    checkBase = '';
    if (i.base) {
      srcB = '<img class="bonus" src="pictures/base.png">';
      checkBase = 'checked';
      if (i.bh == 0) {
        srcBH = '<img class="bonus haut" src="pictures/brouge.png">';
      } else {
        srcBH = '<img class="bonus haut" src="pictures/bvert.png">';
        baseH = 'checked';
      }
      if (i.bd == 0) {
        srcBD = '<img class="bonus droite" src="pictures/brouge.png">';
      } else {
        srcBD = '<img class="bonus droite" src="pictures/bvert.png">';
        baseD = 'checked';
      }
      if (i.bg == 0) {
        srcBG = '<img class="bonus gauche" src="pictures/brouge.png">';
      } else {
        srcBG = '<img class="bonus gauche" src="pictures/bvert.png">';
        baseG = 'checked';
      }
    } else {
      srcB = '';
      srcBH = '';
      srcBD = '';
      srcBG = '';
    }
    if (i.tresor) {
      srcT = '<img class="bonus" src="pictures/tresor.png">';
      checkTresor = 'checked';
      if (i.th == 0) {
        srcTH = '<img class="bonus haut" src="pictures/brouge.png">';
      } else {
        srcTH = '<img class="bonus haut" src="pictures/bvert.png">';
        tresorH = 'checked';
      }
      if (i.td == 0) {
        srcTD = '<img class="bonus droite" src="pictures/brouge.png">';
      } else {
        srcTD = '<img class="bonus droite" src="pictures/bvert.png">';
        tresorD = 'checked';
      }
      if (i.tg == 0) {
        srcTG = '<img class="bonus gauche" src="pictures/brouge.png">';
      } else {
        srcTG = '<img class="bonus gauche" src="pictures/bvert.png">';
        tresorG = 'checked';
      }
    } else {
      srcT = '';
      srcTH = '';
      srcTD = '';
      srcTG = '';
    }
    if (i.guerre) {
      srcG = '<img class="bonus" src="./pictures/guerre.png">';
      checkGuerre = 'checked';
      if (i.gh == 0) {
        srcGH = '<img class="bonus haut" src="pictures/brouge.png">';
      } else {
        srcGH = '<img class="bonus haut" src="pictures/bvert.png">';
        guerreH = 'checked';
      }
      if (i.gd == 0) {
        srcGD = '<img class="bonus droite" src="pictures/brouge.png">';
      } else {
        srcGD = '<img class="bonus droite" src="pictures/bvert.png">';
        guerreD = 'checked';
      }
      if (i.gg == 0) {
        srcGG = '<img class="bonus gauche" src="pictures/brouge.png">';
      } else {
        srcGG = '<img class="bonus gauche" src="pictures/bvert.png">';
        guerreG = 'checked';
      }
    } else {
      srcG = '';
      srcGH = '';
      srcGD = '';
      srcGG = '';
    }
    container.innerHTML +=
      '<div class="player"><div class="parametre" id="' +
      i.name +
      '"><img class="bonus" src="pictures/cle.png"/></div><div class="grade" style="color:' +
      i.grade +
      '">' +
      i.name +
      '</div><div class="crane">' +
      i.crane +
      ' %</div><div class="insigne"><div class="base">' +
      srcB +
      srcBH +
      srcBD +
      srcBG +
      '</div><div class="tresor">' +
      srcT +
      srcTH +
      srcTD +
      srcTG +
      '</div><div class="guerre">' +
      srcG +
      srcGH +
      srcGD +
      srcGG +
      '</div></div><div class="suppr ' +
      i.name +
      '"><img class="bonus " src="pictures/suppr.png"></div><div class="config hidden"><img class="fleche" src="pictures/fleche.png"><h1>' +
      i.name +
      '</h1><div class="modif"><div class="newConfig"><label>Nouveau Grade :</label><select class="status modifStatus"><option value="' +
      i.grade +
      '"selected></option><option class="soldat" value="white">Soldat</option><option class="sergent" value="blue">Sergent</option><option class="general" value="yellow">General</option><option class="chef" value="red">Chef</option></select><div class="modifCrane"><label>Nouveau Bonus Crâne :</label><input class="modifNewCrane" type="text" name="newCrane" value=' +
      i.crane +
      '>&ensp;%</div></div><div class="allInsigne"><div class="insBase"><div class="acquisBase"><h2 class="titleBase">BASE</h2><span>ACQUIS :&ensp;</span><input type="checkbox" name="checkBase" ' +
      checkBase +
      '/></div><div class="perkBaseHaut"><input type="checkbox" name="checkBaseHaut"' +
      baseH +
      '/></div><div class="imgBase"><img class ="dim" src="pictures/base.png"/></div><div class="perkBaseBas"><input type="checkbox" name="checkBaseGauche"' +
      baseG +
      '/><input type="checkbox" name="checkBaseDroite"' +
      baseD +
      '/></div></div><div class="insTresor"><div class="acquisTresor"><h2 class="titleBase">TRESOR</h2><span>ACQUIS :&ensp;</span><input type="checkbox" name="checkTresor"' +
      checkTresor +
      '/></div><div class="perkTresorHaut"><input type="checkbox" name="checkTresorHaut"' +
      tresorH +
      '/></div><div class="imgTresor"><img class ="dim" src="pictures/tresor.png"/></div><div class="perkBasTresor"><input type="checkbox" name="checkTresorGauche"' +
      tresorG +
      '/><input type="checkbox" name="checkTresorDroite"' +
      tresorD +
      '/></div></div><div class="insGuerre"><div class="acquisGuerre"><h2 class="titleBase">GUERRE</h2><span>ACQUIS :&ensp;</span><input type="checkbox" name="checkGuerre"' +
      checkGuerre +
      '/></div><div class="perkGuerreHaut"><input type="checkbox" name="checkGuerreHaut"' +
      guerreH +
      '/></div><div class="imgGuerre"><img class ="dim" src="pictures/guerre.png"/></div><div class="perkBasGuerre"><input type="checkbox" name="checkGuerreGauche"' +
      guerreG +
      '/><input type="checkbox" name="checkGuerreDroite"' +
      guerreD +
      '/></div></div></div></div><div class="changeConfig"><button class="btn_change ' +
      i.name +
      '">Valider</button></div>';
  }
  // Changement des paramètres
  let change = document.querySelectorAll('.btn_change');
  for (let i of change) {
    i.addEventListener('click', () => {
      let tab = i.className;
      let res = tab.split(' ');
      let player = res[1];
      let modifStatus = i.parentNode.parentNode; // div config
      // Nouveau Status
      let newStatus = modifStatus.querySelector('.modifStatus').value;
      let modifColor = modifStatus.parentNode.querySelector('.grade');
      modifColor.style.color = newStatus;
      // Nouveau crâne
      let newCrane = modifStatus.querySelector('.modifNewCrane').value;
      let mofidCrane = modifStatus.parentNode.querySelector('.crane');
      mofidCrane.innerHTML = newCrane + ' %';
      // Insignes Acquis
      let base, tresor, guerre;
      let acquisBase = modifStatus.querySelector('.acquisBase').children[2];
      if (acquisBase.checked) {
        base = 1;
      } else {
        base = 0;
      }
      let acquisTresor = modifStatus.querySelector('.acquisTresor').children[2];
      if (acquisTresor.checked) {
        tresor = 1;
      } else {
        tresor = 0;
      }
      let acquisGuerre = modifStatus.querySelector('.acquisGuerre').children[2];
      if (acquisGuerre.checked) {
        guerre = 1;
      } else {
        guerre = 0;
      }
      // Les Perks des insignes
      // Insigne BASE
      let perkBaseHaut = modifStatus.querySelector('.perkBaseHaut').children[0];
      if (perkBaseHaut.checked) {
        perkBaseHaut = 1;
        srcBaseH = 'pictures/bvert.png';
      } else {
        perkBaseHaut = 0;
        srcBaseH = 'pictures/brouge.png';
      }
      let perkBaseBasG = modifStatus.querySelector('.perkBaseBas').children[0];
      if (perkBaseBasG.checked) {
        perkBaseBasG = 1;
        srcBaseG = 'pictures/bvert.png';
      } else {
        perkBaseBasG = 0;
        srcBaseG = 'pictures/brouge.png';
      }
      let perkBaseBasD = modifStatus.querySelector('.perkBaseBas').children[1];
      if (perkBaseBasD.checked) {
        perkBaseBasD = 1;
        srcBaseD = 'pictures/bvert.png';
      } else {
        perkBaseBasD = 0;
        srcBaseD = 'pictures/brouge.png';
      }
      if (base == 0) {
        perkBaseHaut = 0;
        perkBaseBasD = 0;
        perkBaseBasG = 0;
      }
      // Insigne TRESOR
      let perkTresorHaut =
        modifStatus.querySelector('.perkTresorHaut').children[0];
      if (perkTresorHaut.checked) {
        perkTresorHaut = 1;
        srcTresorH = 'pictures/bvert.png';
      } else {
        perkTresorHaut = 0;
        srcTresorH = 'pictures/brouge.png';
      }
      let perkTresorBasG =
        modifStatus.querySelector('.perkBasTresor').children[0];
      if (perkTresorBasG.checked) {
        perkTresorBasG = 1;
        srcTresorG = 'pictures/bvert.png';
      } else {
        perkTresorBasG = 0;
        srcTresorG = 'pictures/brouge.png';
      }
      let perkTresorBasD =
        modifStatus.querySelector('.perkBasTresor').children[1];
      if (perkTresorBasD.checked) {
        perkTresorBasD = 1;
        srcTresorD = 'pictures/bvert.png';
      } else {
        perkTresorBasD = 0;
        srcTresorD = 'pictures/brouge.png';
      }
      if (tresor == 0) {
        perkTresorHaut = 0;
        perkTresorBasD = 0;
        perkTresorBasG = 0;
      }
      // Insigne GUERRE
      let perkGuerreHaut =
        modifStatus.querySelector('.perkGuerreHaut').children[0];
      if (perkGuerreHaut.checked) {
        perkGuerreHaut = 1;
        srcGuerreH = 'pictures/bvert.png';
      } else {
        perkGuerreHaut = 0;
        srcGuerreH = 'pictures/brouge.png';
      }
      let perkGuerreBasD =
        modifStatus.querySelector('.perkBasGuerre').children[0];
      if (perkGuerreBasD.checked) {
        perkGuerreBasD = 1;
        srcGuerreD = 'pictures/bvert.png';
      } else {
        perkGuerreBasD = 0;
        srcGuerreD = 'pictures/brouge.png';
      }
      let perkGuerreBasG =
        modifStatus.querySelector('.perkBasGuerre').children[1];
      if (perkGuerreBasG.checked) {
        perkGuerreBasG = 1;
        srcGuerreG = 'pictures/bvert.png';
      } else {
        perkGuerreBasG = 0;
        srcGuerreG = 'pictures/brouge.png';
      }
      if (guerre == 0) {
        perkGuerreHaut = 0;
        perkGuerreBasD = 0;
        perkGuerreBasG = 0;
      }
      // Mise à jour des divs : insignes
      // BASE
      let divBase = modifStatus.parentNode
        .querySelector('.insigne')
        .querySelector('.base');
      if (base == 1) {
        divBase.innerHTML =
          '<img class="bonus" src="pictures/base.png"/><img class="bonus haut" src="' +
          srcBaseH +
          '"><img class="bonus droite" src="' +
          srcBaseD +
          '"><img class="bonus gauche" src="' +
          srcBaseG +
          '">';
      } else {
        divBase.innerHTML = '';
      }
      //TRESOR
      let divTresor = modifStatus.parentNode
        .querySelector('.insigne')
        .querySelector('.tresor');
      if (tresor == 1) {
        divTresor.innerHTML =
          '<img class="bonus" src="pictures/tresor.png"/><img class="bonus haut" src="' +
          srcTresorH +
          '"><img class="bonus droite" src="' +
          srcTresorD +
          '"><img class="bonus gauche" src="' +
          srcTresorG +
          '">';
      } else {
        divTresor.innerHTML = '';
      }
      //GUERRE
      let divGuerre = modifStatus.parentNode
        .querySelector('.insigne')
        .querySelector('.guerre');
      if (guerre == 1) {
        divGuerre.innerHTML =
          '<img class="bonus" src="pictures/guerre.png"/><img class="bonus haut" src="' +
          srcGuerreH +
          '"><img class="bonus droite" src="' +
          srcGuerreD +
          '"><img class="bonus gauche" src="' +
          srcGuerreG +
          '">';
      } else {
        divGuerre.innerHTML = '';
      }
      let data = [
        player,
        newStatus,
        newCrane,
        base,
        tresor,
        guerre,
        perkBaseHaut,
        perkBaseBasD,
        perkBaseBasG,
        perkTresorHaut,
        perkTresorBasD,
        perkTresorBasG,
        perkGuerreHaut,
        perkGuerreBasD,
        perkGuerreBasG,
      ];
      window.api.updatePlayer(data);
      modifStatus.classList.toggle('hidden');
    });
  }
  // Affichage des paramètres
  let cle = document.querySelectorAll('.parametre');
  for (let i of cle) {
    i.addEventListener('click', () => {
      let config = i.parentNode.querySelector('.config');
      config.classList.toggle('hidden');
    });
  }
  // Suppression d'un joueur
  let suppr = document.querySelectorAll('.suppr');
  for (let i of suppr) {
    i.addEventListener('click', () => {
      let tab = i.className;
      let res = tab.split(' ');
      let player = res[1];
      window.api.deletePlayer(player);
      i.parentNode.remove();
    });
  }
  // Formulaire ajout joueur
  let btn = document.querySelector('.btn');
  btn.addEventListener('click', function () {
    let name = document.querySelector('.newPlayer').value;
    let crane = document.querySelector('.newCrane').value;
    let status = document.querySelector('.status').value;
    if (name != '') {
      if (crane == '') {
        crane = 0;
      }
      let player = [];
      player.push(name.charAt(0).toUpperCase() + name.slice(1), crane, status);
      name = name.charAt(0).toUpperCase() + name.slice(1);
      window.api.sendPlayer(player);
      container.innerHTML +=
        '<div class="player"><div class="parametre" id="' +
        name +
        '"><img class="bonus" src="pictures/cle.png"/></div><div class="grade" style="color:' +
        status +
        '">' +
        name +
        '</div><div class="crane">' +
        crane +
        ' %</div><div class="insigne"><div class="base"></div><div class="tresor"></div><div class="guerre"></div></div><div class="suppr ' +
        name +
        '"><img class="bonus" src="pictures/suppr.png"></div><div class="config hidden"><img class="fleche" src="pictures/fleche.png"><h1>' +
        name +
        '</h1><div class="modif"><div class="newConfig"><label>Nouveau Grade :</label><select class="status modifStatus"><option value="' +
        status +
        '"selected></option><option class="soldat" value="white">Soldat</option><option class="sergent" value="blue">Sergent</option><option class="general" value="yellow">General</option><option class="chef" value="red">Chef</option></select><div class="modifCrane"><label>Nouveau Bonus Crâne :</label><input class="modifNewCrane"type="text" name="newCrane" value="' +
        crane +
        '">&ensp;%</div></div><div class="allInsigne"><div class="insBase"><div class="acquisBase"><h2 class="titleBase">BASE</h2><span>ACQUIS :&ensp;</span><input type="checkbox" name="checkBase"/></div><div class="perkBaseHaut"><input type="checkbox" name="checkBaseHaut"/></div><div class="imgBase"><img class ="dim" src="pictures/base.png"/></div><div class="perkBasBase"><input type="checkbox" name="checkBaseGauche"/><input type="checkbox" name="checkBaseDroite"/></div></div><div class="insTresor"><div class="acquisTresor"><h2 class="titleBase">TRESOR</h2><span>ACQUIS :&ensp;</span><input type="checkbox" name="checkTresor"/></div><div class="perkTresorHaut"><input type="checkbox" name="checkTresorHaut"/></div><div class="imgTresor"><img class ="dim" src="pictures/tresor.png"/></div><div class="perkBasTresor"><input type="checkbox" name="checkTresorGauche"/><input type="checkbox" name="checkTresorDroite"/></div></div><div class="insGuerre"><div class="acquisGuerre"><h2 class="titleBase">GUERRE</h2><span>ACQUIS :&ensp;</span><input type="checkbox" name="checkGuerre"/></div><div class="perkGuerreHaut"><input type="checkbox" name="checkGuerreHaut"/></div><div class="imgGuerre"><img class ="dim" src="pictures/guerre.png"/></div><div class="perkBasGuerre"><input type="checkbox" name="checkGuerreGauche"/><input type="checkbox" name="checkGuerreDroite"/></div></div></div></div><div class="changeConfig"><button class="btn_change ' +
        name +
        '">Valider</button></div>';
    }

    // Suppression d'un joueur
    let suppr = document.querySelectorAll('.suppr');
    for (let i of suppr) {
      i.addEventListener('click', () => {
        let tab = i.className;
        let res = tab.split(' ');
        let player = res[1];
        window.api.deletePlayer(player);
        i.parentNode.remove();
      });
    }
    // Affichage des paramètres
    let cle = document.querySelectorAll('.parametre');
    for (let i of cle) {
      i.addEventListener('click', () => {
        let config = i.parentNode.querySelector('.config');
        /////////
        let change = document.querySelectorAll('.btn_change');
        for (let i of change) {
          i.addEventListener('click', () => {
            let tab = i.className;
            let res = tab.split(' ');
            let player = res[1];
            let modifStatus = i.parentNode.parentNode; // div config
            // Nouveau Status
            let newStatus = modifStatus.querySelector('.modifStatus').value;
            let modifColor = modifStatus.parentNode.querySelector('.grade');
            modifColor.style.color = newStatus;
            // Nouveau crâne
            let newCrane = modifStatus.querySelector('.modifNewCrane').value;
            let mofidCrane = modifStatus.parentNode.querySelector('.crane');
            mofidCrane.innerHTML = newCrane + ' %';
            // Insignes Acquis
            let base, tresor, guerre;
            let acquisBase =
              modifStatus.querySelector('.acquisBase').children[2];
            if (acquisBase.checked) {
              base = 1;
            } else {
              base = 0;
            }
            let acquisTresor =
              modifStatus.querySelector('.acquisTresor').children[2];
            if (acquisTresor.checked) {
              tresor = 1;
            } else {
              tresor = 0;
            }
            let acquisGuerre =
              modifStatus.querySelector('.acquisGuerre').children[2];
            if (acquisGuerre.checked) {
              guerre = 1;
            } else {
              guerre = 0;
            }
            // Les Perks des insignes
            // Insigne BASE
            let perkBaseHaut =
              modifStatus.querySelector('.perkBaseHaut').children[0];
            if (perkBaseHaut.checked) {
              perkBaseHaut = 1;
              srcBaseH = 'pictures/bvert.png';
            } else {
              perkBaseHaut = 0;
              srcBaseH = 'pictures/brouge.png';
            }
            let perkBaseBasG =
              modifStatus.querySelector('.perkBasBase').children[0];
            if (perkBaseBasG.checked) {
              perkBaseBasG = 1;
              srcBaseG = 'pictures/bvert.png';
            } else {
              perkBaseBasG = 0;
              srcBaseG = 'pictures/brouge.png';
            }
            let perkBaseBasD =
              modifStatus.querySelector('.perkBasBase').children[1];
            if (perkBaseBasD.checked) {
              perkBaseBasD = 1;
              srcBaseD = 'pictures/bvert.png';
            } else {
              perkBaseBasD = 0;
              srcBaseD = 'pictures/brouge.png';
            }
            if (base == 0) {
              perkBaseHaut = 0;
              perkBaseBasD = 0;
              perkBaseBasG = 0;
            }
            // Insigne TRESOR
            let perkTresorHaut =
              modifStatus.querySelector('.perkTresorHaut').children[0];
            if (perkTresorHaut.checked) {
              perkTresorHaut = 1;
              srcTresorH = 'pictures/bvert.png';
            } else {
              perkTresorHaut = 0;
              srcTresorH = 'pictures/brouge.png';
            }
            let perkTresorBasG =
              modifStatus.querySelector('.perkBasTresor').children[0];
            if (perkTresorBasG.checked) {
              perkTresorBasG = 1;
              srcTresorG = 'pictures/bvert.png';
            } else {
              perkTresorBasG = 0;
              srcTresorG = 'pictures/brouge.png';
            }
            let perkTresorBasD =
              modifStatus.querySelector('.perkBasTresor').children[1];
            if (perkTresorBasD.checked) {
              perkTresorBasD = 1;
              srcTresorD = 'pictures/bvert.png';
            } else {
              perkTresorBasD = 0;
              srcTresorD = 'pictures/brouge.png';
            }
            if (tresor == 0) {
              perkTresorHaut = 0;
              perkTresorBasD = 0;
              perkTresorBasG = 0;
            }
            // Insigne GUERRE
            let perkGuerreHaut =
              modifStatus.querySelector('.perkGuerreHaut').children[0];
            if (perkGuerreHaut.checked) {
              perkGuerreHaut = 1;
              srcGuerreH = 'pictures/bvert.png';
            } else {
              perkGuerreHaut = 0;
              srcGuerreH = 'pictures/brouge.png';
            }
            let perkGuerreBasD =
              modifStatus.querySelector('.perkBasGuerre').children[0];
            if (perkGuerreBasD.checked) {
              perkGuerreBasD = 1;
              srcGuerreD = 'pictures/bvert.png';
            } else {
              perkGuerreBasD = 0;
              srcGuerreD = 'pictures/brouge.png';
            }
            let perkGuerreBasG =
              modifStatus.querySelector('.perkBasGuerre').children[1];
            if (perkGuerreBasG.checked) {
              perkGuerreBasG = 1;
              srcGuerreG = 'pictures/bvert.png';
            } else {
              perkGuerreBasG = 0;
              srcGuerreG = 'pictures/brouge.png';
            }
            if (guerre == 0) {
              perkGuerreHaut = 0;
              perkGuerreBasD = 0;
              perkGuerreBasG = 0;
            }
            // Mise à jour des divs : insignes
            // BASE
            let divBase = modifStatus.parentNode
              .querySelector('.insigne')
              .querySelector('.base');
            if (base == 1) {
              divBase.innerHTML =
                '<img class="bonus" src="pictures/base.png"/><img class="bonus haut" src="' +
                srcBaseH +
                '"><img class="bonus droite" src="' +
                srcBaseD +
                '"><img class="bonus gauche" src="' +
                srcBaseG +
                '">';
            } else {
              divBase.innerHTML = '';
            }
            //TRESOR
            let divTresor = modifStatus.parentNode
              .querySelector('.insigne')
              .querySelector('.tresor');
            if (tresor == 1) {
              divTresor.innerHTML =
                '<img class="bonus" src="pictures/tresor.png"/><img class="bonus haut" src="' +
                srcTresorH +
                '"><img class="bonus droite" src="' +
                srcTresorD +
                '"><img class="bonus gauche" src="' +
                srcTresorG +
                '">';
            } else {
              divTresor.innerHTML = '';
            }
            //GUERRE
            let divGuerre = modifStatus.parentNode
              .querySelector('.insigne')
              .querySelector('.guerre');
            if (guerre == 1) {
              divGuerre.innerHTML =
                '<img class="bonus" src="pictures/guerre.png"/><img class="bonus haut" src="' +
                srcGuerreH +
                '"><img class="bonus droite" src="' +
                srcGuerreD +
                '"><img class="bonus gauche" src="' +
                srcGuerreG +
                '">';
            } else {
              divGuerre.innerHTML = '';
            }
            let data = [
              player,
              newStatus,
              newCrane,
              base,
              tresor,
              guerre,
              perkBaseHaut,
              perkBaseBasD,
              perkBaseBasG,
              perkTresorHaut,
              perkTresorBasD,
              perkTresorBasG,
              perkGuerreHaut,
              perkGuerreBasD,
              perkGuerreBasG,
            ];
            window.api.updatePlayer(data);
            modifStatus.classList.toggle('hidden');
          });
        }
        config.classList.toggle('hidden');
      });
    }
  });
});
let imp = document.getElementById('imprim');

imp.addEventListener('click', () => {
  window.api.getAllPlayers((data) => {
    console.log('coucou');
    console.log(data);
  });
});

// Tableau
window.api.getAllPlayers((data) => {
  console.log(data);
  let tableau = document.querySelector('.tableau');
  for (let i of data) {
    switch (i.grade) {
      case (i.grade = 'white'):
        i.grade = 'Soldat';
        break;
      case (i.grade = 'blue'):
        i.grade = 'Sergent';
        break;
      case (i.grade = 'yellow'):
        i.grade = 'Général';
        break;
      case (i.grade = 'red'):
        i.grade = 'Chef';
        break;
    }
    tableau.innerHTML +=
      '<tr><td>' +
      i.name +
      '</td><td>' +
      i.grade +
      '</td><td>' +
      i.crane +
      ' % </td><td class="tbase1">' +
      i.base +
      '</td><td class="tbase1">' +
      i.bh +
      '</td><td class="tbase1">' +
      i.bd +
      '</td><td class="tbase1">' +
      i.bg +
      '</td><td class="ttresor1">' +
      i.tresor +
      '</td><td class="ttresor1">' +
      i.th +
      '</td><td class="ttresor1">' +
      i.td +
      '</td><td class="ttresor1">' +
      i.tg +
      '</td><td class="tguerre1">' +
      i.guerre +
      '</td><td class="tguerre1">' +
      i.gh +
      '</td><td class="tguerre1">' +
      i.gd +
      '</td><td class="tguerre1">' +
      i.gg +
      '</td></tr>';
  }
});

function sendCommandToNewWin(content) {
  window.api.ETableau(content);
}
document.getElementById('imprim').addEventListener('click', () => {
  // send whatever you like
  window.api.showTab();
  let content = document.getElementById('fichTab');
  sendCommandToNewWin(content.innerHTML);
});
