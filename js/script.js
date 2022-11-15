// セクション見出し用アニメ
function BgFadeAnime() {
    // 下から上
    $('.bgDUextendTrigger').each(function () {
        var elemPos = $(this).offset().top - 50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('bgDUextend');
        } else {
            $(this).removeClass('bgDUextend');
        }
    });
    // 左から右
    $('.bgLRextendTrigger').each(function () {
        var elemPos = $(this).offset().top - 50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('bgLRextend');
        } else {
            $(this).removeClass('bgLRextend');
        }
    });
    // ラップ
    $('.bgappearTrigger').each(function () {
        var elemPos = $(this).offset().top - 50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('bgappear');
        } else {
            $(this).removeClass('bgappear');
        }
    });
}
// スクロールインで動かす
$(window).scroll(function () {
    BgFadeAnime();
});


// フレックスボックス：カードデータ
let names = [
    { image: 'images/23073305.png', namae: 'Yamaha', age: 38, likes: 2, desc: 'はじめまして！数あるプロフの中から見ていただきありがとうございます！はじめまして！数あるプロフの中から見ていただきありがとうございます！' },
    { image: 'images/rekishicard.png', namae: 'Honda', age: 48, likes: 3, desc: 'このまま年賀全部キミに届けて全部年賀for you納めたlove you love youキミに届けこのまま年賀全部キミに届けて全部年賀for you納めたlove you love youキミに届け' },
    { image: 'images/cropYOSX9760.jpg', namae: 'Kawasaki', age: 32, likes: 1, desc: '吾輩は猫である名前はまだないどこで生まれたかトンと見当がつかぬなんでも薄暗いじめじめしたところでニャーニャー泣いていたことだけは覚えて記憶している吾輩はここで初めて人間というものを見た' },
    { image: 'images/cropIMGL5336.jpg', namae: 'Suzuki', age: 28, likes: 15, desc: 'はじめましてこんにちはご訪問ありがとうございます男の娘ですけどよろしくお願いします！はじめましてこんにちはご訪問ありがとうございます男の娘ですけどよろしくお願いします！' },
    { image: 'images/G-otacard.png', namae: 'Meguro', age: 67, likes: 18, desc: '燃え上れ萌え上がれ燃えあがれガンガル君よ走れ正義の怒りをぶつけろガンガル燃え上れ萌え上がれ燃えあがれガンガル君よ走れ正義の怒りをぶつけろガンガル' },
    { image: 'images/ojisan06.png', namae: 'Motoguchi', age: 48, likes: 1, desc: 'はじめまして！(((o(*ﾟ▽ﾟ*)o)))訪問ありがとう(≧▽≦)僕と君の出会いに乾杯🍻なんちゃって(n*´ω`*n)はじめまして！(((o(*ﾟ▽ﾟ*)o)))訪問ありがとう(≧▽≦)僕と君の出会いに乾杯🍻なんちゃって(n*´ω`*n)' }
];

// フレックスボックス：カードテンプレート
let cardTemplate = $('.cardTemplate').html();
let namesLength = names.length;


// フレックスボックス：カード生成関数
function makeCards() {
    $('.match').each(function (index) {
        $(this).find('img').prop('src', names[index].image);
        $(this).find('h4').text(names[index].namae);
        $(this).find('.age').text('(' + names[index].age + ')');
        $(this).find('.likes').text(names[index].likes);
        $(this).find('.desc40').text(names[index].desc);
        console.log($(this).html());
    });
};

// フレックスボックス：カード作成実行
$(function () {
    for (let i = 0; i < namesLength; i++) {
        console.log(i);
        $('.matchWrap').append(cardTemplate);
    }
    $('.cardTemplate').html('');
    makeCards();
});

// いいねボタン0
$(document).on('click', '.likeBtn', function () {
    let heart = $(this).children('i');
    let like = $(this).next('p');
    let cardName = $(this).parents('.prof').find('h4').text();
    let result = names.find((v) => v.namae === cardName);
    console.log(result);
    result.likes += 1;
    console.log(result);
    $(like).text(result.likes);
    $(like).css({ 'color': 'red', 'transform': 'scale(1.6)' });
    $(heart).css('transform', 'scale(1.4)');
    setTimeout(function () {
        $(like).css({ 'color': 'black', 'transform': 'scale(1.0)' });
        $(heart).css('transform', 'scale(1.0)');
    }, 150);
    // return false;
});


// ダークモードボタン
$(".btn1").click(function () {
    if ($('#grid').hasClass('dark')) {
        $('#grid').removeAttr('theme').removeClass('dark').addClass('light');
        $(this).children('div').text('Dark-Mode');
    } else {
        $('#grid').attr('theme', 'dark').addClass('dark').removeClass('light');
        $(this).children('div').text('Light-Mode');
    };
});


// 無理やり並べ替え
$(".btn2").click(function () {

    if ($(this).hasClass('likeOrder')) {
        orderClass = ('.likes');
    } else {
        orderClass = ('.age');
    }
    console.log($(orderClass).text());

    if ($(this).hasClass('upto')) {
        let $upup = $('.match').each(function () {
            let orderNumber = $(this).find(orderClass).text().replace(/\(/g, '').replace(/\)/g, '');
            $(this).css('order', orderNumber);
        });
        $('.matchWrap').html($upup);
    } else {
        let $down = $('.match').each(function () {
            let orderNumber = $(this).find(orderClass).text().replace(/\(/g, '').replace(/\)/g, '');
            $(this).css('order', '-' + orderNumber);
        });
        $('.matchWrap').html($down);
    };
    $(this).toggleClass('upto');
});

// モーダル
$(document).on('click', '.thumb', function () {

    if ($('.modalCard').hasClass('active')) {
        $('body').css('overflow', 'auto');
        $('.flexBox').css('pointer-events', 'auto');
        $('.modalCard').removeClass('active').empty();
        $('.modalWrap').removeClass('active');
        makeCards();

    } else {
        $('body').css('overflow', 'hidden');
        $('.flexBox').css('pointer-events', 'none');
        $('.modalCard').append($(this).parent().html()).addClass('active');
        $('.modalWrap').addClass('active');
        console.log($('.modalCard').html());
    }
});

// おじさんジェネレータ
$('.slider02').slick({
    autoplay: false,
    speed: 300,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev02"></div>',
    nextArrow: '<div class="slick-next02"></div>',
    variableWidth: true,
    pauseOnFocus: false,
    pauseOnHover: false,
});

	
$(document).on('click', '.btnDU', function(){
// $('.btnDU').on('click', function () {
    console.log($(this));
    let parts = $(this).data('parts');
    let ininin = $(this).data('ininin');
    let outout = $(this).data('outout');
    let sites = $(this).data('sites');
    console.log(parts,sites);

    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(parts).removeClass('activeParts');
    } else {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $(parts).addClass('activeParts');
        $(parts).siblings().removeClass('activeParts');
    };

    $(sites).children().each(function () {
        if ($(this).hasClass('activeParts')) {
            $(this).siblings().addClass(outout);
            $(this).removeClass(outout).addClass(ininin);
            console.log($(this));
        } else {
            $(this).addClass(outout);
            console.log($(this));
        };
    });

    $(sites).each(function () {
        if ($(this).hasClass('activeParts')) {
            $(this).removeClass(outout).addClass(ininin);
        };
    });
});


$(function () {
    setTimeout(() => {
        $('.slider01,.parts').css('visibility', 'visible');
    }, 800);
});


// Chart.js
Chart.plugins.register({
    afterDatasetsDraw: function (chart, easing) {
        var ctx = chart.ctx;
        chart.data.datasets.forEach(function (dataset, i) {
            var meta = chart.getDatasetMeta(i);
            if (!meta.hidden) {
                meta.data.forEach(function (element, index) {
                    ctx.fillStyle = 'rgb(0, 0, 0,0.8)';
                    var fontSize = 16;
                    var fontStyle = 'normal';
                    var fontFamily = 'Ranchers';
                    ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
                    var dataString = dataset.data[index].toString();
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    var padding = 2;
                    var position = element.tooltipPosition();
                    ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
                });
            }
        });
    }
});

//グラフ
$('#chart01').on('inview', function (event, isInView) {
    if (isInView) {
        var ctx = document.getElementById("chart01");
        var chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["06/15", "07/01", "07/15", "08/01", "08/15", "09/01", "09/15", "10/01", "10/15", "11/01"],
                datasets: [{
                    label: "Road to e-typing 300pts",
                    borderColor: "rgba(255,0,0,1)",
                    backgroundColor: "rgba(255,0,0,0.1)",
                    data: ["50", "160", "200", "220", "235", "245", "250", "286", "230", "220"]
                }]
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                                suggestedMax: 300,
                                suggestedMin: 0,
                                stepSize: 50,
                                callback: function (value) {
                                    return value + 'pts'
                                }
                            }
                        }
                    ],
                }
            }
        });
    }
});



// スライダー設定
$(function () {
    // setTimeout(() => {
        $('.slider').css('visibility', 'visible');
    // }, 1);
});

$('.slider01').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    centerMode: true,
    variableWidth: true,
    pauseOnFocus: false,
    pauseOnHover: false,

});



