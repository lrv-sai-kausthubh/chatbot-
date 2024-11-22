$(document).ready(function() {
    // jQuery for toggle sub menus
    $('.sub-btn').click(function(e) {
        e.preventDefault();

        // Close all other submenus
        $('.sub-menu').not($(this).next('.sub-menu')).slideUp();
        $('.dropdown').not($(this).find('.dropdown')).removeClass('rotate');

        // Toggle the clicked submenu
        $(this).next('.sub-menu').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
    });

    // Close all submenus when clicking on an item
    $('.sub-menu .sub-item').click(function() {
        $('.sub-menu').slideUp();
        $('.dropdown').removeClass('rotate');
    });
});
