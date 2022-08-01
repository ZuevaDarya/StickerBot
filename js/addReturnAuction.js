var tableRows = document.querySelectorAll('.auction-table_scroll tr');

tableRows.forEach((tr, index) => {
    if (index != 0) {
        var tdButtons = tr.children[2];
        var tdMinusButton = tdButtons.querySelector('.auction-add__link-prev');
        var tdPlusButton = tdButtons.querySelector('.auction-add__link-next');
        var tdSum = tdButtons.querySelector('.num');

        tdPlusButton.addEventListener('click', function(){
            let price = parseInt(tr.children[0].innerText);
            let offers = parseInt(tr.children[1].innerText);
            let sum = parseInt(tdSum.innerText);
            let total = tr.children[3];
            
            if(offers != 0 && sum < offers){
                sum += 1;
                tdSum.textContent = sum;

                total.childNodes[0].textContent = String(price * sum);
            }
        });

        tdMinusButton.addEventListener('click', function(){
            let price = parseInt(tr.children[0].innerText);
            let sum = parseInt(tdSum.innerText);
            let total = tr.children[3];

            if(sum > 0){
                sum -= 1;
                tdSum.textContent = sum;

                total.childNodes[0].textContent = String(price * sum);
            }
        });
    }
});

//Всплывающее окно
$(document).ready(function ($) {

    //Вызов вспдывающего окна по клику на ПАК
    //Сделано для демонстрации, потом убрать 
    $('.auction-table__buy-button').click(function () {
        $('.get-sticker-window').css('display', 'block');
        $('.get-sticker-window__sticker').fadeIn(400).css('display', 'flex');

        var imgStars = document.querySelectorAll('.get-sticker-window__sticker-star img') 
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
