var total = 0;
var lastEntered = '';
var sum = '';
var currentValue = '0';
var display = document.getElementById('output');
var decimalUsed = false;

function clr() {
	// Reset all variables and update display
	total = 0;
	lastEntered = '';
	sum = '';
	currentValue = 0;
	updateDisplay('currentValue');
}

function number(v) {
	if (currentValue == 0) {
		currentValue = v;
	} else {
		currentValue += v;	
	}
	
	updateDisplay('currentValue');
}

function operator(v) {
	console.log(v);
}

function decimal() {
	if (!decimalUsed) {
		currentValue += '.';
		decimalUsed = true;
		updateDisplay('currentValue');
	}
}

function equals() {
	console.log('equals');
}

function updateDisplay(t){
	if (t === 'currentValue') {
		display.innerHTML = currentValue;
	}
}