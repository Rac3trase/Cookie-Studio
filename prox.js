function quickProxy() {
    var url = window.prompt("Enter the url you would like to unblock!", "https://example.com");

    if (url.substring(0, 8) !== "https://" && url.substring(0, 7) !== "http://") {
        url = "https://" + url;
    }

    var encoded = encode(url);
    var sub = "https://cookie-studio-uv.vercel.app/static/tiw/";
    var final = sub.concat(encoded);

    window.open(final);
}