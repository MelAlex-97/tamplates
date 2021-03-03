$(window).on("load", function () {
  $(".preloader").addClass("loaded");
});
$(function () {
  $(".clients__slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  });

  $(".menu__btn").on("click", function () {
    $(".menu__list").slideToggle(300);
    $(".menu__btn-item").toggleClass("menu__btn-active");
  });

  $(".menu__list-item").on("click", function () {
    $(".menu__list").slideToggle(300);
    $(".menu__btn-item").toggleClass("menu__btn-active");
  });

  $(".works__menu-item").on("click", function () {
    $(".works__menu-item").each(function () {
      $(this).removeClass("works__menu--active");
    });
    $(this).addClass("works__menu--active");

    let currentValue = $(this).data("btn");
    $(".works__item").each(function () {
      $(this).removeClass("works__item--active");
      if ($(this).data("name") == currentValue) {
        $(this).addClass("works__item--active");
      }
    });
  });

  $(".works__item").on("click", function () {
    $(".works__item").each(function () {
      $(this).removeClass("works__item--active");
    });
    $(this).addClass("works__item--active");

    let curValue = $(this).data("name");
    $(".works__menu-item").each(function () {
      $(this).removeClass("works__menu--active");
      if ($(this).data("btn") == curValue) {
        $(this).addClass("works__menu--active");
      }
    });
  });
});

let state = true,
  time = 5;
$(window).on("scroll", function () {
  $(".progress").each(function () {
    let pos = $(this).offset().top,
      topWindow = $(window).scrollTop();
    if (pos < topWindow + 300 && state) {
      $("span").each(function () {
        let i = 0,
          num = $(this).data("value"),
          step = 1000 * time / num,
          counter = $(this),
          int = setInterval(function () {
            if (i <= num) {
              counter.html(i);
            } else {
              state = false;
              clearInterval(int);
            }
            i++;
          }, step);
      });
    }
  });
});
