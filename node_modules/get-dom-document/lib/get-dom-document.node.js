let nodeDomDocument = null;

function getNodeDomDocument() {
  if (!nodeDomDocument) {
    try {
      const { JSDOM } = require("jsdom");
      nodeDomDocument = new JSDOM().window.document;
    } catch {
      // ignore
    }
  }

  return nodeDomDocument;
}

function getDomDocument() {
  if (typeof document !== "undefined") {
    return document;
  }

  return getNodeDomDocument();
}

module.exports.getDomDocument = getDomDocument;
