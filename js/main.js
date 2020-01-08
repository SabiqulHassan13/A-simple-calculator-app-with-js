// Custom JS

// used to calculate display value
function calculate(value) {
	form.display.value += value;
}

// variable that holds memory value
var memoryValue = 0;

// used to store value in memory
function storeValueInMemory(value) {
	memoryValue = value;
}

// used to display value from memory
function displayMemoryValue() {
	return memoryValue;
}