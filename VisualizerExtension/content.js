//Sends an object from the page to the background page as a string
window.addEventListener("message", function (message) {
  if (message.data.from == "myCS") {
    chrome.runtime.sendMessage({
      siteObject: message.data.prop,
    });
  }
});
var myScript = document.createElement("script");
myScript.innerHTML =
  'window.postMessage({from: "myCS", prop: JSON.stringify(Game.town.objectDict)},"*");';
document.body.appendChild(myScript);
