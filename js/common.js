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