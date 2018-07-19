$(document).ready(function() {

    // project list hover
    $('.crowdFunding-project > a').hover(
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

    // project status
    $('.main').on('click', '.text-center > ul > li', function() {
        $(this)
            .addClass('crowdFunding-status-active')
            .siblings().removeClass('crowdFunding-status-active');
    });

    // project turn the page
    $('.turnPage').on('click', 'li', function() {
        $(this)
            .addClass('page-active')
            .siblings().removeClass('page-active');
    });

});