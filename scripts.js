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
	if (current.length === 0) {
		current = v;
	} else {
		current += v;	
	}
	last = v;
	display.innerHTML = current;
}

function operator(v) {
	if (lastOperator()) {
		console.log('here');
	}
	if (current.length === 0 && v === '-') {
		current = v;
		display.innerHTML = current;
	}
	last = v;
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

function lastOperator() {
	for (var i = 0; i < operators.length; i++) {
		if (operators[i] == last) {
			console.log('Last entry was an operator');
			return true;
		}
	}
	console.log('Last entry was not an operator');
	return false;
}