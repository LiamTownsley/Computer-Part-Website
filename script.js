$(document).ready(function(){
    $('#iteminfo').hide();
    $("#aboutitem").click(function(){
      $('#aboutsubtitle').hide();
      $("#iteminfo").slideToggle("slow");
    });
    $('.buy-button').click(function(){
        alert("You attempted to purcahse something.\n\nThis is not available due to this being a test website.")
    });
    $('#contact-form').on("submit", function(){
      alert("You attempted to contact us.\n\nThis is not available due to this being a test website.")
  });
    $("#login-form").on("submit", function() {
      alert("This is a test website - login/sign up is disabled.")
    });
    });