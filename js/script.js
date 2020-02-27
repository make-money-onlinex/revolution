$(document).ready(function() {
    $('.do-open').on('click', function() {
        $('#modal').css('display', 'block');
    });
    $('.do-close').on('click', function() {
        $('#modal').css('display', 'none');
    });
});