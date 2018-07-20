// 团队参与的项目show
function teamProject_show() {
    $('.project-dev').show();
}

// 团队参与的项目hide
function teamProject_hide() {
    $('.project-dev').hide();
}

// 浏览更多
function showMore() {
    $('.showMore').hide();
    $('.hideMore').show();
    $('.activities-list:not(:first-child), .activities-list > div > ul:not(:first-child)').slideDown(500);
}

// 收起更多
function hideMore() {
    $('.showMore').show();
    $('.hideMore').hide();
    $('.activities-list:not(:first-child), .activities-list > div > ul:not(:first-child)').slideUp(500);
}