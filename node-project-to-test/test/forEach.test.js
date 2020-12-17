const assert = require('assert');
const { forEach } = require('../index');

let numbers;
beforeEach(() => {
	numbers = [1, 2, 3];
});

it('Should sum an array', () => {
	let sum = 0;
	forEach(numbers, (value) => {
		sum += value;
	});

	assert.strictEqual(sum, 6);
	numbers.push(3);
	numbers.push(3);
});

it('beforeEach is run every time', () => {
	assert.strictEqual(numbers.length, 3);
});
