// Opening About:Blank but with function :D

function openUrl(url, inject, unblock) {
    function encode(str) {
        if (!str) return str;
        return encodeURIComponent(
            str
                .toString()
                .split('')
                .map((char, ind) =>
                    ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char
                )
                .join('')
        );
    }

    var sub = "https://interstellar-three-virid.vercel.app/a/";

    function createLink(url) {
        if (unblock) {
            var url = sub.concat(encode(url));
        }

        let encoded = btoa(url);
        let newUrl = window.location.origin.concat("/Projects/Aboutblank/index.html?", encoded);
        return newUrl;
    }

    function panicButton() {
        win.console.log("Loading panic button...");
        iframe.addEventListener("keydown", logKey);

        function logKey(e) {
            if (e.code == "Backslash") {
                console.log("PANIC BUTTON ACTIVATED!")
                win.location.href = "https://classroom.google.com/";

                win.alert("ABORT MISSION!!!");
            }
        }
    }

    if (url.substring(0, 8) !== "https://" && url.substring(0, 7) !== "http://") {
        url = "https://" + url;
    }

    var yes = createLink(url);

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
    iframe.src = yes;
    iframe.id = "IFRAME";

    var favicon = win.document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = '/Images/GC.png';

    win.document.head.appendChild(favicon);

    win.document.body.appendChild(iframe);

    iframe.onload = function () {
        panicButton(win);

        if (inject) {
            var script = win.document.createElement('script');
            script.src = inject;

            var iframeInContent = win.document.getElementById("IFRAME");

            if (iframeInContent) {
                var iframeDoc = iframeInContent.contentDocument || iframeInContent.contentWindow.document;
                iframeDoc.head.appendChild(script);
            } else {
                console.error("Could not find iframe in content.");
            }
        }
    };

    return win;
}

function openGameUrl(url, inject, unblock) {
    var win = openUrl(url, inject, unblock);

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
    button.style.zIndex = '4';
    button.style.borderRadius = '10px';

    function fullscreenIframe() {
        if (win.document.getElementById("IFRAME").requestFullscreen()) {
            win.console.log("Trying to go fullscreen!");
            win.document.getElementById("IFRAME").document.body.getElementById("PLAYGAME").requestFullscreen();
        }
    }

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

// Cool

function hidesite() {
    openUrl(location.href);
    window.location.href = "https://www.google.com";
}

function getRList(list1) {
    return list1[Math.floor(Math.random() * list1.length)];
}

function aboutblankembed() {
    var url = window.prompt("About:blank Embedder", "https://example.com");

    openUrl(url);

    window.alert("Opened about:blank in new tab!");
}

// Main | DONT TOUCH UNLESS U KNOW WHAT U DOING!

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

// Button Examples

function niceButton() {
    Swal.fire({
        title: 'Notification',
        text: 'Very Cool',
        icon: 'success',
        confirmButtonText: 'Ok'
    })
}

// Cookies

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

// Stop copy me code

function stopCopyMe() {
    eval("debugger");
    console.clear();
}

// Redirect Stuff

function redirect(url) {
    let encoded = btoa(url);
    let newUrl = window.location.origin.concat("/redirect.html?", encoded);
    window.location.href = newUrl;
}

function getRedirect(url) {
    let newUrl = window.location.origin.concat("/gRedirect.html?", url);
    return newUrl;
}

function createRedirect() {
    var url = window.prompt("Redirect Url Maker", "https://example.com");

    if (url == null) {
        window.alert("No answer given, or error percieved!");
        return;
    }

    let x = getRedirect(url);
    window.alert("Your redirect url is ready!");

    window.location.href = x;
}


// All the game/proxies/other functions

function openKour() {
    openGameUrl("https://kour.io");
}

function openUnblock() {
    const listRH = [
        "https://yhtjygh.haleymonroe.com",
        "https://ujymh.hktrustco.hk",
        "https://ty5hrtng.simonmonroe.com",
        "https://gabe-has-motion.freengers.com",
        "https://ezze.4nets.org",
        "https://egg.hmbygg.se"];

    openUrl(getRList(listRH));
}

function openRoblox() {
    // const listBLOX = ["https://websitesball.com", "https://universityequality.com"];
    // openGameUrl(getRList(listBLOX));
    window.alert("At the moment this does not work!");
}

function open1v1() {
    openGameUrl("https://foxmoss.com/main/games/1v1lol");
}

function openLA() {
    openGameUrl("https://littlealchemy2.com");
}

function open3kh0LITE() {
    openGameUrl("https://lite.3kh0.net");
}

function openOvO() {
    openGameUrl("https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://googleusercontent.b-cdn.net/ovo/ovo.xml&container=ig");
}

function openMathGames() {
    openUrl("https://mathgames66.web.app");
}

function openFnf() {
    openGameUrl("https://foxmoss.com/main/games/fridaynightfunkin");
}

function openJF() {
    openGameUrl("https://games.odd.rip/play/just-fall");
}

function openRetroBowl() {
    openGameUrl("https://games.odd.rip/play/retrobowl");
}

function openSlope() {
    openGameUrl("https://games.odd.rip/play/slope");
}

function openPIO2() {
    openGameUrl("https://games.odd.rip/play/paperio");
}

function openBStars() {
    openGameUrl("https://games.odd.rip/play/basketball-stars");
}

function openBTTS() {
    openGameUrl("https://games.odd.rip/play/big-tower-tiny-square");
}

function openSWSurfers() {
    openGameUrl("https://foxmoss.com/main/games/subway");
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
    openGameUrl("https://mia.browserfps.com");
}

function openMinecraft() {
    openGameUrl("https://eaglercraftx.pages.dev");
}

function openMinecraftPClient() {
    openGameUrl("https://mackeylol.github.io/copyofmasite/eagleronline/index.html");
}

function openPArcade() {
    openUrl("https://plexilearcade.xyz/games.html");
}

function openSGShack() {
    openUrl("https://syce-game-shack.vercel.app");
}

function openBlockpost() {
    openGameUrl("https://ikatchelo.github.io/blockpost");
}

function openPolyTrack() {
    openGameUrl("https://www.kodub.com/apps/polytrack");
}

function openCrossyroads() {
    openGameUrl("https://mackeylol.github.io/copyofmasite/Games/crossyroad/index.html");
}

function openDriveMad() {
    openGameUrl("https://mackeylol.github.io/copyofmasite/Games/DriveMad/index.html");
}

function openOsu() {
    openGameUrl("https://mackeylol.github.io/copyofmasite/Games/webosu/webosu-main/index.html");
}

function openTLOZ() {
    openGameUrl("https://mackeylol.github.io/copyofmasite/Games/emu/SNES/legend-of-zelda-link-to-the-past/index.html");
}

function openSA1() {
    openGameUrl("https://mackeylol.github.io/copyofmasite/Games/emu/GBA/sonic-advance/index.html");
}

function openSA2() {
    openGameUrl("https://mackeylol.github.io/copyofmasite/Games/emu/GBA/sonic-advance-2/index.html");
}

function openUnblockedGoogle() {
    openUrl("https://artclass.site/service/hvtrs8%2F-wuw%2Cgmoelg.aoo%2F%3Dscfg%3Dccvite%24squk%3Dmn");
}

function openWindows11Remake() {
    openGameUrl("https://artclass.site/service/hvtrs8%2F-wkn31%2Cbnugefgg.oe-", false, true);
}

function openGbaEmulator() {
    openUrl("https://cattn.github.io/gba/gba.html");
}

function openWhiteSpider() {
    openUrl("https://whitespider.dev");
}

function openRailin() {
    openUrl("https://railin.hypverr.xyz");
}

function openPHProxy() {
    openUrl("https://www.rateavon.je/error.php");
}

function openHistorySpot() {
    openUrl("https://historyspot.com/activities", false, true);
}

function openClockwork() {
    openUrl(window.location.origin.concat("/Projects/clockwork.html"));
}

function open1v1lolNEW() {
    const list = ["https://buildnow.netlify.app", "https://rac3trase.github.io/1v1.lol", "https://buildnow.glitch.me"];

    openUrl(getRList(list));
}

function openjustfallNEW() {
    const list = ["https://server1-lol.glitch.me", "https://rac3trase.github.io/justfall.lol", "https://justfall-lol.netlify.app"];

    openUrl(getRList(list));
}

function openIntersteller() {
    const list = ["https://interstellar-three-virid.vercel.app"];

    openUrl(getRList(list));
}

function openDoge() {
    const list = ["https://doge-theta-five.vercel.app"];

    openUrl(getRList(list));
}

function openLineRider() {
    const list = ["https://www.linerider.com/", false, true];

    openGameUrl(getRList(list));
}

function openZagota() {
    const list = [
        "https://zatoga.pages.dev",
        "https://zatoga.is-an.app",
        "https://zatoga.is-cool.dev",
        "https://zatoga.mod.land",
        "https://portal.lifescienceventurelab.com",
        "https://delightful-alfajores-ad3ac1.netlify.app",
        "https://zatoga-agb0l.kinsta.page",
        "https://zatoga-learning.onrender.com",
        "https://hopkinton.quality-electronics.com",
        "https://zatoga-three.vercel.app",
        "https://zatoga.lareida.org",
        "https://zatoga.apocalypto.org.uk",
        "https://zatoga-guffy.achpnl.cl",
        "https://zatoga-guffy.largent.org",
        "https://zatoga-iamguff.largent.org",
        "https://zatoga-guffyroyals.largent.org",
        "https://zatoga.achpnl.cl",
        "https://portal.lifescienceventurelab.com",
        "https://zatoga-guff-w.largent.org",
        "https://zatoga-guffishim.largent.org",
        "https://zatoga-guffyisw.largent.org",
        "https://zatoga-wguffy.largent.org",
        "https://zatoga.hotfuck.org",
        "https://freebsdlearning.nursph.org"
    ];

    openUrl(getRList(list));
}

function openKahootHackz() {
    openUrl("https://kahoot.it", "", true);
}

function openGimkitHackz() {
    openUrl("https://gimkit.com/join", "", true);
}

function openBlooketHackz() {
    openUrl("https://play.blooket.com/play", "/Scripts/Hacks/BlooketHackzGUI.js", true)
}

function openGTranslate() {
    openUrl("https://translate.google.com", false, true);
}

function openNealFun() {
    openUrl("https://neal.fun", false, true);
}

// Stuff
function loadOptionsGames() {
    var select = document.getElementById("options");
    var gCon = document.getElementById("GCONTENT2")
    var gplusCon = document.getElementById("GCONTENT1")

    if (select[select.selectedIndex].text == "Games") {
        gCon.style.display = "block";
        var paras = document.getElementsByClassName('deleteAfterLoad');

        while(paras[0]) {
            paras[0].parentNode.removeChild(paras[0]);
        }
    } else if (select[select.selectedIndex].text == "Games++") {
        gplusCon.style.display = "block";
        var paras = document.getElementsByClassName('deleteAfterLoad');

        while(paras[0]) {
            paras[0].parentNode.removeChild(paras[0]);
        }
    }
}