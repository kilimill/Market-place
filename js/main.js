$(function() {
  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "13px",
    readOnly: true,
  });
  $('.weekly__slider-inner').slick({
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="weekly-arrow weekly-prev"><img src="images/icons/slider_arrow-left.png" alt="" /></button>',
    nextArrow: '<button type="button" class="weekly-arrow weekly-next"><img src="images/icons/slider_arrow-right.png" alt="" /></button>',
    responsive: [
    {
      breakpoint: 800,
      settings: {
        arrows: false,
      }
    },
  ]
  });


  $('.product__slider-inner').slick({
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/icons/slider_arrow-left.png" alt="" /></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/icons/slider_arrow-right.png" alt="" /></button>',
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          slidesToScroll: 1,
          slidesToShow: 1,
        }
      },
    ]
  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 330,
    from: 30,
    to: 300,
    prefix: "$"
  });

  $('.product__btn-drop').on('click', function(){
    $('.product__btn-list').slideToggle();
  });
  
  $('.filter-list-icon').on('click', function () {
    $('.product__item').addClass('listes');
    $('.filter-list-icon').addClass('active');
    $('.filter-menu').removeClass('active');
  });

  $('.filter-menu').on('click', function () {
    $('.product__item').removeClass('listes');
    $('.filter-menu').addClass('active');
    $('.filter-list-icon').removeClass('active');
  });


  $('.product__one-taps .tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.product__one-taps').find('.tab-item').removeClass('active-tab').hide();
    $('.product__one-taps .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });

  $('input, select').styler();
  
  $('.filter-dots').on('click', function () {
    $('.filter-drop').slideToggle();
  });

  $('.header__menu-btn').on('click', function () {
    $('.header__list').slideToggle();
  });

  $('.header__user-btn').on('click', function () {
    $('.header__content-btn').toggleClass('active');
  });

  $('input, select').styler();

   $('.jq-checkbox.offer-btn.offer-btn-single').on('click', function () {
     $('.jq-checkbox.offer-btn.offer-btn-multi').removeClass('checked');
     $('.jq-checkbox.offer-btn.offer-btn-multi').removeClass('focused');
     $('.jq-checkbox.offer-btn.offer-btn-single').addClass('checked');
   });

   $('.jq-checkbox.offer-btn.offer-btn-multi').on('click', function () {
     $('.jq-checkbox.offer-btn.offer-btn-single').removeClass('checked');
     $('.jq-checkbox.offer-btn.offer-btn-single').removeClass('focused');
     $('.jq-checkbox.offer-btn.offer-btn-multi').addClass('checked');
   });
  
  $('.login-remember-btn').on('click', function() {
    $('.login-remember-btn').toggleClass('active');
  });

  var mixer = mixitup('.product__item-inner');

});
