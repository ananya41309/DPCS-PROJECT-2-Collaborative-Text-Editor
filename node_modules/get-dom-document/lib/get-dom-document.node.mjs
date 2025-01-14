import { createRequire } from "module";

let nodeRequire = null;
let nodeDomDocument = null;

function getNodeReqire() {
  if (typeof require !== "undefined") {
    return require;
  }

  if (!nodeRequire) {
    nodeRequire = createRequire(import.meta.url);
  }
  return nodeRequire;
}

function getNodeDomDocument() {
  if (!nodeDomDocument) {
    try {
      const require = getNodeReqire();
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

export { getDomDocument };
