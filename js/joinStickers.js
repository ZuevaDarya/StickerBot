var stickers = document.querySelectorAll('.stickers__sticker');
const joinBlock = document.querySelector('.join-block');

var checkSumStar = 0;
var joinNum = document.querySelector('.join-stickers__agree-button');

stickers.forEach(sticker => {
    sticker.addEventListener('click', function () {
        var namesArr = joinBlock.querySelectorAll('.join-stickers__sticker-title');
        var sumStar = sticker.querySelectorAll('.stickers__sticker-star img').length;

        var buttonNum = String(joinNum.innerText).split('/');
        var changeNum = parseInt(buttonNum[0]);

        //Проверка на добавление стикеров разного тира 
        if (checkSumStar == 0 && sumStar < 4) {
            checkSumStar = sumStar;

            createCard(sticker);
            changeNum += 1;
            joinNum.innerText = changeNum + '/5';
        } else if (sumStar == checkSumStar && sumStar < 4) {
            if (namesArr.length < 5 && changeNum < 5) {
                var stickerName = sticker.querySelector('.stickers__sticker-title').innerText;
                var hasSticker = false;

                for (let i = 0; i < namesArr.length; i++) {
                    if (stickerName == namesArr[i].innerText) hasSticker = true;
                }

                if (hasSticker == false) {
                    createCard(sticker);
                    changeNum += 1;

                    joinNum.innerText = changeNum + '/5';
                    joinNum.classList.remove('join-stickers__agree-button_full');
                }
            }

            if (changeNum == 5) joinNum.classList.add('join-stickers__agree-button_full');
        }

        joinNum.addEventListener('click', function () {
            if (joinBlock.children.length == 0) {
                sum = 0;
                changeNum = 0;
                sumStar = 0;
                checkSumStar = 0;
            }
        });

        if (namesArr.length >= 0) {
            //Увеличить/уменьшить количество стикеров на кнопки +-
            var stickersForJoin = document.querySelectorAll('.join-stickers__sticker-container');

            stickersForJoin.forEach(joinElement => {
                var buttonPlus = joinElement.querySelector('.join-stickers__button_plus');

                var numBlock = joinElement.querySelector('.join-stickers__num').innerText;
                var totalSumSticker = parseInt(numBlock.split('/')[1]);

                var changeSumSticker = joinElement.querySelector('.join-stickers__change-num');
                var sum = parseInt(changeSumSticker.innerText);

                buttonPlus.addEventListener('click', function () {
                    if (changeNum < 5) {
                        if (sum < totalSumSticker && !(joinNum.classList.contains('join-stickers__agree-button_full'))) {
                            sum += 1;
                            changeNum += 1;

                            changeSumSticker.innerText = String(sum);
                            joinNum.innerText = changeNum + '/5';

                            joinNum.classList.remove('join-stickers__agree-button_full');
                        } else if (sum > totalSumSticker) {
                            sum = totalSumSticker;
                            changeNum -= 1;
                        }
                    }

                    if (changeNum == 5) joinNum.classList.add('join-stickers__agree-button_full');
                });

                var buttonMinus = joinElement.querySelector('.join-stickers__button_minus');

                buttonMinus.addEventListener('click', function () {
                    if (sum == 1) {
                        changeNum -= 1;
                        joinNum.innerText = changeNum + '/5';

                        joinElement.remove();

                        if (joinBlock.children.length == 0) {
                            sum = 0;
                            changeNum = 0;
                            sumStar = 0;
                            checkSumStar = 0;
                        }

                        if (joinNum.classList.contains('join-stickers__agree-button_full')) {
                            joinNum.classList.remove('join-stickers__agree-button_full');
                        }
                    } else if (sum > 1 && changeNum > 0) {
                        sum -= 1;
                        changeNum -= 1;

                        changeSumSticker.innerText = String(sum);
                        joinNum.innerText = changeNum + '/5';

                        if (joinNum.classList.contains('join-stickers__agree-button_full')) {
                            joinNum.classList.remove('join-stickers__agree-button_full');
                        }
                    }
                });
            });
        }
    });
});

//Создание html структуры карты и добавление в область объединения
function createCard(sticker) {
    var joinStickersContainer = document.createElement('div');
    joinStickersContainer.className = 'join-stickers__sticker-container';

    var joinSticker = document.createElement('div');
    joinSticker.className = 'join-stickers__sticker';

    var stickerLink = document.createElement('div');
    stickerLink.className = 'join-stickers__sticker-link';

    var stickerImg = document.createElement('img');
    stickerImg.className = 'join-stickers__sticker-img';
    var src = sticker.querySelector('.stickers__sticker-img').src;
    stickerImg.src = src;
    stickerImg.alt = 'sticker';

    var stickerTitle = document.createElement('h2');
    stickerTitle.className = 'join-stickers__sticker-title';
    var text = sticker.querySelector('.stickers__sticker-title').innerText;
    stickerTitle.innerText = text;

    var stickerStar = document.createElement('div');
    stickerStar.className = 'join-stickers__sticker-star';

    var numStars = sticker.querySelectorAll('.stickers__sticker-star img');
    var starSrc = numStars[0].src;
    var star = document.createElement('img');
    star.alt = 'star';
    star.src = starSrc;

    var numBlock = document.createElement('div');
    numBlock.className = 'join-stickers__num-block';

    var num = document.createElement('div');
    num.className = 'join-stickers__num join-stickers__num_helper';
    num.setAttribute('data-title', 'Количество добавленных стикеров для объединения');

    var numSpan = document.createElement('span');
    var totalNum = sticker.querySelector('.stickers__num').innerText;
    numSpan.className = 'join-stickers__change-num';
    numSpan.innerText = '1';

    var buttons = document.createElement('div');
    buttons.className = 'join-stickers__buttons';

    var buttonMinus = document.createElement('button');
    buttonMinus.className = 'join-stickers__button join-stickers__button_minus';

    var buttonPlus = document.createElement('button');
    buttonPlus.className = 'join-stickers__button join-stickers__button_plus';

    joinBlock.append(joinStickersContainer);
    joinStickersContainer.append(joinSticker);
    joinSticker.append(stickerLink);
    stickerLink.append(stickerImg);
    stickerLink.append(stickerTitle);
    stickerLink.append(stickerStar);

    numStars.forEach(star => {
        stickerStar.append(star.cloneNode(true));
    });

    joinSticker.append(numBlock);
    numBlock.append(num);
    num.append(numSpan);
    numSpan.after('/' + totalNum);
    joinStickersContainer.append(buttons);
    buttons.append(buttonMinus);
    buttons.append(buttonPlus);
}

//Проигрывание анимации при нажатии на кпопку, когда выбрано 5 стикеров
joinNum.addEventListener('click', function () {
    if (this.classList.contains('join-stickers__agree-button_full')) {
        Array.from(joinBlock.children).forEach(childElement => {
            childElement.remove();
        });

        $('.get-sticker-window').css('display', 'block');
        $('.get-sticker-window__sticker').fadeIn(400).css('display', 'flex');

        var imgStars = document.querySelectorAll('.get-sticker-window__sticker-star img');

        if (imgStars.length == 1) imgStars[0].classList.add('animation');
        else if (imgStars.length == 2) {
            imgStars[0].classList.add('animation');
            imgStars[1].classList.add('animation-01');
        } else if (imgStars.length == 3) {
            imgStars[0].classList.add('animation');
            imgStars[1].classList.add('animation-01');
            imgStars[2].classList.add('animation-02');
        } else if (imgStars.length == 4) {
            imgStars[0].classList.add('animation');
            imgStars[1].classList.add('animation-01');
            imgStars[2].classList.add('animation-02');
            imgStars[3].classList.add('animation-03');
        }

        $('.wrapper').addClass('not-scroll');

        checkSumStar = 0;
        this.classList.remove('join-stickers__agree-button_full');
        this.innerText = '0/5';
    }
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