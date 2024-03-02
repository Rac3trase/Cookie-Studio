var listRH = ["https://house.hec.to/",
    "https://sten.4nets.org/",
    "https://gabe-skibidi-sigma.browell.ar/",
    "https://tgrh.fbsdbox.net/",
    "https://yhtjygh.haleymonroe.com/",
    "https://ujymh.hktrustco.hk/",
    "https://ty5hrtng.simonmonroe.com/",
    "https://gabe-has-motion.freengers.com/",
    "https://easymath.4nets.org/",
    "https://ezze.4nets.org/",
    "https://egg.hmbygg.se/"];

function start() {
    var url = listRH[(Math.floor(Math.random() * listRH.length))];
    var urlObj = new window.URL(window.location.href);
    var win = window.open();
    win.document.body.style.margin = "0";
    win.document.body.style.height = "100vh";
    var iframe = win.document.createElement("iframe");
    iframe.style.border = "none";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.margin = "0";
    iframe.referrerpolicy = "no-referrer";
    iframe.allow = "fullscreen";
    iframe.src = url.toString();
    win.document.body.appendChild(iframe);
    var script = win.document.createElement("script");
    script.src = "https://3kh0.github.io/js/main.js";
    win.document.body.appendChild(script);
}

function button1Click() {
    start()
    Swal.fire({
        title: 'Loaded Unblocker!',
        text: 'Click To Continue...',
        icon: 'info',
        confirmButtonText: 'Ok!'
    })
}

function openNav() {
    if (document.getElementById("mySidepanel").style.width != "250px") {
        openNavAfter();
    } else {
        closeNav();
    }
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0px";
}

function openNavAfter() {
    document.getElementById("mySidepanel").style.width = "250px";
}

function niceButton() {
    Swal.fire({
        title: 'Nice Button!',
        text: 'What a nice button... So clicky!',
        icon: 'success',
        confirmButtonText: 'WOW!'
    })
}