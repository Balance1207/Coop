$(document).ready(function () {

    // 轮播按钮图片变化
    $('.prev').hover(
        function () {
            $(this)
                .css('background-color', '#000')
                .children().attr('src', '../img/slide_white_left.png');
        },
        function () {
            $(this)
                .css('background-color', '#fff')
                .children().attr('src', '../img/slide_black_left.png');

        }
    );
    $('.next').hover(
        function () {
            $(this)
                .css('background-color', '#000')
                .children().attr('src', '../img/slide_white_right.png');
        },
        function () {
            $(this)
                .css('background-color', '#fff')
                .children().attr('src', '../img/slide_black_right.png');

        }
    );
});

// 点击图片添加border
function add_imgBorder(clickObj) {
    $(clickObj)
        .addClass('img-border')
        .siblings().removeClass('img-border');
}

// 团队参与的项目show
function teamProject_show() {
    $('.project-dev').show();
}

// 团队参与的项目hide
function teamProject_hide() {
    $('.project-dev').hide();
}

var index = 1;
var length = $('.team-members').children().length;
var list = $('.team-members');
function animate(offset) {
    var left = parseInt($('.list').css('left')) + offset;
    if (left < 520) {
        
    }
}

// 图片轮播下一张
function img_next() {
    if (index < length) {
        index += 1;
    } else {
        return false;
    }
    animate(-130);
}

// 图片轮播上一张
function img_prev() {
    var list = $('.team-members');
    list.animate({'left': 0}, 300);
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