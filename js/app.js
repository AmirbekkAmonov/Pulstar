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

document.querySelectorAll('.side-menu-links a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').slice(1); 
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', 
                block: 'start' 
            });
        }
        const sideMenu = document.querySelector('.side-menu');
        sideMenu.classList.remove('active');
        document.body.classList.remove('no-scroll'); 
        window.removeEventListener('click', closeMenuOnClickOutside);
    });
});

  









  document.querySelectorAll('.header_links a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').slice(1); 
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    });
});



  


  document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".carousel-item");
    const indicators = document.querySelectorAll(".indicator");
    let currentIndex = 0;
    let interval;
    const showSlide = (index) => {
        items[currentIndex].classList.remove("active");
        indicators[currentIndex].classList.remove("active");
        currentIndex = index;
        items[currentIndex].classList.add("active");
        indicators[currentIndex].classList.add("active");
    };

    const startAutoSlide = () => {
        interval = setInterval(() => {
            let nextIndex = (currentIndex + 1) % items.length;
            showSlide(nextIndex);
        }, 5000);
    };

    indicators.forEach((indicator) => {
        indicator.addEventListener("click", () => {
            clearInterval(interval); 
            const index = parseInt(indicator.getAttribute("data-index"));
            showSlide(index);
            startAutoSlide(); 
        });
    });

    startAutoSlide();
});













let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({
    top: 0, 
    behavior: 'smooth' 
  });
}
