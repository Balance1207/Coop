$(document).ready(function () {

    // 显示参与的项目box
    $('.team-introduction a').click(function () {
        $('.project-dev').show();
    });

    // 隐藏参与的项目box
    $('.project-dev > span').click(function () {
        $(this).parent().hide();
    });

    // 鼠标悬浮参与项目列表
    $('.project-list > li').hover(
        function() {
            $(this).css('background-color', '#f8f8f8');
        },
        function() {
            $(this).css('background-color', '#fff');
        }
    );

    // 浏览更多
    $('.activities-details .showMore').click(function () {
        $('.activities-list:not(:first-child), .activities-list > div > ul:not(:first-child)').slideDown(500);
        $(this)
            .hide()
            .next().show();
    });

    // 收起更多
    $('.activities-details .hideMore').click(function () {
        $('.activities-list:not(:first-child), .activities-list > div > ul:not(:first-child)').slideUp(500);
        $(this)
            .hide()
            .prev().show();
    });
});