
function toggleMenu() {
    const sideMenu = document.querySelector('.side-menu');
    const isActive = sideMenu.classList.toggle('active');
  
    if (isActive) {
        document.body.classList.add('no-scroll');
        window.addEventListener('click', closeMenuOnClickOutside);
    } else {
        document.body.classList.remove('no-scroll');
        window.removeEventListener('click', closeMenuOnClickOutside);
    }
  }
  
  function closeMenuOnClickOutside(event) {
    const sideMenu = document.querySelector('.side-menu');
    const menuButton = document.querySelector('.menu-button'); 
    if (!sideMenu.contains(event.target) && !menuButton.contains(event.target)) {
        sideMenu.classList.remove('active');
        document.body.classList.remove('no-scroll');
        window.removeEventListener('click', closeMenuOnClickOutside);
    }
  }
  