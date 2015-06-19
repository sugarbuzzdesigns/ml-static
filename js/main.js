$(function(){
	var video = $('#vid');

	var breakpoint = {};

	breakpoint.refreshValue = function () {
		this.value = window.getComputedStyle(document.querySelector('body'), '::before').getPropertyValue('content').replace(/['"]+/g, '');
	};

	$(window).resize(function () {
	  	breakpoint.refreshValue();

		if(breakpoint.value === 'desktop'){
			console.log('desktop');
			
			$('source', video).attr('src', 'library/media/videos/43644_ML-Chalkboard-BW-1080p-final.mp4');
	
		} else if (breakpoint.value === 'mobile') {
			console.log('mobile');
		}	  
	}).resize();

	video.load();

	video.on('canplay', function(){
		video.fadeIn();
		video[0].play();
	});	

});