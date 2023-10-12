import { homePage } from "./homePage";
import { menuPage } from "./menuPage";
import { contactPage } from "./contactPage";

function tabs() {
    const menuButton = document.getElementById('menuButton')
    const homeButton = document.getElementById('homeButton')
    const contactButton = document.getElementById('contactButton')

    menuButton.addEventListener("click", () => {
        menuPage()
    })

    homeButton.addEventListener("click", () => {
        homePage()
    })

    contactButton.addEventListener("click", () => {
        contactPage()
    })
}

export {
    tabs
}