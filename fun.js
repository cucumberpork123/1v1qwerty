function requestPointerLock() {
    const element = document.documentElement;
    if (element.requestPointerLock) {
        element.requestPointerLock();
    } else if (element.mozRequestPointerLock) { // Firefox
        element.mozRequestPointerLock();
    } else if (element.webkitRequestPointerLock) { // Chrome
        element.webkitRequestPointerLock();
    }
}

// Call this function to lock the cursor
requestPointerLock();

// Add event listener to exit pointer lock on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.exitPointerLock();
    }
});
