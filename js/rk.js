$(document).ready(function(){
     $(".videoBox").fitVids();
});

var colors = ["#ff5c50", "#8981f1", "#9b22c5"];
var color = colors[Math.floor(Math.random() * colors.length)];



$('.item').mouseover(function() {
   $('.overlay').css("background", color); // change css
});
$('.item').mouseleave(function() {
   color = colors[Math.floor(Math.random() * colors.length)];
});

