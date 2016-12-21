$(function () {

  //  pagge -가로영역으로 지정
  var fullBox = $('.full_box');
  var fullBoxSize = fullBox.size()
  var winWidth = $(window).width();
  $('body').css({overflowX:'hidden'});
  $('.container').css({width:winWidth * fullBoxSize});
  fullBox.css({width:winWidth, float:'left'})

  // menu_click
  $('.link_menu').on('click',function(event) {
    event.preventDefault();
    var menuList = parseInt($(this).find('a').attr('href').slice(7));
    fullBox.find('.before_move').removeClass('after_move');
    // $(this).eq(menuList).addClass('after_move');
    fullBox.eq(menuList).find('.before_move').addClass('after_move');
     // $('.container').css({marginLeft:0};
   $('.container').stop().animate({marginLeft:-winWidth*menuList});
    
    
  });


 $("#menubox").tabs();
 $("#tabs").tabs();
 
 $("#event_all").tabs();
 
});


$(function () {
 var modal_1 = $('.popup_power');
 var modal_list_1 = $('.power').find('a');

 var modal_2 = $('.popup_step');
 var modal_list_2 = $('.step').find('a');

 var modal_3 = $('.popup_qna');
 var modal_list_3 = $('.qna').find('a');

 var modal_4 = $('.popup_rule');
 var modal_list_4 = $('.rule').find('a');

 var modal_5 = $('.popup_ex');
 var modal_list_5 = $('.ex').find('a');
// 매장찾기
 
 var modal_6 = $('.popup_nonhyun');
 var modal_list_6 = $('#gangnam_01').find('a');
 
 var modal_7 = $('.popup_gangnam');
 var modal_list_7 = $('#gangnam_02').find('a');

 var modal_8 = $('.popup_deachi');
 var modal_list_8 = $('#gangnam_03').find('a');
 
 var modal_9 = $('.popup_dosan');
 var modal_list_9 = $('#gangnam_04').find('a');
 
 var modal_10 = $('.popup_samsung');
 var modal_list_10 = $('#gangnam_05').find('a');
 
 var modal_11 = $('.popup_sinsa');
 var modal_list_11 = $('#gangnam_06').find('a');
 
 var modal_12 = $('.popup_yangjea');
 var modal_list_12 = $('#gangnam_07').find('a');
 
 var modal_13 = $('.popup_sonrung');
 var modal_list_13 = $('#gangnam_08').find('a');
 
 var modal_14 = $('.popup_gs');
 var modal_list_14 = $('#gangnam_09').find('a');
 
 var modal_15 = $('.popup_abgujeng');
 var modal_list_15 = $('#gangnam_10').find('a');
 
 var modal_16 = $('.popup_star');
 var modal_list_16 = $('#gangnam_11').find('a');
 
 var timed = 500;


 modal_list_1.on('click', function (event) {
  event.preventDefault();
  modal_1.fadeIn(timed);
 });

 modal_1.on('click', function (event) {
  event.preventDefault();
  modal_1.fadeOut(timed);
 });

 modal_list_2.on('click', function (event) {
  event.preventDefault();
  modal_2.fadeIn(timed);
 });

 modal_2.on('click', function (event) {
  event.preventDefault();
  modal_2.fadeOut(timed);
 });
 modal_list_3.on('click', function (event) {
  event.preventDefault();
  modal_3.fadeIn(timed);
 });

 modal_3.on('click', function (event) {
  event.preventDefault();
  modal_3.fadeOut(timed);
 });
 modal_list_4.on('click', function (event) {
  event.preventDefault();
  modal_4.fadeIn(timed);
 });

 modal_4.on('click', function (event) {
  event.preventDefault();
  modal_4.fadeOut(timed);
 });
 modal_list_5.on('click', function (event) {
  event.preventDefault();
  modal_5.fadeIn(timed);
 });

 modal_5.on('click', function (event) {
  event.preventDefault();
  modal_5.fadeOut(timed);
 });


modal_list_6.on('click', function (event) {
 event.preventDefault();
 modal_6.fadeIn(timed);
});

modal_6.on('click', function (event) {
 event.preventDefault();
 modal_6.fadeOut(timed);
 
});
 
 modal_list_7.on('click', function (event) {
  event.preventDefault();
  modal_7.fadeIn(timed);
 });

 modal_7.on('click', function (event) {
  event.preventDefault();
  modal_7.fadeOut(timed);

 });
 
 modal_list_8.on('click', function (event) {
  event.preventDefault();
  modal_8.fadeIn(timed);
 });

 modal_8.on('click', function (event) {
  event.preventDefault();
  modal_8.fadeOut(timed);

 });

 
 modal_list_9.on('click', function (event) {
  event.preventDefault();
  modal_9.fadeIn(timed);
 });

 modal_9.on('click', function (event) {
  event.preventDefault();
  modal_9.fadeOut(timed);

 });

 
 modal_list_10.on('click', function (event) {
  event.preventDefault();
  modal_10.fadeIn(timed);
 });

 modal_10.on('click', function (event) {
  event.preventDefault();
  modal_10.fadeOut(timed);

 });
 modal_list_11.on('click', function (event) {
  event.preventDefault();
  modal_11.fadeIn(timed);
 });

 modal_11.on('click', function (event) {
  event.preventDefault();
  modal_11.fadeOut(timed);

 });
 modal_list_12.on('click', function (event) {
  event.preventDefault();
  modal_12.fadeIn(timed);
 });

 modal_12.on('click', function (event) {
  event.preventDefault();
  modal_12.fadeOut(timed);

 });
 modal_list_13.on('click', function (event) {
  event.preventDefault();
  modal_13.fadeIn(timed);
 });

 modal_13.on('click', function (event) {
  event.preventDefault();
  modal_13.fadeOut(timed);

 });
 modal_list_14.on('click', function (event) {
  event.preventDefault();
  modal_14.fadeIn(timed);
 });

 modal_14.on('click', function (event) {
  event.preventDefault();
  modal_14.fadeOut(timed);

 });
 modal_list_15.on('click', function (event) {
  event.preventDefault();
  modal_15.fadeIn(timed);
 });

 modal_15.on('click', function (event) {
  event.preventDefault();
  modal_15.fadeOut(timed);

 });
 
 modal_list_16.on('click', function (event) {
  event.preventDefault();
  modal_16.fadeIn(timed);
 });

 modal_16.on('click', function (event) {
  event.preventDefault();
  modal_16.fadeOut(timed);

 });

 
});