var display = document.getElementById('output');
var lastEntered = '';
var sum = '';
var currentValue = '0';
var decimalUsed = false;

// Reset all variables and update display
function clr() {
	lastEntered = '';
	sum = '';
	currentValue = 0;
	updateDisplay('current');
}

function number(v) {
	if (currentValue == 0) {
		currentValue = v;
	} else {
		currentValue += v;	
	}
	
	updateDisplay('current');
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
	console.log(eval('test'));
}

function updateDisplay(t){
	if (t === 'current') {
		display.innerHTML = currentValue;
	}
	if (t === 'sum') {
		display.innerHTML = eval(sum);
	}
}