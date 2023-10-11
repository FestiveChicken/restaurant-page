import './style.css';

function createHeader() {
    const header = document.getElementById('header')
    const buttonNav = document.getElementById('buttonNav')

    const heading = document.createElement('h1')
    const menuButton = document.createElement('button')
    const homeButton = document.createElement('button')
    const contactButton = document.createElement('button')

    heading.textContent = 'Bella Cucina'
    menuButton.textContent = 'Menu'
    homeButton.textContent = 'Home'
    contactButton.textContent = 'Contact'

    menuButton.setAttribute('id', 'menuButton')
    homeButton.setAttribute('id', 'homeButton')
    contactButton.setAttribute('id', 'contactButton')

    header.appendChild(heading)
    buttonNav.appendChild(menuButton)
    buttonNav.appendChild(homeButton)
    buttonNav.appendChild(contactButton)
}

export {
    createHeader
}