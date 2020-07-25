/****** NAVBAR COLOR CHANGE ON SCROLL ******/

// window.onscroll = function() {scrollFunction()};
//
// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.getElementById("navbar").style.backgroundColor = "#202020";
//     document.getElementById("currentpage").style.color = "white";
//     document.getElementById("about").style.color = "white";
//     document.getElementById("process").style.color = "white";
//     document.getElementById("advocate").style.color = "white";
//   } else {
//     document.getElementById("navbar").style.backgroundColor = "white";
//     document.getElementById("currentpage").style.color = "#202020";
//     document.getElementById("about").style.color = "#202020";
//     document.getElementById("process").style.color = "#202020";
//     document.getElementById("advocate").style.color = "#202020";  }
// }


/***** SLIDESHOW*****/
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// /**** MAKE DIV'S FADE IN ****/
// $(window).on("scroll", function(){
//   var scrollTop = $(this).scrollTop();
//   $('.scrollDiv').each(function(){
//     var el = $(this);
//     var offsetTop = el.offset().top;
//     if(scrollTop > offsetTop){
//     	el.addClass("scrolled");
//     }else{
//     	el.removeClass("scrolled");
//     }
//   });
// });

$(function(){  // $(document).ready shorthand
  $('.monster').fadeIn('slow');
});

$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.scrolldiv').each( function(i){

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object *0.9){

                $(this).animate({'opacity':'1'},1000);

            }

        });

    });

});
