window.blueBlazor = window.blueBlazor || {}

window.blueBlazor.autoComplete = {
    init: (id) => {
        const blueAutoComplete = document.getElementById(id)

        window.addEventListener("click", (event) => {
            const input = blueAutoComplete.querySelector(
                ".blue-auto-complete-input"
            )
            const menu = blueAutoComplete.querySelector(
                ".blue-auto-complete-menu"
            )

            if (!blueAutoComplete.contains(event.target)) {
                menu.classList.add("d-none")
                input.setAttribute("aria-expanded", "false")
                return
            }

            if (event.target === input) {
                menu.classList.remove("d-none")
                input.setAttribute("aria-expanded", "true")
            }

            if (
                event.target.classList.contains("blue-auto-complete-menu-item")
            ) {
                // input.value = event.target.innerText
                menu.classList.add("d-none")
                input.setAttribute("aria-expanded", "false")
            }
        })

        window.addEventListener("keydown", (event) => {
            const input = blueAutoComplete.querySelector(
                ".blue-auto-complete-input"
            )
            const menu = blueAutoComplete.querySelector(
                ".blue-auto-complete-menu"
            )

            if (event.key === "Escape") {
                menu.classList.add("d-none")
                input.setAttribute("aria-expanded", "false")
            }

            if (event.key === "ArrowDown") {
                const focusedItem = menu.querySelector(
                    ".blue-auto-complete-menu-item:focus"
                )
                if (focusedItem) {
                    focusedItem.nextElementSibling?.focus()
                } else {
                    menu.firstElementChild?.focus()
                }
            }

            if (event.key === "ArrowUp") {
                const focusedItemFirst = menu.querySelector(
                    ".blue-auto-complete-menu-item:first-child:focus"
                )
                const focusedItem = menu.querySelector(
                    ".blue-auto-complete-menu-item:focus"
                )
                if (focusedItemFirst) {
                    input.focus()
                } else if (focusedItem) {
                    focusedItem.previousElementSibling?.focus()
                } else {
                    menu.lastElementChild?.focus()
                }
            }
        })
    }
}
