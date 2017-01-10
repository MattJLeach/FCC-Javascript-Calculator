var display = document.getElementById('output');
var operators = ['+', '-', '*', '/'];
var last = '';
var sum = '';
var current = '';
var decimal = false;

// Reset all variables and update display
function clr() {
	last = '';
	sum = '';
	current = '';
	decimal = false;
	display.innerHTML = '0';
}

function number(v) {
	switch (last) {
		case '':
			current = v;
			break;
		case 'number':
			current += v;
			break;
		case 'operator':
			sum += current;
			current = v;
			break;
	}
	display.innerHTML = current;
	last = 'number';
}

function operator(v) {
	switch (last) {
		case '':
			if (v === '-') {
				current = v;
				display.innerHTML = current;
				last = 'number';
			} else {
				alert('You must enter a number first');
			}
			break;
		case 'number':
			sum += current;
			sum = eval(sum);
			current = v;
			decimal = false;
			display.innerHTML = eval(sum);
			break;
		case 'operator':
			current = v;
			break;
	}
		
	last = 'operator';
}

function decimalPoint() {
	if (!decimal) {
		switch (last) {
			case '':
				current = '0.';
				break;
			case 'number':
				current += '.';
				break;
			case 'operator':
				current = '0.';
				break;
		}
		display.innerHTML = current;
	}
}

function equals() {
	if (current.length > 0 && last != 'operator') {
		sum += current;
		last = 'operator';
		display.innerHTML = eval(sum);
		sum = eval(sum);
	}
}