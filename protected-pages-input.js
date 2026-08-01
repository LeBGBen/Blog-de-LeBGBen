var protectedPages = [
                'contenus-averti',
                'contenus',
                'erreur-systeme',
                'found-me',
                'hide',
                'navigation',
                'img-intro',
                'README',
                'contents/Naturalisme/autres-arts',
                'contents/Naturalisme/diapo',
                'contents/Naturalisme/naturalisme',
                'contents/Naturalisme/txt-etude',
                'contents/Galerie/galerie'
                //Compléter cette liste au besoin
            ];

document.getElementById('b-acces').addEventListener('click', function () {
    var code = document.getElementById('acces').value.trim();

    if (!code) {
        window.location.href = 'erreur-systeme.html';
        return;
    }

    if (protectedPages.indexOf(code) !== -1) {
        window.location.href = 'erreur-systeme.html';
        return;
    }

    var targetUrl = code + '.html';

    fetch(targetUrl, { method: 'GET' })
    .then(function (response) {
        if (response.ok && protectedPages.indexOf(code) === -1) {
            window.location.href = targetUrl;
        } else {
            window.location.href = 'erreur-systeme.html';
        }
    })
    .catch(function () {
        window.location.href = 'erreur-systeme.html';
    });
});

document.getElementById('acces').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('b-acces').click();
    }
});