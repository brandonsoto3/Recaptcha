function muestra_oculta(id){
if (document.getElementById){
var el = document.getElementById(id);
el.style.display = (el.style.display == 'none') ? 'block' : 'none';
}
}
window.onload = function(){
muestra_oculta('contenido');
}


// JS para ocultar y mostrar informacion de usuario en responsive 

function myFunction2() {
    var x = document.getElementById("myDIV2");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

 // JS para ocultar y mostrar menu responsive

   function myFunction3() {
    var x = document.getElementById("myDIV3");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

    jQuery(document).ready(function() {
    jQuery(document).foundation();
$('#myDIV3').css('display','none');
});

//$('#myDIV3').css('display','none');


//JS para buscador 


  $(document).foundation();

$(function() {
  $('.search')
    .bind('click', function(event) {
      $(".search-field").toggleClass("expand-search");

      // if the search field is expanded, focus on it
      if ($(".search-field").hasClass("expand-search")) {
        $(".search-field").focus();
      }
    })
});


//prueba de responsive 






// enviar a la izquierda menu



$('.izquierda').hover(function(){
    $(this).closest('.izquierda').addClass('opens-left').removeClass('opens-right');
}, function(){
    $(this).closest('.izquierda').removeClass('opens-right').addClass('opens-left');
});



$(document).ready(function (e) {

  $(window).scroll(function(event) {

    if ($(window).scrollTop() < 200) {
      $('.top-bar').show().css({
        'display': 'block'
      });

      $('#menu-desktop').show().css({
        'position': 'relative'
      });
    }

  });

});

$(window).scroll(function(event) {

  if ($(window).scrollTop() > 200) {

    $('#menu-desktop').show().css({
      'position': 'fixed',
      'width': '100%'
    });

  }

});







