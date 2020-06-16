import { EXTERNAL_LIBS, IFRAME_ID } from "./generation.const.js";

function generatePage() {
  var preview = document.getElementById(IFRAME_ID.preview);
  var code = document.getElementById(IFRAME_ID.code);
  var previewDoc = document.implementation.createHTMLDocument("New Document");
  var codeDoc = document.implementation.createHTMLDocument("New Document");
  var p = previewDoc.createElement("p");
  // for (let i = 0; i < 50; i++) {
  p.innerHTML += "\nThis is a new paragraph.\n";
  // }
  try {
    previewDoc.body.appendChild(p);
    const codeEl = codeDoc.body.appendChild(codeDoc.createElement("pre"));

    let changedText = previewDoc.body.innerHTML
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    codeEl.innerHTML = changedText;
    console.log(codeDoc.body.innerHTML);
  } catch (e) {
    console.log(e);
  }

  var previewDestDocument = preview.contentDocument;
  var codeDestDocument = code.contentDocument;
  var newPreviewNode = previewDestDocument.importNode(
    previewDoc.documentElement,
    true
  );
  var newCodewNode = codeDestDocument.importNode(codeDoc.documentElement, true);

  previewDestDocument.replaceChild(
    newPreviewNode,
    previewDestDocument.documentElement
  );
  codeDestDocument.replaceChild(newCodewNode, codeDestDocument.documentElement);
}

document.getElementById("generate-button").onclick = generatePage;
