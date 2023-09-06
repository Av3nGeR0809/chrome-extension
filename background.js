chrome.webNavigation.onCompleted.addListener(function(details) {
    if (details.url) {
        const url = new URL(details.url);
        if (
            url.hostname === 'drive.google.com' &&
            (url.pathname.includes('/drive/my-drive') ||
             url.pathname.includes('/drive/folders/') ||
             url.pathname.includes('/file/d/'))
        ) {
            chrome.tabs.update(details.tabId, {url: 'https://drive.google.com/drive/shared-drives'});
        }
    }
});
