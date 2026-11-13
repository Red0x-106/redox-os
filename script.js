function openWindow(windowId) {
    const window = document.getElementById(windowId);

    if (window) {
        window.style.display = "block";
    }
}

function closeWindow(windowId) {
    const window = document.getElementById(windowId);

    if (window) {
        window.style.display = "none";
    }
}
