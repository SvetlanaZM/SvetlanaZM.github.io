$(document).ready(function () {
    let menuItem = $('.menu_item');
    
    menuItem.on('click', function (event) {
        event.preventDefault();
        let activeContent = $(this).attr('href');
        $('.visible').toggleClass('visible');
        $(activeContent).toggleClass('visible');

        $('.clicked').toggleClass('clicked');
        $(this).toggleClass('clicked');
    });
});