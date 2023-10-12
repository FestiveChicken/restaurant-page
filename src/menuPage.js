import './style.css';

function menuPage() {
    const content = document.getElementById('content')
    const heading = document.createElement('h2')
    const p = document.createElement('p')
    
    content.innerHTML = ''
    heading.textContent = 'The menu is currently under construction'
    p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    content.appendChild(heading)
    content.appendChild(p)
}

export {
    menuPage
}