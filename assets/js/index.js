document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper(".swiper", {
        loop: true,
        slidesPerView: 3,
        speed: 8000,
        allowTouchMove: false,
        autoplay: {
            delay: 0,
            reverseDirection: true,
        },
    })
    const text = document.querySelector('.hover-title');
    text.addEventListener('mouseover', () => {
        if (!priceGet){ return false;}
        text.style.transform = 'translateX(2000px)';
    });

    text.addEventListener('mouseout', () => {
        text.style.transform = 'translateX(0)';
    });
});

document.addEventListener("scroll", function () {
    const image = document.querySelector('.fade-image');
    const rect = image.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {  // 100px前に発動
        image.classList.add('show');
    }
});

