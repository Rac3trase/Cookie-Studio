var listRH = ["https://house.hec.to/",
    "https://gabe-skibidi-sigma.browell.ar/",
    "https://tgrh.fbsdbox.net/",
    "https://yhtjygh.haleymonroe.com/",
    "https://ujymh.hktrustco.hk/",
    "https://ty5hrtng.simonmonroe.com/",
    "https://gabe-has-motion.freengers.com/",
    "https://easymath.4nets.org/",
    "https://ezze.4nets.org/",
    "https://egg.hmbygg.se/"];

function openUrl(url1) {
    var url = url1;
    var urlObj = new window.URL(window.location.href);
    if (url.substring(0, 8) !== "https://" && url.substring(0, 7) !== "http://") {
        url = "https://" + url.split("https://").pop();
    } else if (url.substring(0, 7) == "http://") {
        url = "https://" + url.split("http://").pop();
    };

    win = window.open();
    win.document.body.style.margin = "0";
    win.document.body.style.height = "100vh";
    var iframe = win.document.createElement("iframe");
    iframe.style.border = "none";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.margin = "0";
    iframe.referrerpolicy = "no-referrer";
    iframe.allow = "fullscreen";
    iframe.src = url;
    win.document.body.appendChild(iframe);
}

function openUnblock() {
    var url = listRH[(Math.floor(Math.random() * listRH.length))]
    openUrl(url);
}

function open1v1() {
    var url = "https://foxmoss.com/main/games/1v1lol/";
    var urlObj = new window.URL(window.location.href);

    if (url.substring(0, 8) !== "https://" && url.substring(0, 7) !== "http://") {
        url = "https://" + url.split("https://").pop();
    } else if (url.substring(0, 7) == "http://") {
        url = "https://" + url.split("http://").pop();
    }

    var win = window.open();
    win.document.body.style.margin = "0";
    win.document.body.style.height = "100vh";

    var iframe = win.document.createElement("iframe");
    iframe.style.border = "none";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.margin = "0";
    iframe.referrerpolicy = "no-referrer";
    iframe.allowFullscreen = true;
    iframe.src = url;

    win.document.body.appendChild(iframe);

    var script = win.document.createElement("script");
    script.innerHTML = `
        function removeAds() {
            var elements = document.getElementsByClassName('ads');
    
            // Continue removing elements until there are none left
            while (elements.length > 0) {
                var parent = elements[0].parentNode;
                parent.removeChild(elements[0]);
            }
        }
    
        // Use requestAnimationFrame for smoother execution
        function mainLoop() {
            removeAds();
            // Add any other logic related to the iframe here
            requestAnimationFrame(mainLoop);
        }
    
        // Start the main loop
        mainLoop();
    `;

    win.document.body.appendChild(script);
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
        title: 'wow!',
        text: 'Very Cool',
        icon: 'success',
        confirmButtonText: 'Click...'
    })
}

function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded.split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res;
}