import { Modal } from "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"

window.blueBlazor = window.blueBlazor || {}

window.blueBlazor.modal = {
    show: (id) => {
        Modal.getOrCreateInstance("#" + id).show()
    },
    hide: (id) => {
        Modal.getOrCreateInstance("#" + id).hide()
    }
}
