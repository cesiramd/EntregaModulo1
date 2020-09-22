$(document).ready(function(){
  console.log("DOM CARGADO");

  let count = 100;

  for (let i = 0; i < count; i++){
    $('body').append('<div class="burbujas" style = "top:' + Math.random() * $('body').height()  + 'px;left:' + Math.random() * window.innerWidth + 'px" displacement = "' + Math.random() * 0.050 +'"></div>'  );
  }

  $(window).scroll(function(){
    console.log($(window).scrollTop());
    console.log (window.innerHeight);

//animacionBurbujas
    $('.burbujas').each(function(){
      $(this).css('top', $(this).position().top - ($(window).scrollTop() * $(this).attr('displacement')));
    })

  //animacionPez2
    $('.pez2').css('width', $ (window).scrollTop()*0.2);
    $('.pez2').css('height', $ (window).scrollTop()*0.2);
    $('.pez2').css('left', $ (window).scrollTop()*1.1);
    $('.pez2').css('top', $ (window).scrollTop()*1.3);

//animacionAnguila
    if ( $(window).scrollTop() >= 1900 ){
      $('.anguila').addClass('aA');
    } else if ($(window).scrollTop() < 1800){
      $('.anguila').removeClass('aA');
    }

//animacionMantaraya
    if ($(window).scrollTop() > 0){
      $('.mantaraya').addClass('aM');
    }

    if( $( window ).scrollTop() > 1100 ){
      $( '.pez5' ).fadeIn();
    } else{
      $( '.pez5').fadeOut();
    }

//animacionTiburon
    $( '.tiburon' ).on( 'mouseenter', function(){
      $( this ).addClass( 'aTPause' );
    });

    $( '.tiburon' ).on( 'mouseout', function(){
      $( this ).removeClass( 'aTPause' );
    });


    if( $( window ).scrollTop() >= 2363 ){
      $( '.pez2' ).hide();
    }else{
      $( '.pez2' ).show();
    }
  }); //window scroll


  // animacion pez 5
      $( window ).on( 'mousemove', function( e ){
        console.log(e.clientX);
        console.log(e.clientY);
        $( '.pez5' ).css( 'left', e.clientX - 350);
        $( '.pez5' ).css( 'top', e.clientY - 100);
      });

}); //document ready
