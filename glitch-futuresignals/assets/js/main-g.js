$(document).ready(function(){
	console.log(3*5);


	$('.research-item').click(function(){
		$(this).toggleClass('large');

	});

	$('.nav-item').click(function(){
		$('.nav-item').removeClass('active');
		$(this).addClass('active')
	});

	var hideAll = function(){
		$('.research-item').addClass('hide');
	}

	$('.btn-mp3').click(function(){
		hideAll();
		$('.mp3').removeClass('hide');
	});

	$('.btn-flac').click(function(){
		hideAll();
		$('.flac').removeClass('hide');
	});
	
	$('.btn-aiff').click(function(){
		hideAll();
		$('.aiff').removeClass('hide');
	});

	$('.btn-wav').click(function(){
		hideAll();
		$('.wav').removeClass('hide');
	});

	$('.btn-m4a').click(function(){
		hideAll();
		$('.m4a').removeClass('hide');
	});


});

