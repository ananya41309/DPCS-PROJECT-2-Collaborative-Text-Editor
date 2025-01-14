function getDomDocument() {
  if (typeof document !== "undefined") {
    return document;
  }

  return null;
}

module.exports.getDomDocument = getDomDocument;
