
//First add lazy load which prevents images from loading before the user has reached them in a page
$(function(){
  $(".lazy").Lazy();
});

$(document).ready(function () {
  // this is a custom pre-loading screen which allows for images and other assets to load as well as provide a nice visual effect
  $("#Loader").fadeOut(1000);
  $("#head").addClass("onLoad").fadeIn(2000);
  $("html, body").scrollTop(0);

  // these are for the "what we do" section and enable for the icons to reveal contaent and viceversa
  $(".text").hide();
  $(".weDo-cont").click(function () {
    $(this).children(".text").slideToggle(500);
    $(this).children(".hide-img").fadeToggle(500);
  });

  // this creates a hover effect using mouseover/mouseout
  $(".port_desc").removeClass("here");
  $(".port_cont").mouseover(function () {
    $(this).children(".port_desc").addClass("here");
  });
  $(".port_cont").mouseleave(function () {
    $(this).children(".port_desc").removeClass("here").fadeIn;
  });

  // this entails the form submission conditional statements 
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
//This just prevents the page from reloading upon submission
    event.preventDefault();
  });

});


