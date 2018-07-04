$(document).ready(function () {

    // team details hover
    $('.view').hover(
        function() {
            $(this)
                .css({'color': '#fff', 'background-color': '#000'})
                .text('View');
        },
        function() {
            $(this)
                .css({'color': '#000', 'background-color': '#fff'})
                .text('了解详情');
        }
    );
});