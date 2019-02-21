$(function() {
  var sldr = $('.sldr'),
    arrData = ['HTML,JS,CSS,MongoDB', 'HTML,JS,CSS', 'HTML,JS,CSS', 'HTML,JS,CSS,REACT'];
  (sldrContent = sldr.html()),
    (slideWidth = $('.sl_ctr').outerWidth()),
    (slideCount = $('.sldr div').length),
    (prv_b = $('.prv_b')),
    (nxt_b = $('.nxt_b')),
    (sldrInterval = 3300),
    (animateTime = 1000),
    (course = 1),
    (margin = -slideWidth);
  if ($('.sldr').css('margin') == '0px') {
    $('.description').text(arrData[0]);
  }
  $('.sldr div:last')
    .clone()
    .prependTo('.sldr');
  $('.sldr div')
    .eq(1)
    .clone()
    .appendTo('.sldr');
  $('.sldr').css('margin-left', -slideWidth);
  function nxt_bSlide() {
    interval = window.setInterval(animate, sldrInterval);
  }
  function animate() {
    if (margin == -slideCount * slideWidth - slideWidth) {
      sldr.css({ marginLeft: -slideWidth });
      margin = -slideWidth * 2;
    } else if (margin == 0 && course == -1) {
      sldr.css({ marginLeft: -slideWidth * slideCount });
      margin = -slideWidth * slideCount + slideWidth;
    } else {
      margin = margin - slideWidth * course;
    }
    sldr.animate({ marginLeft: margin }, animateTime);
    switch (margin) {
      case -450:
        $('.description').text(arrData[0]);
      case -900:
        $('.description').text(arrData[1]);
      case -1350:
        $('.description').text(arrData[2]);
      case -1800:
        $('.description').text(arrData[3]);
      case -2250:
        $('.description').text(arrData[0]);
    }
    // console.log($('.sldr').css('margin-left'));
    console.log(margin);
  }
  function sldrStop() {
    window.clearInterval(interval);
  }
  prv_b.click(function() {
    if (sldr.is(':animated')) {
      return false;
    }
    var course2 = course;
    course = -1;
    animate();
    course = course2;
  });
  nxt_b.click(function() {
    if (sldr.is(':animated')) {
      return false;
    }
    var course2 = course;
    course = 1;
    animate();
    course = course2;
  });
  sldr
    .add(nxt_b)
    .add(prv_b)
    .hover(function() {
      sldrStop();
    }, nxt_bSlide);
  nxt_bSlide();
});
