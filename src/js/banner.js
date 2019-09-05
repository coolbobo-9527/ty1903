$(function(){
    var _index = 0,
    window_width = 1263,
    timer = null,
    iamges_count = 3;
    function nextPlay(){
    if(_index > iamges_count - 1){
    _index = 0;
    $('.lbt ul').stop().animate({left: - window_width * _index},500);
    }else{
    $('.lbt ul').stop().animate({left: - window_width * _index},500);
    }
    if(_index > iamges_count - 1){
    $('ol #yuan').eq(0).addClass('act').siblings().removeClass('act');
    }else{
    $('ol #yuan').eq(_index).addClass('act').siblings().removeClass('act');
    }
    _index ++;
    }
    var bindEvent = function(){
    $('ol #yuan').click(function(){
    _index = $(this).index();
    $('.lbt ul').stop().animate({left: - window_width * _index},500);
    $('ol #yuan').eq(_index).addClass('act').siblings().removeClass('act');
    })
    }
    bindEvent();
    timer = setInterval(nextPlay, 3000);
    });