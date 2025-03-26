
const menu = document.querySelector('.open-menu')
const close = document.querySelector('.close-menu')
const nav = document.querySelector('nav')

const burger = document.getElementById('open-svg')
const closeSvg = document.getElementById('close-svg')
const profileSVG = document.getElementById('profile-svg')

const menuMobile = document.querySelector('.open-menu-mobile')
const closeMobile = document.querySelector('.close-menu-mobile')
const navMobile = document.querySelector('.nav')

/*Open Web Menu*/
menu.addEventListener('click', () => {
    nav.classList.add('opened-menu')
    burger.removeAttribute('id')
    closeSvg.removeAttribute('id')
    profileSVG.removeAttribute('id')
})

/*Close Web Menu*/

close.addEventListener('click', () => {
    nav.classList.remove('opened-menu')
    close.setAttribute('id','close-svg')
    menu.setAttribute('id','open-svg')
    profileSVG.setAttribute('id','profile-svg')


})

/*Open Mobile Menu*/

menuMobile.addEventListener('click', () => {
    navMobile.setAttribute('id', 'nav')
})

closeMobile.addEventListener('click', () =>{
    navMobile.removeAttribute('id')
})

