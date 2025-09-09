export function init(actionsElement) {
  let menu = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  let collapseMenu = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  const targetElement = actionsElement.parentElement || actionsElement;
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
      if (targetElement.scrollWidth > targetElement.clientWidth) {
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
  const callback = () => {
    requestAnimationFrame(updateActions);
  };
  const resizeObserver = new ResizeObserver(callback);
  resizeObserver.observe(targetElement);
  const mutationObserver = new MutationObserver(callback);
  mutationObserver.observe(targetElement, {
    attributes: false,
    childList: true,
    subtree: true
  });
  return {
    updateActions,
    resizeObserver,
    mutationObserver,
    destroy() {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
    }
  };
}
window.blueWeb = window.blueWeb || {};
window.blueWeb.actions = {
  init
};