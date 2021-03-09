$("#nine1").on("click", function() {
  $("#nine1").addClass("active_5");
  $("#nine1").removeClass("unactive_5");
  $("#nine2").removeClass("active_5");
  $("#nine3").removeClass("active_5");
  $("#nine4").removeClass("active_5");
  $(".nine-form1").css("display", "flex");
  $(".nine-form2").css("display", "none");
  $(".nine-form3").css("display", "none");
  $(".nine-form4").css("display", "none");
});

$("#nine2").on("click", function() {
  $("#nine1").addClass("unactive_5");
  $("#nine1").removeClass("active_5");
  $("#nine2").addClass("active_5");
  $("#nine2").removeClass("unactive_5");
  $("#nine3").removeClass("active_5");
  $("#nine4").removeClass("active_5");
  $(".nine-form2").css("display", "flex");
  $(".nine-form1").css("display", "none");
  $(".nine-form3").css("display", "none");
  $(".nine-form4").css("display", "none");
});

$("#nine3").on("click", function() {
  $("#nine1").addClass("unactive_5");
  $("#nine1").removeClass("active_5");
  $("#nine3").removeClass("unactive_5");
  $("#nine3").addClass("active_5");
  $("#nine2").removeClass("active_5");
  $("#nine4").removeClass("active_5");
  $(".nine-form3").css("display", "flex");
  $(".nine-form1").css("display", "none");
  $(".nine-form2").css("display", "none");
  $(".nine-form4").css("display", "none");
});
$("#nine4").on("click", function() {
  $("#nine1").addClass("unactive_5");
  $("#nine1").removeClass("active_5");
  $("#nine4").addClass("active_5");
  $("#nine3").removeClass("unactive_5");
  $("#nine2").removeClass("active_5");
  $("#nine3").removeClass("active_5");
  $(".nine-form4").css("display", "flex");
  $(".nine-form1").css("display", "none");
  $(".nine-form2").css("display", "none");
  $(".nine-form3").css("display", "none");
});
