// main
var acc = document.getElementsByClassName("collapse-question");

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

//loading
$(".loader-inner").loaders();
setTimeout(function () {
  $(".loading").fadeOut(600);
}, 1600);

// masonry
$('.box').masonry({
    itemSelector: '.item',
});

// WOW
new WOW().init();