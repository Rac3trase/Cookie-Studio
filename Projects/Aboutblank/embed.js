function load() {
  var url = window.location.search.substring(1);
  var decoded = atob(url);
  return decoded;
}

function go() {
  console.log("Getting url...");
  var url = load()
  console.log(url);
  console.log("Finding Iframe...");

  console.log("Finishing up...");
  var iframe = document.body.getElementsByClassName('PLAYGAME')[0];
  
  iframe.src = url;
}

window.onload = function(){
  go();
}