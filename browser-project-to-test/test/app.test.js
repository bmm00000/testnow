const assert = require('assert');

it('Has a text input', async () => {
	const dom = await render('index.html');
	const input = dom.window.document.querySelector('input');
	assert(input);
});

it('Shows a valid email message', async () => {
	const dom = await render('index.html');
	const input = dom.window.document.querySelector('input');
	input.value = 'test@test.com';
	dom.window.document
		.querySelector('form')
		.dispatchEvent(new dom.window.Event('submit'));

	const h1 = dom.window.document.querySelector('h1');
	assert.strictEqual(h1.innerHTML, 'Valid email');
});

it('Shows an invalid email message', async () => {
	const dom = await render('index.html');
	const input = dom.window.document.querySelector('input');
	input.value = 'testtest.com';
	dom.window.document
		.querySelector('form')
		.dispatchEvent(new dom.window.Event('submit'));

	const h1 = dom.window.document.querySelector('h1');
	assert.strictEqual(h1.innerHTML, 'Invalid email');
});
