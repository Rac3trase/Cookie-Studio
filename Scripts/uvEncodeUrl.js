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