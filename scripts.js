$(function() {

	// declare all variables
	var result = 0;
	var entry = '';

	function updateOutput(value) {
		if(value == 'entry') {
			$('#output').text(entry);
		} else if (value == 'result') {
			$('#output').text(result);
		}
	}

	$('button').click(function() {
		entry = $(this).attr('value');
		console.log(entry);
		updateOutput('entry');
	});

});