$("#header-slider_one").on("click", function() {
  $("#header-slider_one").addClass("active");
  $("#header-slider_one").removeClass("unactive");
  $("#header-slider_one").removeClass("unactive2");
  $("#header-slider_two").removeClass("active");
  $("#header-slider_three").removeClass("active");

  $(".background-img").css("display", "block");
  $(".background-img2").css("display", "none");
  $(".background-img3").css("display", "none");
});

$("#header-slider_two").on("click", function() {
  $("#header-slider_one").addClass("unactiveinfinity");
  $("#header-slider_one").removeClass("active");
  $("#header-slider_one").removeClass("active2");
  $("#header-slider_two").addClass("active");
  $("#header-slider_two").removeClass("unactive");
  $("#header-slider_three").removeClass("active");

  $(".background-img2").css("display", "block");
  $(".background-img").css("display", "none");
  $(".background-img3").css("display", "none");
});

$("#header-slider_three").on("click", function() {
  $("#header-slider_one").addClass("unactive2");
  $("#header-slider_one").removeClass("active");

  $("#header-slider_three").addClass("active");
  $("#header-slider_three").removeClass("unactive");

  $("#header-slider_two").removeClass("active");

  $(".background-img3").css("display", "block");
  $(".background-img").css("display", "none");
  $(".background-img2").css("display", "none");
});
