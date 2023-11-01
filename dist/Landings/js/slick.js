$(".discover__list").slick({
  prevArrow: $(".discover__item-nav-prev-btn"),
  nextArrow: $(".discover__item-nav-next-btn"),
});

if (document.body.offsetWidth < 821) {
  $(".testimonials__list").slick({
    prevArrow: $(".testimonials__item-nav-prev-btn"),
    nextArrow: $(".testimonials__item-nav-next-btn"),
  });

  $(".discover__list--light").slick({
    prevArrow: $(".discover__item-nav-prev-btn-light"),
    nextArrow: $(".discover__item-nav-next-btn-light"),
  });
}

if (document.body.offsetWidth > 960) {
  $(".publication__list").slick({
    lazyLoad: "ondemand",
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: $(".publication__item-nav-prev-btn"),
    nextArrow: $(".publication__item-nav-next-btn"),
  });
} else {
  $(".publication__list").slick({
    prevArrow: $(".publication__item-nav-prev-btn"),
    nextArrow: $(".publication__item-nav-next-btn"),
  });
}
