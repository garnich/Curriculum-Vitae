$(function() {
  var sldr = $('.sldr'),
    arrData = [["./img/icons/CSS.png","./img/icons/HTML.png","./img/icons/JS.png","./img/icons/Mongo.png","./img/icons/Heroku.png"], ["./img/icons/CSS.png","./img/icons/HTML.png"], ["./img/icons/CSS.png","./img/icons/HTML.png"],["./img/icons/CSS.png","./img/icons/HTML.png","./img/icons/JS.png"],["./img/icons/CSS.png","./img/icons/HTML.png","./img/icons/REACT.png"]];
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
      $.each(arrData[0],function(index,value){$('.description').append($('<img>').attr('src', value).attr('width','50px'))});
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
    if (margin == -450) {
      $('.description').empty();
      $.each(arrData[0],function(index,value){$('.description').append($('<img>').attr('src', value).attr('width','50px'))});
    }
    if (margin ==  -900){
      $('.description').empty();
      $.each(arrData[1],function(index,value){$('.description').append($('<img>').attr('src', value).attr('width','50px'))});
    }
    if (margin ==  -1350){
      $('.description').empty();
      $.each(arrData[2],function(index,value){$('.description').append($('<img>').attr('src', value).attr('width','50px'))});
    }
    if (margin ==  -1800){
      $('.description').empty();
      $.each(arrData[3],function(index,value){$('.description').append($('<img>').attr('src', value).attr('width','50px'))});
    }
    if (margin ==  -2250 || margin == 0){
      $('.description').empty();
      $.each(arrData[4],function(index,value){$('.description').append($('<img>').attr('src', value).attr('width','50px'))});
    }
    if (margin ==  -2700){
      $('.description').empty();
      $.each(arrData[0],function(index,value){$('.description').append($('<img>').attr('src', value).attr('width','50px'))});
    }
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
