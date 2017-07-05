$(document).ready(function() {
  $("button#cat-meow").click(function() {
    $("ul").prepend("<li>Meow</li>");
  });

  $("button#dog-bark").click(function() {
    $("ul").prepend("<li>Bark</li>");
  });
});
