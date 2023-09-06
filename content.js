(function() {
    function triggerClick(element) {
        const event = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
        });
        element.dispatchEvent(event);
    }

    function redirectToSharedDrives(e) {
        e.preventDefault();
        e.stopPropagation();

        const sharedDriveElement = document.querySelector('[data-tooltip="Shared drives"]');
        if (sharedDriveElement) {
            triggerClick(sharedDriveElement);
        }
    }

    function disableInteraction(e) {
        // Prevent any action and redirect to Shared Drives
        e.preventDefault();
        e.stopPropagation();
        redirectToSharedDrives(e);
    }

    // Listener to disable interactions on the entire 'My Drive' area
    const checkForMyDriveContainer = setInterval(() => {
        const myDriveEntireContainer = document.getElementById('nt:Dr');
        if (myDriveEntireContainer) {
            myDriveEntireContainer.addEventListener('click', disableInteraction, true);
            clearInterval(checkForMyDriveContainer);
        }
    }, 500);

})();
