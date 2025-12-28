$(document).ready(function () {

  /* ==============================
     SLICK SLIDER – PROJECTS
  ============================== */
  $('.slider-pro').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  /* ==============================
     SLICK SLIDER – BLOG
  ============================== */
  $('.blog-slider-pro').slick({
    dots: true,
    infinite: false,
    arrows: false,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  /* ==============================
     MOBILE MENU TOGGLE
  ============================== */
  $(".menu-icon").on("click", function () {
    $(".menu-list").slideToggle("fast", function () {
      if ($(this).is(":visible")) {
        $(".banner").css(
          "margin-top",
          $(".menu-list").outerHeight() - 80 + "px"
        );
      } else {
        $(".banner").css("margin-top", "0");
      }
    });
  });

  /* ==============================
     CLOSE MENU ON LINK CLICK (MOBILE ONLY)
  ============================== */
  $(".menu-list a").on("click", function () {
    if ($(window).width() <= 768) {
      $(".menu-list").slideUp("fast");
      $(".banner").css("margin-top", "0");
    }
  });

  /* ==============================
     RESET MENU ON RESIZE (OPTIONAL)
  ============================== */
  $(window).on("resize", function () {
    if ($(window).width() > 768) {
      $(".menu-list").show();
      $(".banner").css("margin-top", "0");
    }
  });

});
