
document.addEventListener('DOMContentLoaded', () => {

    if(document.querySelector("#header")) {
        gsap.set("#header", { y: 0 }); // 初期位置を設定
        
        gsap.from("#header", {
            opacity: 0,
            y: -50, // ヘッダーが上からスライドダウンするアニメーション
            duration: 1,
            delay: 0.2,
        });
    }
    
    if(document.querySelector(".profile-box2")) {
        gsap.from(".profile-box2", {
            opacity: 0,
            y: 50,
            duration: 1,
        });
    }
    
    if(document.querySelector(".flip-container")) {
        gsap.from(".flip-container", {
            opacity: 0,
            x: 100,
            duration: 1,
            delay: 0.4,
        });
    }

    // Swiper設定
    const swiper = new Swiper(".swiper", {
        loop: true,
        slidesPerView: 3,
        speed: 8000,
        allowTouchMove: false,
        autoplay: {
            delay: 0,
            reverseDirection: true,
        },
    });

    gsap.from(".fade-image", {
        opacity: 0,  
        y: 50,       
        duration: 1, 
        scrollTrigger: {
            trigger: ".mainvisual",  
            start: "top 80%",
            // markers: true,

        },
        onComplete: () => {
            // document.querySelector('.fade-image').classList.add('show');
        }
    });
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});