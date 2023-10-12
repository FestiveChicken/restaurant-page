import './style.css';

function contactPage() {
    const content = document.getElementById('content')
    const heading = document.createElement('h2')
    const p = document.createElement('p')
    
    content.innerHTML = ''
    heading.textContent = 'Use the number below to contact us'
    p.textContent = '123-456-7890'
    content.appendChild(heading)
    content.appendChild(p)
}

export {
    contactPage
}