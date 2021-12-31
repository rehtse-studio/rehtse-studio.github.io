window.onload = function () {
    var w = window.location.href;

    if (w == "https://rehtse-studio.github.io/links") {
        window.history.replaceState("https://rehtse-studio.github.io/", "links", "/links");
    }
}