function button1Click() {
    document.requestFullscreen()
    alert("Fullscreen Test :D")
}

function openNav() {
    if (document.getElementById("mySidepanel").style.width != "250px")
        document.getElementById("mySidepanel").style.width = "250px";
    else {
        closeNav()
    }
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}