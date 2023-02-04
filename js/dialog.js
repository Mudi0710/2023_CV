$('#link-bar__burger').click(function () {
  if ($("#link-bar__burger").hasClass("link-bar__burger")) {
    $('#header').addClass('dialog--header');
    $('#link-bar__menu').children().addClass('dialog--link-bar__item');
    $('.link-bar__burger span').eq(0).addClass('dialog--link-bar__burger--line1');
    $('.link-bar__burger span').eq(1).addClass('dialog--link-bar__burger--line2');
    $('.link-bar__burger span').eq(2).addClass('dialog--link-bar__burger--line3');
    $('.link-bar__burger').addClass('dialog--close order-first offset-10').removeClass('link-bar__burger');
  } else {
    $('#header').removeClass('dialog--header');
    $('#link-bar__menu').children().removeClass('dialog--link-bar__item');
    $('.dialog--close span').eq(0).removeClass('dialog--link-bar__burger--line1');
    $('.dialog--close span').eq(1).removeClass('dialog--link-bar__burger--line2');
    $('.dialog--close span').eq(2).removeClass('dialog--link-bar__burger--line3');
    $('.dialog--close').addClass('link-bar__burger').removeClass('dialog--close order-first offset-10');
  }
})

$('#home-link').click(function () {
  $('#header').removeClass('dialog--header');
  $('#link-bar__menu').children().removeClass('dialog--link-bar__item');
  $('.dialog--close span').eq(0).removeClass('dialog--link-bar__burger--line1');
  $('.dialog--close span').eq(1).removeClass('dialog--link-bar__burger--line2');
  $('.dialog--close span').eq(2).removeClass('dialog--link-bar__burger--line3');
  $('.dialog--close').addClass('link-bar__burger').removeClass('dialog--close order-first offset-10');
})

$('#about-link').click(function () {
  $('#header').removeClass('dialog--header');
  $('#link-bar__menu').children().removeClass('dialog--link-bar__item');
  $('.dialog--close span').eq(0).removeClass('dialog--link-bar__burger--line1');
  $('.dialog--close span').eq(1).removeClass('dialog--link-bar__burger--line2');
  $('.dialog--close span').eq(2).removeClass('dialog--link-bar__burger--line3');
  $('.dialog--close').addClass('link-bar__burger').removeClass('dialog--close order-first offset-10');
})

$('#skill-link').click(function () {
  $('#header').removeClass('dialog--header');
  $('#link-bar__menu').children().removeClass('dialog--link-bar__item');
  $('.dialog--close span').eq(0).removeClass('dialog--link-bar__burger--line1');
  $('.dialog--close span').eq(1).removeClass('dialog--link-bar__burger--line2');
  $('.dialog--close span').eq(2).removeClass('dialog--link-bar__burger--line3');
  $('.dialog--close').addClass('link-bar__burger').removeClass('dialog--close order-first offset-10');
})

$('#experience-link').click(function () {
  $('#header').removeClass('dialog--header');
  $('#link-bar__menu').children().removeClass('dialog--link-bar__item');
  $('.dialog--close span').eq(0).removeClass('dialog--link-bar__burger--line1');
  $('.dialog--close span').eq(1).removeClass('dialog--link-bar__burger--line2');
  $('.dialog--close span').eq(2).removeClass('dialog--link-bar__burger--line3');
  $('.dialog--close').addClass('link-bar__burger').removeClass('dialog--close order-first offset-10');
})

$('#portfolio-link').click(function () {
  $('#header').removeClass('dialog--header');
  $('#link-bar__menu').children().removeClass('dialog--link-bar__item');
  $('.dialog--close span').eq(0).removeClass('dialog--link-bar__burger--line1');
  $('.dialog--close span').eq(1).removeClass('dialog--link-bar__burger--line2');
  $('.dialog--close span').eq(2).removeClass('dialog--link-bar__burger--line3');
  $('.dialog--close').addClass('link-bar__burger').removeClass('dialog--close order-first offset-10');
})

$('#contact-link').click(function () {
  $('#header').removeClass('dialog--header');
  $('#link-bar__menu').children().removeClass('dialog--link-bar__item');
  $('.dialog--close span').eq(0).removeClass('dialog--link-bar__burger--line1');
  $('.dialog--close span').eq(1).removeClass('dialog--link-bar__burger--line2');
  $('.dialog--close span').eq(2).removeClass('dialog--link-bar__burger--line3');
  $('.dialog--close').addClass('link-bar__burger').removeClass('dialog--close order-first offset-10');
})