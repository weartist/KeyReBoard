// import { invoke } from "@tauri-apps/api/tauri";

import { listen } from '@tauri-apps/api/event';

// import { appWindow, LogicalPosition, LogicalSize } from '@tauri-apps/api/window'

class Payload {
  constructor(){}
  message?: string;
  reason?: number;
  width?: number;
  height?: number;
}


// interface Size {
//     width: number;
//     height: number;
// }

// interface Position {
//     x: number;
//     y: number;
// }

interface Event {
  payload: Payload
}

// interface LoadedPayload {
//     loggedIn: boolean,
//     token: string
//   }

listen('keyDown', (event: Event) => {
	console.log('receive event ' + event);
	let hs = document.querySelector('h1') as HTMLElement | null;
	console.log(event.payload.message)
    if (hs && event.payload.message) {
        hs.innerText = event.payload.message;
        let isDown = event.payload.reason == 1;
        let element_id = event.payload.message.toUpperCase();
        // let button = document.getElementById(element_id);
        let button = document.getElementsByClassName(element_id) as HTMLCollectionOf<Element>;
        for (let index = 0; index < button.length; index++) {
            const element = button[index];
            if (isDown) {
              element.classList.add("this_selected")
            } else {
              element.classList.remove("this_selected")
            }
        }
    }

})


// appWindow.once('tauri://created', function () {
//     const position: LogicalPosition = new LogicalPosition(
//         Number(localStorage.getItem('_x')),
//         Number(localStorage.getItem('_y'))
//     );
//     appWindow.setPosition(position);

//     const size: LogicalSize = new LogicalSize(
//         Number(localStorage.getItem('_width')),
//         Number(localStorage.getItem('_height'))
//     )
//     appWindow.setSize(size);
//     console.log('window re size and re location if finished');
// });


// listen('Loaded', (event: {payload: LoadedPayload}) => {
// // await once<LoadedPayload>('Loaded', (event) => {
//     console.log(`App is loaded, loggedIn: ${event.payload.loggedIn}, token: ${event.payload.token}`);
//     const position: LogicalPosition = new LogicalPosition(
//         Number(localStorage.getItem('_x')),
//         Number(localStorage.getItem('_y'))
//     );
//     appWindow.setPosition(position);

//     const size: LogicalSize = new LogicalSize(
//         Number(localStorage.getItem('_width')),
//         Number(localStorage.getItem('_height'))
//     )
//     appWindow.setSize(size);
//     console.log('re size and re location if finished');
//   });


// listen<Position>(TauriEvent.WINDOW_MOVED, (event) => {
// 	console.log(event);

//     const location: Position = event.payload;
//     if (location.x & location.y) {
//         localStorage.setItem('_x', `${location.x}`);
//         localStorage.setItem('_y', `${location.y}`);

//         let hs = document.querySelector('h1') as HTMLElement | null;
//         if (hs) {
//             hs.innerText = `${location.x}: ${location.y}`;
//         }
//     }
// })

// await listen<Size>(TauriEvent.WINDOW_RESIZED, (event) => {
// 	console.log(event);

//     const size: Size = event.payload;
//     if (size.width & size.height) {
//         localStorage.setItem('_width', `${size.width}`);
//         localStorage.setItem('_height', `${size.height}`);

//         let hs = document.querySelector('h1') as HTMLElement | null;
//         if (hs) {
//             hs.innerText = `${size.width}: ${size.height}`;
//         }
//     }
// })

// var buttons = document.getElementsByTagName("button");
// console.log('button count sss ' + buttons.length);
// for (let index = 0; index < buttons.length; index++) {
//     const element = buttons[index];
//     element.disabled = true;
// }


// const createMask = () => {
//     if( document.getElementById("mask")){
//         return;
//     }
//     let mask = document.createElement("div");
//         mask.id = "mask";
//         mask.className = "mask";
//     // 把 mask 添加到body 里。
//     document.body.appendChild( mask );
//     // 控制 <html> 标签的样式
//     document.documentElement.classList.add("htmlMask");    
// };


// createMask();