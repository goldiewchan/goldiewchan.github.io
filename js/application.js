$(document).ready(function($) {
	$(document).on('click', 'body', function(event) {
		event.preventDefault();
		$('div.bday').removeClass('fadeInDown');
		$('div.bday').addClass('flipInY');
		setTimeout(function(){ $('div.bday').removeClass('flipInY'); }, 2000);

		$('div.name h1').css('color', "" + randColor() + "");
	});
});

function randColor () {
	return '#'+Math.floor(Math.random()*16777215).toString(16);
}
