$(function() {

	// declare all variables
	var result = 0;
	var entry = '';
	var decimal = false;
	var type = '';
	var numbers = [0,1,2,3,4,5,6,7,8,9];
	var operators = ['/','*','-','+'];

	// Function to update the display
	function updateOutput(value) {
		if(value == 'entry') {
			$('#output').text(entry);
		} else if (value == 'result') {
			$('#output').text(result);
		}
	}

	// Function to determine the type of entry
	function determineType(value) {
		for(var i = 0; i < numbers.length; i++) {
			if(value == numbers[i]) {
				type = 'number';
			}
		}

		for(var i = 0; i < operators.length; i++) {
			if(value == operators[i]) {
				type = 'operator';
			}
		}

		if(value == 'clr') {
			type = 'clear';
		}

		if(value == '.') {
			type = 'decimal';
		}

		if(value == '=') {
			type = 'equals';
		}
	}

	$('button').click(function() {
		entry = $(this).attr('value');
		determineType(entry);
		




		console.log(type);
		updateOutput('entry');
	});

});