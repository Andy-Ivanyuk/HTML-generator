const frames = ["code", "preview"];

function selectOutputType(that, disabledFrame) {
  const selectedSelector = "selected";
  if (!that.classList.contains(selectedSelector)) {
    removeClassOnChild(that.parentNode.childNodes, selectedSelector);
    that.classList.add(selectedSelector);
    switchFrame(frames[disabledFrame]);
  }
}

function switchFrame(type) {
  const disabledSelector = "disabled";
  const disabledFrame = document.getElementById(`iframe-id-${type}`);
  removeClassOnChild(disabledFrame.parentNode.childNodes, "disabled");
  disabledFrame.classList.add(disabledSelector);
}

function removeClassOnChild(childNodes, selector) {
  for (const node of childNodes) {
    node.classList && node.classList.remove(selector);
  }
}
