// in this project we test browser-based code with JSDOM

document.querySelector('form').addEventListener('submit', (event) => {
	event.preventDefault();

	const { value } = document.querySelector('input');

	const header = document.querySelector('h1');
	if (value.includes('@')) {
		header.innerHTML = 'Valid email';
	} else {
		header.innerHTML = 'Invalid email';
	}
});
