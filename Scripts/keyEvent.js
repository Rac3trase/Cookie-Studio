window.document.addEventListener("keydown", logKey);

console.log("Panic Button Ready :O");

function logKey(e) {
  if (e.code=="Backslash") {
    console.log("PANIC BUTTON ACTIVATED!")
    window.location.href = "https://classroom.google.com/";

    window.alert("ABORT MISSION!!!");
  }
}