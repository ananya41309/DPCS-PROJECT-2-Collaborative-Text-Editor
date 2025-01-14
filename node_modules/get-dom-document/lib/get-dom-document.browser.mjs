function getDomDocument() {
  if (typeof document !== "undefined") {
    return document;
  }

  return null;
}

export { getDomDocument };
