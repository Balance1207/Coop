$(document).ready(function () {

    // 导航列表固定
    var navH = $('.crowdFunding-about').offset().top;
    $(window).scroll(function () {
       var scrollHeight =  $(this).scrollTop();
       if (scrollHeight > navH) {
           $('.crowdFunding-about').css({'position': 'fixed', 'top': 0, 'background-color': '#fff'})
       } else if (scrollHeight < navH) {
           $('.crowdFunding-about').css('position', 'static');
       }
    });
});

// 联系项目方
function contact_projectManager() {
    $('.projectManager > span:last-child').toggle();
}

// 立即支持box show
function supportCrowdFunding_show() {
    $('.support-crowdFunding').show();
}

// 立即支持box hide
function supportCrowdFunding_hide() {
    $('.support-crowdFunding').hide();
}

// 确认支持box show
function applySuccess_show() {
    $('.support-crowdFunding').hide();
    $('.apply-success').show();
}

// 确认支持box hide
function applySuccess_hide() {
    $('.apply-success').hide();
}

// 关于众筹
function about_crowdFunding(obj) {
    $(obj)
        .addClass('crowdFunding-border')
        .siblings().removeClass('crowdFunding-border');
}

// 滚动至项目方案
function scroll_to_plan(obj) {
    about_crowdFunding(obj);
    var planH = $('.project-plan').offset().top;
    if (planH == 784 || 714) {
        $('html').animate({scrollTop: 644}, 500);
    }
}

// 滚动至资金使用
function scroll_to_funds(obj) {
    about_crowdFunding(obj);
    var fundsH = $('.funds-using').offset().top;
    if (fundsH == 1102 || 1032) {
        $('html').animate({scrollTop: 962}, 500);
    }
}

// 滚动至支持记录
function scroll_to_support(obj) {
    about_crowdFunding(obj);
    var supportH = $('.support-record').offset().top;
    if (supportH == 1400 || 1330) {
        $('html').animate({scrollTop: 1260}, 500);
    }
}

// 滚动至项目团队
function scroll_to_team(obj) {
    about_crowdFunding(obj);
    var teamH = $('.project-team').offset().top;
    if (teamH == 1766 || 1696) {
        $('html').animate({scrollTop: 1620}, 500);
    }
}

// 滚动至风险说明
function scroll_to_risk(obj) {
    about_crowdFunding(obj);
    var riskH = $('.potential-risks').offset().top;
    console.log(riskH);
    if (riskH == 2341 || 2271) {
        $('html').animate({scrollTop: 2201}, 500);
    }
}