chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  //When the content script sends the sites object to extract the needed data
  if (message.siteObject !== undefined) {
    console.log(message.siteObject);
    //Process the data
  }
});
