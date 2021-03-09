$("#kurwa1").on("click", function() {
  $("#kurwa1").addClass("active_3");
  $("#kurwa1").removeClass("unactive_3");

  $("#kurwa2").removeClass("active_3");
  $("#kurwa3").removeClass("active_3");

  $(".six_section_bot_right_forms").css("display", "block");
  $(".six_section_bot_right_forms2").css("display", "none");
  $(".six_section_bot_right_forms3").css("display", "none");
});

$("#kurwa2").on("click", function() {
  $("#kurwa1").addClass("unactive_3");
  $("#kurwa1").removeClass("active_3");

  $("#kurwa2").addClass("active_3");
  $("#kurwa2").removeClass("unactive_3");
  $("#kurwa3").removeClass("active_3");

  $(".six_section_bot_right_forms2").css("display", "block");
  $(".six_section_bot_right_forms").css("display", "none");
  $(".six_section_bot_right_forms3").css("display", "none");
});

$("#kurwa3").on("click", function() {
  $("#kurwa1").addClass("unactive_3");
  $("#kurwa1").removeClass("active_3");

  $("#kurwa3").addClass("active_3");
  $("#kurwa3").removeClass("unactive_3");
  $("#kurwa2").removeClass("active_3");

  $(".six_section_bot_right_forms3").css("display", "block");
  $(".six_section_bot_right_forms2").css("display", "none");
  $(".six_section_bot_right_forms").css("display", "none");
});
