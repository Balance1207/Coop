$(document).ready(function() {

    // project list hover
    $('.project > a').hover(
        function() {
            $(this)
                .css({'color': '#fff', 'background-color': '#000'})
                .text('View');
        },
        function() {
            var color = $(this).parent().css('background-color');
            $(this)
                .css({'color': '#000', 'background-color': color})
                .text('了解详情');
        }
    );

    // project status
    $('.main').on('click', '.text-center > ul > li', function() {
        $(this)
            .addClass('project-status-active')
            .siblings().removeClass('project-status-active');
    });

    // project turn the page
    $('.turnPage').on('click', 'li', function() {
        $(this)
            .addClass('page-active')
            .siblings().removeClass('page-active');
    });

});