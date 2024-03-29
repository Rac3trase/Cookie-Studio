const listRH = ["https://house.hec.to/",
    "https://yhtjygh.haleymonroe.com/",
    "https://ujymh.hktrustco.hk/",
    "https://ty5hrtng.simonmonroe.com/",
    "https://gabe-has-motion.freengers.com/",
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
    win.document.title = "Calculator";
    var iframe = win.document.createElement("iframe");
    iframe.style.border = "none";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.margin = "0";
    iframe.referrerpolicy = "no-referrer";
    iframe.allow = "fullscreen";
    iframe.src = url;

    var favi;
    favi = win.document.createElement('link');
    favi.rel = 'icon';
    win.document.head.appendChild(favi);

    favi.href = '/Images/Calculator.png';

    win.document.body.appendChild(iframe);
}

function openUnblock() {
    openUrl(listRH[(Math.floor(Math.random() * listRH.length))]);
}

function open1v1() {
    openUrl("https://foxmoss.com/main/games/1v1lol/");
}

function openOvO() {
    openUrl("https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://googleusercontent.b-cdn.net/ovo/ovo.xml&container=ig");
}

function openFnf() {
    openUrl("https://foxmoss.com/main/games/fridaynightfunkin/");
}

function openJF() {
    openUrl("https://games.odd.rip/play/just-fall/");
}

function openRetroBowl() {
    openUrl("https://games.odd.rip/play/retrobowl/");
}

function openSlope() {
    openUrl("https://games.odd.rip/play/slope/");
}

function openPIO2() {
    openUrl("https://games.odd.rip/play/paperio/");
}

function openBStars() {
    openUrl("https://games.odd.rip/play/basketball-stars/");
}

function openBTTS() {
    openUrl("https://games.odd.rip/play/big-tower-tiny-square/");
}

function openSWSurfers() {
    openUrl("https://foxmoss.com/main/games/subway/");
}

function openCookieClick() {
    openUrl("https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/bobydob/JSEngine@e7d53b913d54429e5e118ca9541fb0f8f1f66bdc/dist/cc.xml&container=ig");
}

function openFnaf() {
    openUrl("https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%2Ffive-nights-at-freddy-s.xml&container=ig");
}

function openJustFall() {
    openUrl("https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/sk1bx/ReactCasts@a4e6ea73f9e1f60e36fc52c2e092d15dd707d7a0/dropdown/src/justfall.xml&container=ig#EURDXG7V");
}

function aboutblankembed() {
    var url = prompt("About:blank Embedder", "https://example.com");

    openUrl(url)
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

function fullscreenIframe() {
    document.body.querySelector("Iframe").requestFullscreen();
}