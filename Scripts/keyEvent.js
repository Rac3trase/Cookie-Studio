function panicButton(win) {
  win.document.addEventListener('keydown', logKey);

  function logKey(e) {
    if (e.code == 'Backslash') {
      console.log('PANIC BUTTON ACTIVATED!')
      win.location.href = 'https://classroom.google.com/';

      win.alert('ABORT MISSION!!!');
    }
  }
}

panicButton(window);

console.log('Panic Button Ready :O');