
//First add lazy load which prevents images from loading before the user has reached them in a page
$(function(){
  $(".lazy").Lazy();
});

$(document).ready(function () {
  // this is a custom pre-loading screen which allows for images and other assets to load as well as provide a nice visual effect
  $("#Loader").fadeOut(3000);
  $("#head").addClass("onLoad").fadeIn(3000);
  $("html, body").scrollTop(100);

  // these methods are for the "what we do" section and enable for the icons to reveal content and viceversa.Children methods derived from DOM tree
  $(".text").hide();
  $(".whatWeDo").click(function () {
    $(this).children(".text").slideToggle(500);
    $(this).children(".hide-img").fadeToggle(500);
  });

  // these methods create a hover effect using mouseover/mouseout
  $(".projectname").removeClass("mkvisible");
  $(".projectsect").mouseover(function () {
    $(this).children(".projectname").addClass("mkvisible");
  });
  $(".projectsect").mouseout(function () {
    $(this).children(".projectname").removeClass("mkvisible").fadeIn;
  });

  // this entails the form submission conditional statements 
  $("#submission").submit(function(event){
    var userName = $("input:first").val();
    var userEmail = $("input#mail").val();
    if(userName && userEmail != ""  ){
      $(".message").text("Thank you, " + userName  + "! Your message has been received.");
      $(".message").removeClass("error");
      $(".message").addClass("success");
    }else{
      $(".message").text("Error!!! Please ensure you have filled in all the details correctly");
      $(".message").addClass("error");
    }
//This just prevents the page from reloading upon submission
    event.preventDefault();
  });

});


