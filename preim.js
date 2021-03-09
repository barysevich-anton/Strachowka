$("#preim_one").click(function() {
  $("#preim_one").removeClass("unactive_2");
  $("#preim_one").toggleClass("active_2");
  $("#preim_two").removeClass("active_2");
  $("#preim_two").toggleClass("unactive_2");
  $("#preim_three").removeClass("active_2");
  $("#preim_four").removeClass("active_2");
  $("#preim_four").toggleClass("unactive_2");
  $("#preim_three").toggleClass("unactive_2");

  $(".second_section_right_forms").css("display", "block");
  $(".second_section_right_forms1").css("display", "none");
  $(".second_section_right_forms2").css("display", "none");
  $(".second_section_right_forms3").css("display", "none");
});

$("#preim_two").click(function() {
  $("#preim_two").toggleClass("active_2");
  $("#preim_two").removeClass("unactive_2");
  $("#preim_one").removeClass("active_2");
  $("#preim_one").toggleClass("unactive_2");
  $("#preim_three").removeClass("active_2");
  $("#preim_three").toggleClass("unactive_2");
  $("#preim_four").removeClass("active_2");
  $("#preim_four").toggleClass("unactive_2");
  $("#preim_one").removeClass("active-fulltime");

  $(".second_section_right_forms1").css("display", "block");
  $(".second_section_right_forms").css("display", "none");
  $(".second_section_right_forms2").css("display", "none");
  $(".second_section_right_forms3").css("display", "none");
});

$("#preim_three").click(function() {
  $("#preim_three").toggleClass("active_2");
  $("#preim_three").removeClass("unactive_2");
  $("#preim_one").removeClass("active_2");
  $("#preim_one").toggleClass("unactive_2");
  $("#preim_two").removeClass("active_2");
  $("#preim_two").toggleClass("unactive_2");
  $("#preim_four").removeClass("active_2");
  $("#preim_four").toggleClass("unactive_2");
  $("#preim_one").removeClass("active-fulltime");

  $(".second_section_right_forms2").css("display", "block");
  $(".second_section_right_forms").css("display", "none");
  $(".second_section_right_forms1").css("display", "none");
  $(".second_section_right_forms3").css("display", "none");
});

$("#preim_four").click(function() {
  $("#preim_four").toggleClass("active_2");
  $("#preim_four").removeClass("unactive_2");
  $("#preim_one").removeClass("active_2");
  $("#preim_one").toggleClass("unactive_2");
  $("#preim_two").removeClass("active_2");
  $("#preim_two").toggleClass("unactive_2");
  $("#preim_one").removeClass("active-fulltime");
  $("#preim_three").removeClass("active_2");
  $("#preim_three").toggleClass("unactive_2");

  $(".second_section_right_forms3").css("display", "block");
  $(".second_section_right_forms2").css("display", "none");
  $(".second_section_right_forms").css("display", "none");
  $(".second_section_right_forms1").css("display", "none");
});
