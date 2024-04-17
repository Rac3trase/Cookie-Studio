function openUrl(url1) {
    var url = url1;

    if (url.substring(0, 8) !== "https://" && url.substring(0, 7) !== "http://") {
        url = "https://" + url;
    }

    var win = window.open();

    win.document.body.style.margin = "0";
    win.document.body.style.height = "100vh";
    win.document.title = "Home";

    var iframe = win.document.createElement("iframe");
    iframe.style.border = "none";
    iframe.style.width = "100vw";
    iframe.style.height = "100vh";
    iframe.style.margin = "0";
    iframe.style.overflow = "hidden";
    iframe.referrerPolicy = "no-referrer";
    iframe.allowFullscreen = true;
    iframe.src = url;

    var favicon = win.document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = '/Images/GoogleClassrom.svg';
    win.document.head.appendChild(favicon);

    win.document.body.appendChild(iframe);
}

function openGameUrl(url1) {
    var url = url1;

    if (url.substring(0, 8) !== "https://" && url.substring(0, 7) !== "http://") {
        url = "https://" + url;
    }

    var win = window.open();

    function fullscreenIframe() {
        if (win.document.querySelector("iframe")) {
            win.document.querySelector("iframe").requestFullscreen();
        }
    }

    win.document.body.style.margin = "0";
    win.document.body.style.height = "100vh";
    win.document.title = "Calculator";

    var iframe = win.document.createElement("iframe");
    iframe.style.border = "none";
    iframe.style.width = "100vw";
    iframe.style.height = "100vh";
    iframe.style.margin = "0";
    iframe.style.overflow = "hidden";
    iframe.referrerPolicy = "no-referrer";
    iframe.allowFullscreen = true;
    iframe.src = url;

    var favicon = win.document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = '/Images/Calculator.png';
    win.document.head.appendChild(favicon);

    win.document.body.appendChild(iframe);

    var button = win.document.createElement('button');
    button.innerHTML = '&#x26F6;';
    button.style.position = 'fixed';
    button.style.top = '20px';
    button.style.right = '20px';
    button.style.backgroundColor = '#333';
    button.style.backgroundSize = '1px 1px';
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.padding = '10px 20px';
    button.style.fontSize = '16px';
    button.style.cursor = 'pointer';
    button.style.zIndex = '2';
    button.style.borderRadius = '10px';

    button.addEventListener('click', fullscreenIframe);

    button.style.transition = 'background-color 0.3s ease';
    button.addEventListener('mouseenter', function () {
        button.style.backgroundColor = '#555';
    });
    button.addEventListener('mouseleave', function () {
        button.style.backgroundColor = '#333';
    });

    win.document.body.appendChild(button);
}

function openUsingSite(url) {
    var before = encodeURI(url)
    var encoded = btoa(before);
    var goUrl = "/go.html";
    var lastUrl = goUrl.concat("?", encoded);
    window.location.href = lastUrl;
}

function hidesite() {
    openUrl(location.href);
    window.location.href = "https://www.google.com/";
}

function getRList(list1) {
    return list1[Math.floor(Math.random() * list1.length)];
}

function openUnblock() {
    const listRH = ["https://house.hec.to/",
        "https://yhtjygh.haleymonroe.com/",
        "https://ujymh.hktrustco.hk/",
        "https://ty5hrtng.simonmonroe.com/",
        "https://gabe-has-motion.freengers.com/",
        "https://ezze.4nets.org/",
        "https://egg.hmbygg.se/"];
    openUsingSite(getRList(listRH));
}

function open1v1() {
    openGameUrl("https://foxmoss.com/main/games/1v1lol/");
}

function openOvO() {
    openGameUrl("https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://googleusercontent.b-cdn.net/ovo/ovo.xml&container=ig");
}

function openFnf() {
    openGameUrl("https://foxmoss.com/main/games/fridaynightfunkin/");
}

function openJF() {
    openGameUrl("https://games.odd.rip/play/just-fall/");
}

function openRetroBowl() {
    openGameUrl("https://games.odd.rip/play/retrobowl/");
}

function openSlope() {
    openGameUrl("https://games.odd.rip/play/slope/");
}

function openPIO2() {
    openGameUrl("https://games.odd.rip/play/paperio/");
}

function openBStars() {
    openGameUrl("https://games.odd.rip/play/basketball-stars/");
}

function openBTTS() {
    openGameUrl("https://games.odd.rip/play/big-tower-tiny-square/");
}

function openSWSurfers() {
    openGameUrl("https://foxmoss.com/main/games/subway/");
}

function openCookieClick() {
    openGameUrl("https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/bobydob/JSEngine@e7d53b913d54429e5e118ca9541fb0f8f1f66bdc/dist/cc.xml&container=ig");
}

function openFnaf() {
    openGameUrl("https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%2Ffive-nights-at-freddy-s.xml&container=ig");
}

function openJustFall() {
    openGameUrl("https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/sk1bx/ReactCasts@a4e6ea73f9e1f60e36fc52c2e092d15dd707d7a0/dropdown/src/justfall.xml&container=ig#EURDXG7V");
}

function openKrunker() {
    openGameUrl("https://mia.browserfps.com/");
}

function openMinecraft() {
    openGameUrl("https://eaglercraftx.pages.dev/");
}

function aboutblankembed() {
    var url = prompt("About:blank Embedder", "https://example.com");

    openUsingSite(url);
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
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res;
}