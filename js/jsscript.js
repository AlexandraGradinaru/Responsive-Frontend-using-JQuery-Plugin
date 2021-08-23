$(document).ready(function () {
  //owl-carousel plugin
  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    margin: 30,
    smartSpeed: 3000,
    autoplay: false,
    dots: false,
    navText: [
      "<div class='arrow-prev'></div>",
      "<div class='arrow-next'></div>",
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      500: {
        items: 1,
        nav: false,
      },
      1100: {
        items: 1,
        nav: false,
      },
      1300: {
        items: 1,
        nav: true,
      },
    },
  });
  //owl-carousel plugin END

  //responsive navbar
  $(document).on("click", ".navbar__icon", function () {
    $(".navbar__icon").css({
      display: "none",
    });
    $(".header").slideUp(300);
    $(".close-btn").css({
      display: "flex",
    });
    $(".responsive-navbar").slideDown(800);
    $(".body-shadow").fadeIn(500);
    $("body").css({
      "overflow-y": "hidden",
    });
  });
  $(document).on("click", ".close-btn", function () {
    $(".navbar__icon").css({
      display: "flex",
    });
    $(".close-btn").css({
      display: "none",
    });
    $(".header").slideDown(300);
    $(".responsive-navbar").hide();
    $(".body-shadow").fadeOut(200);
    $("body").css({
      "overflow-y": "scroll",
    });
  });
  $(document).on("click", ".resp-navbar__h1", function () {
    $(".navbar__icon").css({
      display: "flex",
    });
    $(".close-btn").css({
      display: "none",
    });
    $(".responsive-navbar").slideUp(800);
    $(".body-shadow").fadeOut(500);
  });
});
