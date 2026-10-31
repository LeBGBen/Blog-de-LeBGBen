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

function themeApply() {
    if (localStorage.getItem("Theme") === "dark") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
}

themeApply();

function theme() {
    if (localStorage.getItem("Theme") === "dark") {
        localStorage.setItem("Theme", "light");
        document.body.classList.remove("dark-mode");
        document.getElementById("bouton-bascule-cercle").style.transform = "translateX(0)";
        document.getElementById("theme-info").textContent = "Thème clair";
    } else {
        localStorage.setItem("Theme", "dark");
        document.body.classList.add("dark-mode");
        document.getElementById("bouton-bascule-cercle").style.transform = "translateX(1em)";
        document.getElementById("theme-info").textContent = "Thème sombre";
    }
}

function themeSelector() {
    if (localStorage.getItem("Theme") === "dark") {
        document.getElementById("bouton-bascule-cercle").style.transform = "translateX(1em)";
        document.getElementById("theme-info").textContent = "Thème sombre";
    } else {
        document.getElementById("bouton-bascule-cercle").style.transform = "translateX(0)";
        document.getElementById("theme-info").textContent = "Thème clair";
    }
}

function setTheme(theme) {
    localStorage.setItem("Theme", theme);
    document.getElementById("set-theme").style.display = "none";
    themeApply();
}

function reset() {
    localStorage.setItem("Theme", "");
    window.location.href = "index.html";
}