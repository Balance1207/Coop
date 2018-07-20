// 点数说明box show
function pointInstruction_show() {
    $('.point-instruction').show();
}

// 点数说明box hide
function pointInstruction_hide() {
    $('.point-instruction').hide();
}

// 返回顶部
function returnTop() {
    $('html').animate({scrollTop: 0}, 1000);
}

// 点击图片添加border
function add_imgBorder(clickObj) {
    $(clickObj)
        .addClass('img-border')
        .siblings().removeClass('img-border');
}

var index = 4;
var length = $('.team-members').children().length;
var list = $('.team-members');
function animate(offset) {
    var left = parseInt(list.css('left')) + offset;
    if (offset < 0) {
        offset = '-=' + Math.abs(offset);
    } else {
        offset = '+=' + offset;
    }
    if (left >= -390) {
        list.animate({'left': offset}, 300);
    } else if (left <= 0) {
        list.animate({'left': offset}, 300);
    }
}

// 图片轮播下一张
function click_next() {
    if (index < length) {
        index += 1;
    } else {
        return false;
    }
    animate(-130);
}

// 图片轮播上一张
function click_prev() {
    if (index > 4) {
        index -= 1;
    } else {
        return false;
    }
    animate(130);
}

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
