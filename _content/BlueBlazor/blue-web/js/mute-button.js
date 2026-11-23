import { createParts, wrappedButton } from "@ui-sdk/web";
import { definePrimitive } from "@ui-sdk/core";
import clsx from "clsx";
const muteButton = definePrimitive({
  name: "mute-button",
  state: () => ({
    muted: false
  }),
  api: context => ({
    toggle: () => context.store.set({
      muted: !context.store.get().muted
    })
  }),
  slots: slot => ({
    root: slot({
      attrs: state => ({
        type: "button",
        "aria-pressed": String(state.muted),
        class: clsx("btn", {
          active: state.muted
        })
      }),
      press: _ref => {
        let api = _ref.api;
        return api.toggle();
      }
    })
  })
});
createParts(muteButton, {
  root: {
    tag: "mute-button",
    target: wrappedButton
  }
});