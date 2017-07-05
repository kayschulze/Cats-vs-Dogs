$(document).ready(function() {
  $("button#cat-meow").click(function() {
    $("ul.cat").prepend("<li>Meow</li>");
    $("ul.cat").append("<img src='img/catmeow.jpeg'>");
  });
  $("button#dog-bark").click(function() {
    $("ul.dog").prepend("<li>Bark</li>");
    $("ul.dog").append("<img src='img/dogbark.jpeg'>");
  });
});
