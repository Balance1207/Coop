$(document).ready(function () {

    // 滚动固定
    // var x = $('.crowdFunding-about').offset().top;
    // $(window).scroll(function () {
    //     var x = $('.crowdFunding-about').offset().top;
    //     console.log(x, '111')
    // });

    // 联系项目方
    $('.projectManager button').click(function () {
        $(this).next().toggle();
    });

    // 立即支持show
    $('.crowdFunding-project button').click(function () {
        $('.support-crowdFunding').show();
    });

    // 立即支持hide
    $('.support-crowdFunding img').click(function () {
       $(this).parent().parent().hide();
    });

    // 关于众筹
    $('.crowdFunding-about').on('click', 'li', function () {
        $(this)
            .addClass('crowdFunding-border')
            .siblings().removeClass('crowdFunding-border');
    });

    // 团队成员轮播
    // $('next').on('click', '.team-member > img', function () {
    //    $(this)
    //        .addClass('img-border')
    //        .siblings().removeClass('img-border');
    // });
});