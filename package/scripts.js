window.onload = function () {
    var w = window.location.href;

    if (w == "https://rehtse-studio.github.io/pages/links.html") {
        window.history.replaceState("https://rehtse-studio.github.io/", "links", "/links");
    }

    if (w == "https://rehtse-studio.github.io/links") {
        window.location.assign("https://rehtse-studio.github.io/pages/links.html");
    }
}
