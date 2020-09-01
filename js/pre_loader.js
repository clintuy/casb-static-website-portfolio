var loader;

function loadNow() {

    window.setTimeout(function() {
        document.getElementById('preLoader').style.display = 'none';
    }, 500);
}

document.addEventListener("DOMContentLoaded", function() {
    loader = document.getElementById('preLoader');
    loadNow(1);
});