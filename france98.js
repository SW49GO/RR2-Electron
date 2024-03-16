window.api.RTableau((data) => {
  if (!document.querySelector('.tableau')) {
    document.body.innerHTML += data;
  }

  // Imprimer Base de Donnée
  let imprimer = document.getElementById('imprimer');
  imprimer.addEventListener('click', () => {
    imprim();
  });
  function imprim() {
    var printContents = document.body.innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.api.closeTab();
  }
  let button = document.getElementById('fermer');
  button.addEventListener('click', () => {
    document.body.innerHTML += '';
    window.api.closeTab();
  });
  let btn_export = document.getElementById('export');
  btn_export.addEventListener('click', () => {
    window.api.openFile();
  });
  let btn_import = document.getElementById('import');
  btn_import.addEventListener('click', () => {
    window.api.importFile();
  });
});
