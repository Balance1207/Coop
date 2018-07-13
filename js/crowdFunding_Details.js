$(document).ready(function () {

    // 导航列表固定
    var navH = $('.crowdFunding-about').offset().top;
    $(window).scroll(function () {
       var scrollHeight =  $(this).scrollTop();
       if (scrollHeight >= navH) {
           $('.crowdFunding-about').css({'position': 'fixed', 'top': 0, 'background-color': '#fff'})
       } else if (scrollHeight < navH) {
           $('.crowdFunding-about').css('position', 'static');
       }
    });

    // 滚动到项目方案
    // $('.crowdFunding-about > li:first-child').click(function () {
    //     var documentHeight = $(document).height();
    //     var projectPlanH = $('.project-plan').offset().top;
    //     console.log(projectPlanH)
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

});