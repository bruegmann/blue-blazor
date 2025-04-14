"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchData = fetchData;
exports.finishLoading = finishLoading;
exports.guid = void 0;
exports.hideSuccess = hideSuccess;
exports.resetAlertMessage = resetAlertMessage;
exports.scrollToTop = scrollToTop;
exports.setAlertMessage = setAlertMessage;
exports.showSuccess = showSuccess;
exports.startLoading = startLoading;
function startLoading() {
  ;
  document.querySelector(".blue-loading").style.display = "block";
}
function finishLoading() {
  ;
  document.querySelector(".blue-loading").style.display = "";
}
function showSuccess() {
  ;
  document.querySelector(".blue-status-success").style.display = "flex";
}
function hideSuccess() {
  ;
  document.querySelector(".blue-status-success").style.display = "";
}

/**
 * Resets alert messages that was set with `setAlertMessage`.
 * When using React, you should use `StatusProvider` instead: https://bruegmann.github.io/blue-react/v9/component/StatusProvider
 * @param alertClassName Leave empty to reset messages of any status type
 */
function resetAlertMessage(alertClassName) {
  if (!alertClassName) {
    ;
    ["loading", "success", "info", "warning", "danger"].forEach(status => {
      resetAlertMessage(status);
    });
  } else {
    const alertElement = document.querySelector(".blue-status-alert");
    const statusElement = document.querySelector(".blue-status-" + alertClassName);
    if (statusElement) statusElement.style.display = "";
    if (alertElement) {
      alertElement.style.display = "";
      alertElement.classList.remove("alert-" + (alertClassName === "loading" ? "info" : alertClassName));
    }
  }
}

/**
 * When using React, you should use `StatusProvider` instead: https://bruegmann.github.io/blue-react/v9/component/StatusProvider
 */
function setAlertMessage(message) {
  let alertClassName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "info";
  let close = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  let detailText = arguments.length > 3 ? arguments[3] : undefined;
  const alertElement = document.querySelector(".blue-status-alert");
  const statusElement = document.querySelector(".blue-status-" + alertClassName);
  if (statusElement) statusElement.style.display = "flex";
  if (alertElement) {
    alertElement.style.display = "block";
    alertElement.classList.add("alert-" + (alertClassName === "loading" ? "info" : alertClassName));
    alertElement.querySelector(".alert-body").innerHTML = `<h2>` + message + `</h2>`;
    if (detailText) {
      alertElement.querySelector(".alert-body").innerHTML += `<span>` + detailText + `</span>`;
    }
    const btnCloseElement = alertElement.querySelector(".btn-close");
    if (close) {
      btnCloseElement.style.display = "inline-block";
      btnCloseElement.onclick = () => {
        resetAlertMessage(alertClassName);
      };
    } else {
      btnCloseElement.style.display = "none";
    }
  }
}
function s4() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
const guid = () => s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
exports.guid = guid;
function scrollToTop() {
  const routerPage = document.querySelector(".router-page.active");
  routerPage.scroll({
    behavior: "smooth",
    left: 0,
    top: 0
  });
}
const httpStatusCodes = {
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  408: "Request Timeout",
  409: "Conflict",
  500: "Internal Server Error",
  502: "Bad Gateway"
};
function fetchData(input, init) {
  let showErrorDetail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  let onError = arguments.length > 3 ? arguments[3] : undefined;
  return fetch(input, init).then(response => {
    if (!response.ok) throw response;
    return response;
  }).catch(reason => {
    if (reason.text) {
      reason.text().then(errorMessage => {
        setAlertMessage(`${reason.status} - ${reason.statusText || httpStatusCodes[reason.status] || "Error"}`, "danger", true, showErrorDetail ? errorMessage.toString().replace(/(<style[\w\W]+style>)/g, "").replace(/<[^>]+>/g, "") : undefined);
        if (onError) {
          onError(errorMessage, reason);
        }
      });
    }
    throw reason;
  });
}