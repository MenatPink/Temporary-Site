                          // GLOBAL VARIABLES
var menuValue = false;
$("document").ready(function(){
                        // IN DOCUMENT ANIMATIONS

// Title fade-in animation
TweenMax.staggerFrom($(".fadeIn"), 2, {
  delay:3,
  top:"40px",
  ease:Power2.easeIn,
  opacity:0}, 0.75);

// Menu Icon animation
TweenLite.from(".menu", 1.5, {
  delay:6.5,
  opacity:0,
  ease:Power2.easeIn,});

$(".menu").click(function(){
  $(".menu").fadeOut(300);
  $(".cross").fadeIn(300);
});

$(".cross").click(function(){
  $(".cross").fadeOut(300);
  $(".menu").fadeIn(300);
});

});
