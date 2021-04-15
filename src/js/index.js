let menuOpen, 
    closeMenu, 
    modalMenu;

menuOpen = document.querySelector('.menu');
modalMenu = document.querySelector('.menu-modal');
closeMenu = document.querySelector('.close-menu')
console.log(closeMenu)

const OpenMenu = (e) => {
    modalMenu.style.display = 'block';
}

const closeModal = (e) => {
    modalMenu.style.display = 'none';
}

closeMenu.addEventListener('click', closeModal)

menuOpen.addEventListener('click', OpenMenu);
