$(document).ready(function () {
    //Фильтры
    $('.filters__accordion-title').click(function (event) {
        $(this).toggleClass('active-filter');
        $(this).next().slideToggle(300);
        $(this).next().css('display', 'block');    
        $(this).children().toggleClass('filters__accordion-button_clicked'); 
    });
});
