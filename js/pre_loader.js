var loader;

function loadNow(opacity) {
    if (opacity <= 0) {
        displayContent();
    } else {
        loader.style.opacity = opacity;
        window.setTimeout(function() {
            loadNow(opacity - 0.05);
        }, 50);
    }
}

function displayContent() {
    loader.style.display = 'none';
    document.getElementById('preLoader').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function() {
    loader = document.getElementById('preLoader');
    loadNow(1);
});