$("#eight1").on("click", function() {
  $("#eight1").addClass("active_3");
  $("#eight1").removeClass("unactive_4");

  $("#eight2").removeClass("active_3");
  $("#eight3").removeClass("active_3");
  $("#eight4").removeClass("active_3");

  $(".eight-form-slider1").css("display", "block");
  $(".eight-form-slider2").css("display", "none");
  $(".eight-form-slider3").css("display", "none");
  $(".eight-form-slider4").css("display", "none");
});

$("#eight2").on("click", function() {
  $("#eight1").addClass("unactive_4");
  $("#eight1").removeClass("active_3");

  $("#eight2").addClass("active_3");
  $("#eight2").removeClass("unactive_4");

  $("#eight3").removeClass("active_3");
  $("#eight4").removeClass("active_3");

  $(".eight-form-slider2").css("display_3", "block");
  $(".eight-form-slider1").css("display_3", "none");
  $(".eight-form-slider3").css("display_3", "none");
  $(".eight-form-slider4").css("display_3", "none");
});

$("#eight3").on("click", function() {
  $("#eight1").addClass("unactive_4");
  $("#eight1").removeClass("active_3");

  $("#eight3").addClass("active_3");
  $("#eight3").removeClass("unactive_4");
  $("#eight2").removeClass("active_3");
  $("#eight4").removeClass("active_3");

  $(".eight-form-slider3").css("display", "block");
  $(".eight-form-slider1").css("display", "none");
  $(".eight-form-slider2").css("display", "none");
  $(".eight-form-slider4").css("display", "none");
});
$("#eight4").on("click", function() {
  $("#eight1").addClass("unactive_4");
  $("#eight1").removeClass("active_3");

  $("#eight4").addClass("active_3");
  $("#eight3").removeClass("unactive_4");
  $("#eight2").removeClass("active_3");
  $("#eight3").removeClass("active_3");

  $(".eight-form-slider4").css("display", "block");
  $(".eight-form-slider1").css("display", "none");
  $(".eight-form-slider2").css("display", "none");
  $(".eight-form-slider3").css("display", "none");
});
