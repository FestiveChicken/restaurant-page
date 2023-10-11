import './style.css';

function homePage() {
    const content = document.getElementById('content')
    const heading = document.createElement('h2')
    
    content.innerHTML = ''
    heading.textContent = 'The most authentic Italian restaurant in the world'
    content.appendChild(heading)
}

export {
    homePage
}