window.__TAURI__.event.listen('keyDown', (event) => {
	console.log('receive event ' + event);
	let div = document.querySelector('h1')
	console.log(event.payload.message)
	div.innerText = event.payload.message
})
