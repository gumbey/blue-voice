var $btn = $('.btn-pause');
var $video = document.querySelector('.drips-vid');

/if you want to play you just change the bottomg to $video.play/
$btn.on('click',function () {
	if ($video.paused) {
		$video.play();
		$btn.html('Pause');
	} else {
		$video.pause();
		$btn.html('Play');
	}
});
