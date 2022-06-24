const burger = document.querySelector('.hamburger'),
      menu = document.querySelector('.nav'),
      close = document.querySelector('.header__close'),
      logoInMobileMenu = document.querySelector('.header__menu-logo');



function openMenu() {

    burger.addEventListener('click', function() {
        menu.style.display = 'block';
        close.classList.remove('d-none');
        logoInMobileMenu.classList.remove('d-none');
    })
    
}

function closeMenu() {
    close.addEventListener('click', function() {
        menu.style.display = 'none';
        close.classList.add('d-none');
        logoInMobileMenu.classList.add('d-none');
    })
}

openMenu();
closeMenu();