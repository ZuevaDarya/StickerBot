
$(document).ready(function () {
    //Склонение
    $('.top__range .top__item').each(function () {
        $sticker_num = $(this).children('.top__item-num').text();
        if (($sticker_num % 10 == 1) && ($sticker_num != 11)) {
            $(this).append('стикер');
        } else if (($sticker_num % 10 == 2 || $sticker_num % 10 == 3 || $sticker_num % 10 == 4) && $sticker_num != 12 && $sticker_num != 13 && $sticker_num != 14) {
            $(this).append('стикера');
        } else if ($sticker_num % 10 >= 5 && $sticker_num % 10 <= 9 || $sticker_num % 10 == 0) {
            $(this).append('стикеров');
        } else {
            $(this).append('стикеров');
        }
    });

});
