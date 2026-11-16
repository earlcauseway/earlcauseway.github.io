const button = document.querySelector('.menuButton')
const menu = document.querySelector('#menu')

// menu btn evnt
button.addEventListener('click', () => {
    const open = menu.classList.toggle('open')
    button.setAttribute('aria-expanded', open)
})