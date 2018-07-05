$(document).ready(function() {

    // QR-bar show
    $('.project-team > button').click(function() {
        $('.project-apply').show();
    });

    // QR-bar hide
    $('.project-apply > span').click(function() {
        $('.project-apply').hide();
    })
});