$("#kolkulater_one").click(function() {
  $("#kolkulater_one").removeClass("unactive_1");
  $("#kolkulater_one").toggleClass("active_1");
  $("#kolkulater_two").removeClass("active_1");
  $("#kolkulater_two").toggleClass("unactive_1");
  $("#kolkulater_three").removeClass("active_1");
  $("#kolkulater_three").toggleClass("unactive_1");

  $(".first_section_right_forms").css("display", "block");
  $(".first_section_right_forms2").css("display", "none");
  $(".first_section_right_forms3").css("display", "none");
});

$("#kolkulater_two").click(function() {
  $("#kolkulater_two").toggleClass("active_1");
  $("#kolkulater_two").removeClass("unactive_1");
  $("#kolkulater_one").removeClass("active_1");
  $("#kolkulater_one").toggleClass("unactive_1");
  $("#kolkulater_three").removeClass("active_1");
  $("#kolkulater_three").toggleClass("unactive_1");
  $("#kolkulater_one").removeClass("active-fulltime");

  $(".first_section_right_forms2").css("display", "block");
  $(".first_section_right_forms").css("display", "none");
  $(".first_section_right_forms3").css("display", "none");
});

$("#kolkulater_three").click(function() {
  $("#kolkulater_three").toggleClass("active_1");
  $("#kolkulater_three").removeClass("unactive_1");
  $("#kolkulater_one").removeClass("active_1");
  $("#kolkulater_one").toggleClass("unactive_1");
  $("#kolkulater_two").removeClass("active_1");
  $("#kolkulater_two").toggleClass("unactive_1");
  $("#kolkulater_one").removeClass("active-fulltime");

  $(".first_section_right_forms3").css("display", "block");
  $(".first_section_right_forms").css("display", "none");
  $(".first_section_right_forms2").css("display", "none");
});


