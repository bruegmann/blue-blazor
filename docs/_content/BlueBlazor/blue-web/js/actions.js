export function init(actionsElement) {
  let menu = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  let collapseMenu = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  if (!menu) menu = actionsElement.querySelector(".BLUE-actions-menu");
  if (!collapseMenu) collapseMenu = actionsElement.querySelector(".BLUE-actions-collapse-menu");
  function updateActions() {
    // reset
    for (const item of menu.children) {
      ;
      item.style.display = "none";
    }
    for (const item of collapseMenu.children) {
      ;
      item.style.display = "";
      item.classList.add("BLUE-actions-collapse-visible");
    }
    let i = 0;
    for (const item of menu.children) {
      ;
      item.style.display = "";
      collapseMenu.children[i].style.display = "none";
      collapseMenu.children[i].classList.remove("BLUE-actions-collapse-visible");
      if (actionsElement.scrollWidth > actionsElement.clientWidth) {
        ;
        item.style.display = "none";
        collapseMenu.children[i].style.display = "";
        collapseMenu.children[i].classList.add("BLUE-actions-collapse-visible");
        break;
      }
      i++;
    }
  }
  updateActions();
  const resizeObserver = new ResizeObserver(() => {
    requestAnimationFrame(updateActions);
  });
  resizeObserver.observe(actionsElement);
  const outsideClickHandler = event => {
    if (!actionsElement) return;
    const openDetails = actionsElement.querySelectorAll("details[open]");
    if (!openDetails || openDetails.length <= 0) return;
    openDetails.forEach(details => {
      if (!details.contains(event.target)) {
        details.removeAttribute("open");
      }
    });
  };
  document.addEventListener("click", outsideClickHandler);
  return {
    updateActions,
    resizeObserver,
    destroy() {
      resizeObserver.disconnect();
      document.removeEventListener("click", outsideClickHandler);
    }
  };
}
window.blueWeb = window.blueWeb || {};
window.blueWeb.actions = {
  init
};