chrome.webNavigation.onCompleted.addListener(function(details) {
  if (details.url && details.url.startsWith('https://drive.google.com/drive/my-drive')) {
    chrome.tabs.update(details.tabId, {url: 'https://drive.google.com/drive/shared-drives'});
  }
});
