
// JQUERY
// lazy load
$(function(){
  $(".lazy").Lazy();
});

$(document).ready(function () {
  // loader
  $("#Loader").fadeOut(1000);
  $("#head").addClass("onLoad").fadeIn(2000);
  $("html, body").scrollTop(0);

  // what we do icons effect
  $(".text").hide();
  $(".weDo-cont").click(function () {
    $(this).children(".text").slideToggle(500);
    $(this).children(".hide-img").fadeToggle(500);
  });

  // portfolio effects
  $(".port_desc").removeClass("here");
  $(".port_cont").mouseover(function () {
    $(this).children(".port_desc").addClass("here");
  });
  $(".port_cont").mouseleave(function () {
    $(this).children(".port_desc").removeClass("here").fadeIn;
  });

  // form submission effect
  $("#submission").submit(function(event){
    var data_1 = $("input:first").val();
    var data_2 = $("input#mail").val();
    if(data_1 && data_2 != ""  ){
      $(".message").text("Thank you " + data_1 + " Your message has been received");
      $(".message").removeClass("error");
      $(".message").addClass("success");
    }else{
      $(".message").text("Error!!! Please fill in all the details correctly");
      $(".message").addClass("error");
    }
    event.preventDefault();
  });

});


