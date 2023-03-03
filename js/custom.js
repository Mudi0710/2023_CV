$(document).ready(function () {

  // header color change
  $(window).on('scroll', function () {
    // .scrollTop() 方法可以找到滾動條的「垂直/Y軸」偏移位置
    var scorllDistance = $(window).scrollTop();
    // 選取了 .js-header 來存在 $header 變數中
    var $header = $('.js-header');

    if (scorllDistance > 80) {
      $header.addClass('header--colored');
    } else {
      $header.removeClass('header--colored')
    }
  })

  // WOW plugin initalize
  new WOW().init();

  // // Fancybox plugin options
  // $('[data-fancybox]').fancybox({
  //   // loop: true
  //   infinite: true,
  // })
})