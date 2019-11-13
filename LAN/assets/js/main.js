// A $( document ).ready() block.

//console.log('btn camera is hovered');//

$( document ).ready(function() {
    console.log( "ready!" );

    // camera - button and hover

    $('.btn-cam').mouseenter(function(){
    	console.log('btn camera is hovered');
    	$('.r-cam').addClass('show');
    });

    $('.btn-cam').mouseleave(function(){
    	console.log('btn camera has left');
    	$('.r-cam').removeClass('show');
    });

   // excel - button and hover

    $('.btn-excel').mouseenter(function(){
    	console.log('btn excel is hovered');
    	$('.r-excel').addClass('show');
    });

    $('.btn-excel').mouseleave(function(){
    	console.log('btn excel has left');
    	$('.r-excel').removeClass('show');
    });

      // p2p - button and hover

    $('.btn-p2p').mouseenter(function(){
    	console.log('btn p2p is hovered');
    	$('.r-p2p').addClass('show');
    });

    $('.btn-p2p').mouseleave(function(){
    	console.log('btn p2p has left');
    	$('.r-p2p').removeClass('show');
    });
     
           // gmap - button and hover

    $('.btn-gmap').mouseenter(function(){
    	console.log('btn gmap is hovered');
    	$('.r-gmap').addClass('show');
    });

    $('.btn-gmap').mouseleave(function(){
    	console.log('btn gmap has left');
    	$('.r-gmap').removeClass('show');
    });

           // deluxe - button and hover

    $('.btn-deluxe').mouseenter(function(){
    	console.log('btn deluxe is hovered');
    	$('.r-deluxe').addClass('show');
    });

    $('.btn-deluxe').mouseleave(function(){
    	console.log('btn deluxe has left');
    	$('.r-deluxe').removeClass('show');
    });

        // audacity - button and hover
     
     $('.btn-audacity').mouseenter(function(){
        console.log('btn audacity is hovered');
        $('.r-audacity').addClass('show');
    });

    $('.btn-audacity').mouseleave(function(){
        console.log('btn audacity has left');
        $('.r-audacity').removeClass('show');
    });
     
         // fax - button and hover
     
     $('.btn-fax').mouseenter(function(){
        console.log('btn fax is hovered');
        $('.r-fax').addClass('show');
    });

    $('.btn-fax').mouseleave(function(){
        console.log('btn fax has left');
        $('.r-fax').removeClass('show');
    });
     
        // bomomo - button and hover
     
     $('.btn-bom').mouseenter(function(){
        console.log('btn bom is hovered');
        $('.r-bom').addClass('show');
    });

    $('.btn-bom').mouseleave(function(){
        console.log('bom has left');
        $('.r-bom').removeClass('show');
    });

  // camera fall - button and hover
     
     $('.btn-fall').mouseenter(function(){
        console.log('btn fall is hovered');
        $('.r-fall').addClass('show');
    });

    $('.btn-fall').mouseleave(function(){
        console.log('fall has left');
        $('.r-fall').removeClass('show');
    });

    // blender - button and hover
     
     $('.btn-blender').mouseenter(function(){
        console.log('btn blender is hovered');
        $('.r-blender').addClass('show');
    });

    $('.btn-blender').mouseleave(function(){
        console.log('blender has left');
        $('.r-blender').removeClass('show');
    });

    // dots - button and hover
     
     $('.btn-dots').mouseenter(function(){
        console.log('btn dots is hovered');
        $('.r-dots').addClass('show');
    });

    $('.btn-dots').mouseleave(function(){
        console.log('dots has left');
        $('.r-dots').removeClass('show');
    });

        // slitscan - button and hover
     
     $('.btn-slit').mouseenter(function(){
        console.log('btn slit is hovered');
        $('.r-slit').addClass('show');
    });

    $('.btn-slit').mouseleave(function(){
        console.log('slit has left');
        $('.r-slit').removeClass('show');
    });


});