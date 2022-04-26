function toggleNavbar(){
    const navbarBtn = document.querySelector('.navbar-toggler');
    const menuList = document.querySelector('.menu-list');

    navbarBtn.classList.toggle('collapsed');
    menuList.classList.toggle('mobile');
};
