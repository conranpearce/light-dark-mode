function applyIcon (type) {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';

    if (type == "light") {
        link.href = 'favicon/light-mode/favicon-32x32.png';
    } else if (type == "dark") {
        link.href = 'favicon/dark-mode/favicon-32x32.png';
    }

    document.getElementsByTagName('head')[0].appendChild(link);
}

if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
    applyIcon("dark");
}

if (window.matchMedia('(prefers-color-scheme:light)').matches) {
    applyIcon("light");
}

var dark = window.matchMedia('(prefers-color-scheme:dark)');

dark.addEventListener( "change", (e) => {
    if (e.matches) {
        applyIcon("dark");

    } else {
        applyIcon("light");
    }
})
