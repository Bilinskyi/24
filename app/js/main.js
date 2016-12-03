
$(document).ready(function(){

  $('.random-js').on('click', function(e) {
   e.preventDefault(); 
   var rand = $('.main-info').length-1;
   var j = Math.floor(Math.random() * rand) + 0;
   $(this).closest('.row').find('.main-photo').removeClass('active').eq(j).addClass('active');
   $('.wrapp-ph').append($('.main-photo.active'));
   $(this).closest('.dsc-block').find('.main-info').removeClass('active').eq(j).addClass('active'); 
   $('.dsc-tab-right').append($('.main-info.active'));
 });


  $('.js-from').on('click', function(e) {
   e.preventDefault(); 
   var thisVal = $(this).find('span').text();
   $('.js-val').val(thisVal);
   $('#choose').find('.form-head span').text(thisVal);
 });

  $(".modal-form").fancybox({
    'hideOnContentClick': true,
    minWidth : 230,
    padding : 0,
    fitToView:true,
    width : 'auto',
    maxWidth : '100%',
    closeBtn : true

  });


  $(".various").fancybox({
    maxWidth  : '100%',
    minWidth: '70%',
    maxHeight : 600,
    fitToView : false,
    // width   : '70%',
    height    : '80%',
    autoSize  : false,
    closeClick  : false,
    openEffect  : 'none',
    closeEffect : 'none'
  });


  $(function() {
    $('.tabs-caption').on('click', 'li:not(.active)', function() {
      $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('.tabs-last').find('.tabs-content').removeClass('active').css({opacity: '0',display: 'none'}).eq($(this).index()).addClass('active').css('display', 'block').animate({opacity: '1'}, 300);

    })
  });

// $('header a[href^="#"]').on('click', function(event) {

//     var target = $( $(this).attr('href') );

//     if( target.length ) {
//         event.preventDefault();
//         $('html, body').animate({
//             scrollTop: target.offset().top -85
//         }, 600);
//     }

// });

jQuery(function($){ 
 $(".mask").mask("+7(999) 999-9999");
});


$('.thumbnail').on('click', function () {

  var url = $(this).attr('data-video-id');
  var text = $(this).next().text();
  $(this).closest('.video-wrapp').find('#video-placeholder').next().text(text);
  player.cueVideoById(url);
  player.playVideo();

});


var end = new Date('12/11/2016 00:1 AM');

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
  var now = new Date();
  var distance = end - now;
  if (distance < 0) {

    clearInterval(timer);
    $('.countdown') = 'EXPIRED!';

    return;
  }
  var days = Math.floor(distance / _day);
  var hours = Math.floor((distance % _day) / _hour);
  var minutes = Math.floor((distance % _hour) / _minute);
  var seconds = Math.floor((distance % _minute) / _second);

  $('.countdown').html('<span>'+days+'<b>Дней</b></span><span>'+hours+':</span><span>'+minutes+':</span><span>'+seconds+'</span>');
}

timer = setInterval(showRemaining, 1000);


});

$(window).load(function() {

  $('.section-9 > div, .m-h-1, .m-h-2').matchHeight(); 

});


var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('video-placeholder', {
    width: 900,
    height: 550,
    videoId: 'TpN7wHFV9nc',
    playerVars: {
      color: 'white'
    }
  });
}


ymaps.ready(init);
var myMap, 
myPlacemark;
function init(){ 
  myMap = new ymaps.Map ("map-canvas", {
    center: [52.580578, 39.502086],
    zoom: 15    }); 



  var myPlacemark = new ymaps.Placemark([52.580578, 39.502086], {
   hintContent: 'TEXT'
 }, 
 {
  preset: 'twirl#redDotIcon' 
});

  myMap.geoObjects.add(myPlacemark);
}
