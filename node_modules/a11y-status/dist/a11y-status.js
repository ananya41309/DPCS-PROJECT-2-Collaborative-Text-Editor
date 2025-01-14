// src/a11y-status.ts
import { debounce } from "throttle-debounce";
var statusDiv;
var getStatusDiv = (doc = document) => {
  if (statusDiv) {
    return statusDiv;
  }
  statusDiv = doc.createElement("div");
  statusDiv.setAttribute("id", "a11y-status-message");
  statusDiv.setAttribute("role", "status");
  statusDiv.setAttribute("aria-live", "polite");
  statusDiv.setAttribute("aria-relevant", "additions text");
  Object.assign(statusDiv.style, {
    border: "0",
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: "0",
    position: "absolute",
    width: "1px"
  });
  doc.body.append(statusDiv);
  return statusDiv;
};
var cleanupStatus = debounce(500, () => {
  getStatusDiv().textContent = "";
});
var setStatus = (status, doc) => {
  const div = getStatusDiv(doc);
  if (!status) {
    return;
  }
  div.textContent = status;
  cleanupStatus();
};
export {
  setStatus
};
