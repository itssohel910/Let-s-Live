chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    if (changeInfo.url.includes("suicide")) {
      chrome.tabs.executeScript(tabId, {file: "contentScript.js"});
    }
  }
});
