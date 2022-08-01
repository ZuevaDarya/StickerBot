let indexSlide = 1;

function showSlide(n) {
    let slides = document.querySelectorAll('.packs-slider__slide');

    if (n > slides.length) {
        indexSlide = n - slides.length;
    } else if (n == 0) {
        indexSlide = slides.length;
    }
    else if (n < 0) {
        indexSlide = slides.length + n;
    }

    for (let slide of slides) {
        slide.style.display = 'none';
    }

    slides[indexSlide - 1].style.display = 'grid';
}

var nextBotton = document.getElementById("packsNext");
nextBotton.addEventListener('click', function () {
    showSlide(indexSlide += 1);
});

var prevBotton = document.getElementById("packsPrev");
prevBotton.addEventListener('click', function () {
    showSlide(indexSlide -= 1);
});

//Всплывающее окно
$(document).ready(function ($) {

    //Вызов вспдывающего окна по клику на ПАК
    //Сделано для демонстрации, потом убрать 
    $('.packs-card').click(function () {
        $('.get-sticker-window').css('display', 'block');
        $('.get-sticker-window__sticker').fadeIn(400).css('display', 'flex');

        var imgStars = document.querySelectorAll('.get-sticker-window__sticker-star img') ;

        if(imgStars.length == 1) imgStars[0].classList.add('animation');
        else if (imgStars.length == 2) {
            imgStars[0].classList.add('animation');
            imgStars[1].classList.add('animation-01');
        }  else if (imgStars.length == 3) {
            imgStars[0].classList.add('animation');
            imgStars[1].classList.add('animation-01');
            imgStars[2].classList.add('animation-02');
        }else if (imgStars.length == 4) {
            imgStars[0].classList.add('animation');
            imgStars[1].classList.add('animation-01');
            imgStars[2].classList.add('animation-02');
            imgStars[3].classList.add('animation-03');
        }
        
        $('.wrapper').addClass('not-scroll');
       
    });

    // Закрытие по клавише Esc.
    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.get-sticker-window').fadeOut(200);
            $('.get-sticker-window__sticker').fadeOut(200).css('display', 'none');
            $('.wrapper').removeClass('not-scroll');
        }
    });

    // Клик по фону, но не по окну.
    $(document).mouseup(function (e) {
        var errorWindow = $('.get-sticker-window');

        if (!errorWindow.is(e.target) && errorWindow.has(e.target).length === 0) {
            $(errorWindow).fadeOut(200);
            $('.get-sticker-window__sticker').fadeOut(200).css('display', 'none');
            $('.wrapper').removeClass('not-scroll');
        }
    });
});