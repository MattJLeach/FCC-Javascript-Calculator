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
			} else {
				alert('You must enter a number first');
			}
			break;
		case 'number':
			sum += current;
			current = v;
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
		current += '.';
		decimal = true;
		display.innerHTML = current;
	}
}

function equals() {
	if (current.length > 0) {
		sum += current;
	}
	last = '=';
	display.innerHTML = eval(sum);
	sum = eval(sum);
}

document.addEventListener('keypress', function(event) {
	var key = event.keyCode;
	console.log(key);
	if (key === 13) {
		equals();
	}

	if (key === 42 || key === 43 || key === 45 || key === 47) {
		operator(String.fromCharCode(key));
	}

	if (key == 8 || key == 46) {
		clr();
	}

	if (key >= 48 && key <= 57) {
		number(String.fromCharCode(key));
	}

});