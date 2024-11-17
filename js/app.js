
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
  







  


  document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".carousel-item");
    const indicators = document.querySelectorAll(".indicator");
    let currentIndex = 0;
    let interval;

    // Funksiya: Slaydni o'zgartirish
    const showSlide = (index) => {
        items[currentIndex].classList.remove("active");
        indicators[currentIndex].classList.remove("active");
        currentIndex = index;
        items[currentIndex].classList.add("active");
        indicators[currentIndex].classList.add("active");
    };

    // Avtomatik slayd funksiyasi
    const startAutoSlide = () => {
        interval = setInterval(() => {
            let nextIndex = (currentIndex + 1) % items.length;
            showSlide(nextIndex);
        }, 5000); // 5 soniyadan keyin slayd o‘zgaradi
    };

    // Indikatorni bosganda slaydni almashtirish
    indicators.forEach((indicator) => {
        indicator.addEventListener("click", () => {
            clearInterval(interval); // Avtomatik slaydni vaqtincha to‘xtatish
            const index = parseInt(indicator.getAttribute("data-index"));
            showSlide(index);
            startAutoSlide(); // Keyin avtomatik rejimni qayta ishga tushirish
        });
    });

    // Boshlash
    startAutoSlide();
});
