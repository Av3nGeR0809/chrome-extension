(function() {
    // A function to simulate a mouse click
    function triggerClick(element) {
        const event = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
        });
        element.dispatchEvent(event);
    }

    document.body.addEventListener('click', (e) => {
        // If the clicked element or any of its parents has a data-tooltip attribute of 'My Drive'
        let target = e.target;
        while (target !== null) {
            if (target.getAttribute && target.getAttribute('data-tooltip') === 'My Drive') {
                // If so, find the 'Shared drives' element and click it
                const sharedDriveElement = document.querySelector('[data-tooltip="Shared drives"]');
                if (sharedDriveElement) {
                    setTimeout(() => {
                        triggerClick(sharedDriveElement);
                    }, 50);  // Give a slight delay to ensure the click registers after the original click event has completed.
                    break;
                }
            }
            target = target.parentNode;
        }
    }, true);
})();
