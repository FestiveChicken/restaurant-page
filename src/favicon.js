import pastaIcon from './img/pasta-icon.png'

function favicon() {
    const link = document.createElement('link')
    link.rel = 'icon'
    link.href = pastaIcon
    document.head.appendChild(link)
}

export {
    favicon
}