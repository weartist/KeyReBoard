// import * as apis from "src/tauri-apps/api";
// import {apis} from "src/tauri-apps/api";
import { window } from '@tauri-apps/api';
import { listen, TauriEvent } from '@tauri-apps/api/event';

type MessagePayload = {
	message: String,
	reason: Number
}


listen<MessagePayload>('keyDown', (event) => {
	console.log('receive event ' + event);
	let div: HTMLHeadingElement = document.querySelector('h1') as HTMLInputElement
	console.log(event.payload.message)
	// div.innerText = event.payload.message

	let isDown = event.payload.reason == 1;
	let element_id = event.payload.message.toUpperCase();
	let button = document.getElementById(element_id) as HTMLElement;
	// let button = document.getElementsByClassName(element_id);

	// let label = document.getElementsByClassName("info");

	div.innerText = 'element id is: ' + element_id + "is down: " + isDown;

	if (isDown) {
		button.classList.add("this_selected")
	} else {
		button.classList.remove("this_selected")
	}

	// for (let index = 0; index < button.length; index++) {
	// 	const element = button[index];
	// 	if (isDown) {
	// 		button.classList.add("this_selected")
	// 	} else {
	// 		button.classList.remove("this_selected")
	// 	}
	// }
});


// window.__TAURI__.event.listen('keyDown', (event) => {
// 	console.log('receive event ' + event);
// 	let div = document.querySelector('h1')
// 	console.log(event.payload.message)
// 	// div.innerText = event.payload.message

// 	let isDown = event.payload.reason == 1;
// 	let element_id = event.payload.message.toUpperCase();
// 	let button = document.getElementById(element_id);
// 	// let button = document.getElementsByClassName(element_id);

// 	// let label = document.getElementsByClassName("info");

// 	div.innerText = 'element id is: ' + element_id + "is down: " + isDown;

// 	if (isDown) {
// 		button.classList.add("this_selected")
// 	} else {
// 		button.classList.remove("this_selected")
// 	}

// 	// for (let index = 0; index < button.length; index++) {
// 	// 	const element = button[index];
// 	// 	if (isDown) {
// 	// 		button.classList.add("this_selected")
// 	// 	} else {
// 	// 		button.classList.remove("this_selected")
// 	// 	}
// 	// }
// })

// await window.__TAURI__.setSize(new LogicalSize(333, 111));
// await window.__TAURI__.setPosition(new LogicalPosition(300, 500));



await listen<window.LogicalSize>(TauriEvent.WINDOW_MOVED, (event) => {
	console.log(event);
	localStorage.setItem('width', 'event.payload.width');
	localStorage.setItem('height', 'event.payload.height');
})

await listen<string>(TauriEvent.WINDOW_RESIZED, (event) => {
	console.log(event);
})

var buttons = document.getElementsByTagName("button");
console.log('button count is ' + buttons.length);
for (let index = 0; index < buttons.length; index++) {
    const element = buttons[index];
    element.disabled = true;
}


let createMask = () =>{
    if(document.getElementById("mask")){
        return;
    }
    let  mask = document.createElement("div");
        mask.id = "mask";
        mask.className = "mask";
    // 把 mask 添加到body 里。
    document.body.appendChild( mask );
    // 控制 <html> 标签的样式
    document.documentElement.classList.add("htmlMask");
}

createMask()

