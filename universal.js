const header = document.getElementById('header')
const mobileMenu = document.getElementById('mobileMenu')
const websitewidth = header.offsetWidth;
const bottomOfHeader = header.offsetHeight + 'px';
const hamburgerMenu = document.getElementById('hamburger')
const hamburgerIcon = document.getElementById('hamburgerIcon')




let hamburgerNav = 'closed'


hamburgerMenu.addEventListener('click', () => {
    
    if(hamburgerNav === 'closed'){
        mobileMenu.style.display = 'Flex';
        hamburgerNav = 'open'
        mobileMenu.style.left = websitewidth - mobileMenu.offsetWidth + 'px'
        hamburgerIcon.src = 'assets/arrow.png'
    } else {
        mobileMenu.style.display = 'none';
        hamburgerNav = 'closed'
        hamburgerIcon.src = 'assets/menu.png'
    }
    
})
