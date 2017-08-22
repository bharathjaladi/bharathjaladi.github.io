$('.panel-clr2').toggleClass('on', true);

$(function () {
    $('.panel-clr').click(function () {
      $('.panel-clr').toggleClass('on');
      $('.panel-clr1').toggleClass('on', false);
      $('.panel-clr2').toggleClass('on', false);
    })
  });

  $(function () {
    $('.panel-clr1').click(function () {
      $('.panel-clr1').toggleClass('on');
      $('.panel-clr').toggleClass('on', false);
      $('.panel-clr2').toggleClass('on', false);
    })
  });

  $(function () {
    $('.panel-clr2').click(function () {
      $('.panel-clr2').toggleClass('on');
      $('.panel-clr').toggleClass('on', false);
      $('.panel-clr1').toggleClass('on', false);
    })
  });

  $(function () {
    $('#headingOne').hover(function () {
      $('#headingOne').css('background-color', '#e7e7e7');
    }, function () {
      // on mouseout, reset the background colour
      $('#headingOne').css('background-color', '');
    });
  });

  $(function () {
    $('#headingTwo').hover(function () {
      $('#headingTwo').css('background-color', '#e7e7e7');
    }, function () {
      // on mouseout, reset the background colour
      $('#headingTwo').css('background-color', '');
    });
  });

  $(function () {
    $('#headingThree').hover(function () {
      $('#headingThree').css('background-color', '#e7e7e7');
    }, function () {
      // on mouseout, reset the background colour
      $('#headingThree').css('background-color', '');
    });
  });