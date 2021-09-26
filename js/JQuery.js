$(function(){

    //ここでナビの自動スクロールを再現
    $('a').click(function(){
        var id = $(this).attr('href');
        var position = $(id).offset().top;
        $('html, body').animate({
        'scrollTop': position
        },500);
    })

    //指定した画像が画面内に表示されたらアニメーションを実(表示された事が認識する設定)
    //(実際のアニメーションについてはcssにて指定。)
    $(window).on('scroll', function (){

        var elem = $('.elem');
        var isAnimate = 'isAnimate';
        
        elem.each(function () {
        
            var elemOffset = $(this).offset().top;
            var scrollPos = $(window).scrollTop();
            var wh = $(window).height();

            if(scrollPos > elemOffset - wh){
            $(this).addClass(isAnimate);
            }
            });
        });

        //スライドショー(works)
        $('.works-box').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,         //自動再生
            autoplaySpeed: 0,　  //自動再生のスピード
            cssEase: 'linear',
            speed: 8000,     　 //スライドするスピード
            infinite: true　　　　//スライドのループ
        });

});

