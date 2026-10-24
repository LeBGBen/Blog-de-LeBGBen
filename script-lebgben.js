function galerie(url, img) {
    img = img.querySelector("img");
    img.style.transform = "scale(2)";
    img.style.opacity = "0";
    setTimeout(function () {
        window.open(url, "_blank");
        setTimeout(function () {
            img.style.transform = "scale(1)";
            img.style.opacity = "1";
        }, 500)
    }, 500);
}