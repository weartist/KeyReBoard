import { listen } from '@tauri-apps/api/event';

type MessagePayload = {
  message: string,
  reason: Number
}

export function setup() {

  let timer: number = 0;
  let counter: number = 0;

  listen<MessagePayload>('keyDown', (event) => {
    console.log('receive event ' + event);

    let hs: HTMLHeadElement = document.querySelector('h3') as HTMLHeadElement;
    // hs.innerText = hs.innerText + event.payload.message + "count is: " + counter;
    counter += 1;
    console.log(event.payload.message)
    if (hs && event.payload.message) {
      if (event.payload.reason == 3) {
        hs.innerText = 'change is: ' + event.payload.message;
        return;
      }
      let isDown = event.payload.reason == 1;
      let element_id = event.payload.message.toUpperCase();

      let button = document.getElementById(element_id) as HTMLElement;
      if (isDown) {
        button.classList.add("key_selected")
        if (element_id == "48") {
          hs.innerText = hs.innerText += timer;
          if (timer > 0) {
            clearInterval(timer);
          }
          timer = setInterval(() => {
            button.classList.remove("key_selected")
          }, 500);
        }
      } else {
        button.classList.remove("key_selected")
      }
    }
  })
}

export function createMask() {
  // if (document.getElementById("mask")) {
  //   return;
  // }
  // let mask = document.createElement("div");
  // mask.id = "mask";
  // mask.className = "mask";
  // // 把 mask 添加到body 里。
  // document.body.appendChild(mask);
  // // 控制 <html> 标签的样式
  // document.documentElement.classList.add("htmlMask");
};

