var shopBlocksLinks = document.querySelectorAll('.tabs__item');
var shopBlocks = document.querySelectorAll('.shop__tabs-block');

shopBlocksLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        if (e.target) {
            link.style.background = '#ffd600';
            link.style.color = '#282a4f';

            for (let i = 0; i < shopBlocksLinks.length; i++) {
                if (shopBlocksLinks[i] != link) {
                    shopBlocksLinks[i].style.color = '#ffd600';
                    shopBlocksLinks[i].style.background = '#282a4f';
                }
            }

            var linkHref = link.getAttribute('href');

            shopBlocks.forEach(block => {
                var blockId = block.getAttribute('id');
                if (linkHref.indexOf(blockId) > -1) {
                    block.style.display = 'grid';
                } else block.style.display = 'none';
            });
        }
    });
});

//Добавить/ уменьшить
var shopCards = document.querySelectorAll('.shop__tabs-container');
var total = document.querySelector('.shop__total');

shopCards.forEach(card => {
    var cardPrice = card.querySelector('.tabs-card__price').childNodes[0].nodeValue;

    var buttonPlus = card.querySelector('.shop__button_plus');
    var buttonMinus = card.querySelector('.shop__button_minus');

    var totalDiamond = total.querySelector('.tabs-card__price_diamond');
    var totalGold = total.querySelector('.tabs-card__price_gold');
    var totalRuble = total.querySelector('.tabs-card__price_ruble');

    buttonPlus.addEventListener('click', function () {
        var sumTag = card.querySelector('.shop__num');
        var price = parseFloat(cardPrice);
        var sum = parseFloat(sumTag.innerText);
        sum += 1;

        sumTag.textContent = String(sum);

        if (card.querySelector('.tabs-card__price').className.indexOf('diamond') > -1) {
            if (price == 0 || isNaN(price)) {
                var diamond = parseFloat(totalDiamond.innerText);
                diamond += 0;
                totalDiamond.childNodes[0].textContent = String(diamond);
            } else {
                var diamond = parseFloat(totalDiamond.innerText);
                diamond += price;
                totalDiamond.childNodes[0].textContent = String(diamond);
            }
        } else if (card.querySelector('.tabs-card__price').className.indexOf('gold') > -1) {
            if (price == 0 || isNaN(price)) {
                var gold = parseFloat(totalGold.innerText);
                gold += 0;
                totalGold.childNodes[0].textContent = String(gold);
            } else {
                var gold = parseFloat(totalGold.innerText);
                gold += price;
                totalGold.childNodes[0].textContent = String(gold);
            }
        } else if (card.querySelector('.tabs-card__price').className.indexOf('ruble') > -1) {
            if (price == 0 || isNaN(price)) {
                var ruble = parseFloat(totalRuble.innerText);
                ruble += 0;
                totalRuble.childNodes[0].textContent = String(ruble);
            } else {
                var ruble = parseFloat(totalRuble.innerText);
                ruble += price;
                totalRuble.childNodes[0].textContent = String(ruble);
            }
        }
    });

    buttonMinus.addEventListener('click', function () {
        var sumTag = card.querySelector('.shop__num');
        var price = parseFloat(cardPrice);
        var sum = parseFloat(sumTag.innerText);

        if (sum > 0) {
            sum -= 1;
            sumTag.textContent = String(sum);

            if (card.querySelector('.tabs-card__price').className.indexOf('diamond') > -1) {
                if (price == 0 || isNaN(price)) {
                    var diamond = parseFloat(totalDiamond.innerText);
                    diamond -= 0;
                    totalDiamond.childNodes[0].textContent = String(diamond);
                } else {
                    var diamond = parseFloat(totalDiamond.childNodes[0].nodeValue);
                    diamond -= price;
                    totalDiamond.childNodes[0].textContent = String(diamond);
                }
            } else if (card.querySelector('.tabs-card__price').className.indexOf('gold') > -1) {
                if (price == 0 || isNaN(price)) {
                    var gold = parseFloat(totalGold.childNodes[0].nodeValue);
                    gold -= 0;
                    totalGold.childNodes[0].textContent = String(gold);
                } else {
                    var gold = parseFloat(totalGold.childNodes[0].nodeValue);
                    gold -= price;
                    totalGold.childNodes[0].textContent = String(gold);
                }
            } else if (card.querySelector('.tabs-card__price').className.indexOf('ruble') > -1) {
                if (price == 0 || isNaN(price)) {
                    var ruble = parseFloat(totalRuble.childNodes[0].nodeValue);
                    ruble -= 0;
                    totalRuble.childNodes[0].textContent = String(ruble);
                } else {
                    var ruble = parseFloat(totalRuble.childNodes[0].nodeValue);
                    ruble -= price;
                    totalRuble.childNodes[0].textContent = String(ruble);
                }
            }
        }
    });
});

//Всплывающее окно
$(document).ready(function ($) {

    //Вызов вспдывающего окна по кнопке КУПИТЬ
    //Сделано для демонстрации, потом убрать 
    $('#buyButton').click(function () {
        $('.error-window').fadeIn(200).css('display', 'block');
        $('.wrapper').addClass('not-scroll');
    });


    // Клик по ссылке "Закрыть".
    $('.error-window__button_disagree').click(function () {
        $(this).parents('.error-window').fadeOut(200);

        $('.wrapper').removeClass('not-scroll');
        return false;
    });

    // Закрытие по клавише Esc.
    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.error-window').fadeOut(200);
            $('.wrapper').removeClass('not-scroll');
        }
    });

    // Клик по фону, но не по окну.
    $(document).mouseup(function (e) {
        var errorWindow = $('.error-window');

        if (!errorWindow.is(e.target) && errorWindow.has(e.target).length === 0) {
            $(errorWindow).fadeOut(200);
            $('.wrapper').removeClass('not-scroll');
        }
    });

    
    // Клик по ссылке "Согласиться".
    $('.error-window__button_agree').click(function () {
        $(this).parents('.error-window').fadeOut(200);

        $('.wrapper').removeClass('not-scroll');
        return false;
    });
});