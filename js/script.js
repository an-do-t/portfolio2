$(function () {
    //メニューボタンをクリックしたとき
    $('.burger-btn').click(function () {
        //0.3秒で表示したり非表示にしたりする
        //$(".header-nav").fadeToggle(300);
        //バーガーメニューを交差する
        $(this).toggleClass("cross");
        //スクロールを止める
        $('body').toggleClass('noscroll');
        //クラスを追加して表示する
        //$(".menu-box").toggleClass("in");
        $('.menu-box').fadeToggle(300);
        //クラスを追加して表示する
        //$("#fadeLayer").toggleClass("in");
        $('#fadeLayer').fadeToggle(300);
    });
});


//ハンバーガーの色を変える
jQuery(function () {
    jQuery(window).scroll(function () { // スクロール毎にイベントが発火します。
        var scr_count = jQuery(this).scrollTop();
        //左右の画像と黒色部分との高さ取得
        var black = $('.fv-img-right');
        var img = $('.fv-left-img');
        //ヘッダーの高さ取得
        var header = $('.header-inner');
        if ((black.height() - header.height() / 2) < scr_count){
            $('.bar').addClass('black');
        }else{
            $('.bar').removeClass('black');
        }

        if ((img.height() - header.height() / 2) < scr_count) {
            $('.site-title').addClass('black');
        } else {
            $('.site-title').removeClass('black');
        }
    })
})