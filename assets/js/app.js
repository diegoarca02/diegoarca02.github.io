tippy('.img-mongo', {
    content: 'MongoDB',
    theme: 'tippy-light',
    placement: 'top',
    allowHTML: true,
    interactive: true,
});

tippy('.img-express', {
    content: 'Express',
    theme: 'tippy-light',
    placement: 'top',
    allowHTML: true,
    interactive: true,
});

tippy('.img-angular', {
    content: 'Angular',
    theme: 'tippy-light',
    placement: 'top',
    allowHTML: true,
    interactive: true,
});

tippy('.img-vue', {
    content: 'VUE',
    theme: 'tippy-light',
    placement: 'top',
    allowHTML: true,
    interactive: true,
});

tippy('.img-node', {
    content: 'Node',
    theme: 'tippy-light',
    placement: 'top',
    allowHTML: true,
    interactive: true,
});

setTimeout(() => {
    new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 24,
        pagination: {
        el: ".swiper-pagination",
        clickable: true
        },
        breakpoints: {
        560: {
            slidesPerView: 2
        },
        960: {
            slidesPerView: 3
        }
        }
    });

    new Swiper('.swiper-proyectos-1', {
        "loop": true,
        "grabCursor": false,
        "centeredSlides": true,
        "autoplay": {
            "delay": 0,
            "disableOnInteraction": false
        },
        "freeMode": true,
        "speed": 38000,
        "freeModeMomentum": false,
        "breakpoints": {
            "0": {
            "slidesPerView": 1,
            "spaceBetween": 8
            },
            "500": {
            "spaceBetween": 16
            },
            "768": {
            "slidesPerView": 2,
            "spaceBetween": 24
            }
        }
    });

    new Swiper('.swiper-proyectos-2', {
        "loop": true,
        "grabCursor": false,
        "centeredSlides": true,
        "autoplay": {
            "delay": 0,
            "disableOnInteraction": false
        },
        "freeMode": true,
        "speed": 38000,
        "freeModeMomentum": false,
        "breakpoints": {
            "0": {
            "slidesPerView": 1,
            "spaceBetween": 8
            },
            "500": {
            "spaceBetween": 16
            },
            "768": {
            "slidesPerView": 2,
            "spaceBetween": 24
            }
        }
    });
    
}, 150);

//VIDEO 1

/* var player = videojs('video-container-1', {
controls: true, // Muestra los controles del reproductor
autoplay: false, // No inicia la reproducción automática
poster: './assets/media/4020786_c1d4_2.jpg', // Ruta de la imagen de portada
sources: [{
    src: './assets/media/video-1.mp4', // Ruta del video
    type: 'video/mp4'
}]
});

document.getElementById('video-container-1').addEventListener('click', function () {
player.play();
}); */