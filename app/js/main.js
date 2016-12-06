// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('video-placeholder', {
          height: '550',
          width: '900',
          videoId: 'nIv2elxcvvQ',
          events: {
            // 'onReady': onPlayerReady
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      
      // function stopVideo() {
      //   player.stopVideo();
      // }
      var wall = window.innerWidth;

      if (window.innerWidth > 1241 & window.innerWidth < 1624 ) {
        console.log(wall);

        function onYouTubeIframeAPIReady() {
          player = new YT.Player('video-placeholder', {
            height: '415',
            width: '680', 
            videoId: 'nIv2elxcvvQ',
            events: {
            // 'onReady': onPlayerReady
          }
        });
        }


      } else if (window.innerWidth <= 1241 & window.innerWidth > 991) {

        function onYouTubeIframeAPIReady() {
          player = new YT.Player('video-placeholder', {
            height: '330',
            width: '540',
            videoId: 'nIv2elxcvvQ',
            events: {
            // 'onReady': onPlayerReady
          }
        });
        }

      } else if (window.innerWidth <= 991) {

        function onYouTubeIframeAPIReady() {
          player = new YT.Player('video-placeholder', {
            height: '245',
            width: '400',
            videoId: 'nIv2elxcvvQ',
            events: {

            }
          });
        }

      }


      $(document).ready(function(){


 //  $('.random-js').on('click', function(e) {
 //   e.preventDefault(); 
 //   var rand = $('.main-info').length-1;
 //   var j = Math.floor(Math.random() * rand) + 0;
 //   $(this).closest('.row').find('.main-photo').removeClass('active').eq(j).addClass('active');
 //   $('.wrapp-ph').append($('.main-photo.active'));
 //   $(this).closest('.dsc-block').find('.main-info').removeClass('active').eq(j).addClass('active'); 
 //   $('.dsc-tab-right').append($('.main-info.active'));
 // });


 $('.random-js').on('click', function(e) {
   e.preventDefault(); 
   var th = $(this).closest('.dsc-block').find('.main-info.active').prev().index();
   console.log(th);
   $(this).closest('.row').find('.main-photo').removeClass('active').eq(th).addClass('active');
   $(this).closest('.dsc-block').find('.main-info').removeClass('active').eq(th).addClass('active'); 
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



// function Border
function get_border($opt, $opt2) {
  var hhh = $($opt).css('height').slice(0,-2) /2;
  $('<style>'+$opt2+':after{border: '+hhh+'px solid transparent;}</style>').appendTo( "head" );
}

get_border('.tabs-caption li', '.tabs-caption li');

$(function() {
  $('.tabs-caption').on('click', 'li:not(.active)', function() {

    get_border($(this), '.tabs-caption li');

    $(this)
    .addClass('active').siblings().removeClass('active')
    .closest('.tabs-last').find('.tabs-content').removeClass('active').css({opacity: '0',display: 'none'}).eq($(this).index()).addClass('active').css('display', 'block').animate({opacity: '1'}, 200);

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

      var flag = true;
      $(window).on('load resize', function() {


       var app = $('header .show');
       if (window.innerWidth < 768) {
        if (flag) {
          flag = false;
          $(".various").fancybox({
  maxHeight : 200
    // width   : '70%',
  });
          $('header .video-play').closest('.col-lg-6').append(app);
        }
        console.log('ll');

      } else if (window.innerWidth >768) {
        flag = true;
       $('header .video-play').append(app);
     }

   }); 



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
