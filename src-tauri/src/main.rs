#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use block::ConcreteBlock;
use cacao::{foundation::{NSString}};
use objc::{class, msg_send, sel, sel_impl, runtime::Object};
use tauri::{ Manager, AppHandle };  // LogicalSize, LogicalPosition, WindowEvent
use std::{collections::HashMap};
use lazy_static::lazy_static;
use serde::{Deserialize, Serialize};

use std::fs::create_dir_all;
use std::io::Write;
use tauri::GlobalWindowEvent;
// use std::path::Display;
use std::sync::Mutex;
use std::fs::File;

// the payload type must implement `Serialize` and `Clone`.
#[derive(Clone, serde::Serialize)]
struct Payload {
  message: String,
  reason: i32
}

pub const WINDOWS_STATE_PATH: &str = ".window-state";
static mut STATE: Mutex<WindowData> = Mutex::new(WindowData{width: 800, height: 600, x: 0, y: 0});

lazy_static!{
    static ref RECORDS: HashMap<&'static str, &'static str> = vec![
        // ("55", "CMD"),
        // ("57", "CAPSLOCK"),
        // ("58", "LEFT_ALT"),
        // ("59", "LEFT_CTRL"),
        // ("56", "LEFT_SHIFT"),
        // ("60", "RIGHT_SHIFT"),
        // ("61", "RIGHT_ALT"),
        // ("62", "RIGHT_CTRL"),
        // ctrl ,shift
        // ("36", "RETURN"),
        // ("48", "TAB"),
        // ("48", "TAB"), and left shift
        // ("50", "`"),
        // ("50", "`"), and left shift
        ("49", "SPACE"),
        ("51", "DELETE"),
        ("53", "ESC"),
        ("122", "F1"),
        ("120", "F2"),
        ("99", "F3"),
        ("118", "F4"),
        ("96", "F5"),
        ("97", "F6"),
        ("98", "F7"),
        ("100", "F8"),
        ("101", "F9"),
        ("109", "F10"),
        ("103", "F11"),
        ("111", "F12"),
        ("105", "F13"), // PrintScr
        ("123", "LEFT"),
        ("124", "RIGHT"),
        ("125", "DOWN"),
        ("126", "UP"),
        ("114", "INS"),
        ("115", "HOME"),
        ("117", "DEL"),
        ("119", "END"),
        ("116", "PAGE_UP"),
        ("121", "PAGE_DOWN")
    ].into_iter().collect();
}

#[allow(non_camel_case_types)]
pub type id = *mut Object;

#[derive(Serialize, Deserialize)]
struct WindowData {
    width: u32,
    height: u32,
    x: i32,
    y: i32,
}


fn ignore_mouse_event_for_window(app: AppHandle) {
    let main_window = app.get_window("main").unwrap();
    let _: _ = main_window.with_webview(|webview| {
        #[cfg(target_os = "macos")]
        unsafe {
            let _: () = msg_send![webview.ns_window(), setIgnoresMouseEvents: true];
        }
    });
}

#[tauri::command]
fn greet(name: &str) -> String {
   format!("Hello, {}!", name)
}


fn safe_state(app: AppHandle) {
    if let Some(app_dir) = app.path_resolver().app_config_dir() {

        let state_path = app_dir.join(WINDOWS_STATE_PATH);
        _ = create_dir_all(&app_dir)
        .and_then(|_| File::create(state_path).map_err(Into::into))
        .and_then(|mut f| {
            unsafe {
                let state = STATE.lock().unwrap();
                let j = serde_json::to_string(&*state)?;
                f.write_all(j.as_bytes()).unwrap();
            }
            Ok(())
        })
    }
}



fn window_event(e: GlobalWindowEvent) { //窗口事件
    match e.event() {
        tauri::WindowEvent::Moved(position) => {
            unsafe {
                let mut state = STATE.lock().unwrap();
                state.x = position.x;
                state.y = position.y;
            }
            safe_state(e.window().app_handle())
        }
        tauri::WindowEvent::Resized(size) => {
            unsafe {
                let mut state = STATE.lock().unwrap();
                state.width = size.width;
                state.height = size.height;
            }
            safe_state(e.window().app_handle())
        }
        // tauri::WindowEvent::Focused(focused) => { //聚焦事件
        //     // if !focused { //不聚焦时
        //     //     e.window().hide().unwrap(); //隐藏窗口
        //     // }
        // }
        _ => {}
    }
}




fn main() {
	tauri::Builder::default()
	.setup(|app| {
        let app_cp = app.handle(); 

        let block = ConcreteBlock::new(move |event: id| {
            let characters = NSString::retain(unsafe { msg_send![&*event, characters] }).to_string();
            println!("event keydown is {}",characters);
            app_cp.emit_all("keyDown", Payload { message: characters.into(), reason: 1}).unwrap();
        });

        unsafe {
            // keydown 1024,change 4096
            msg_send![class!(NSEvent), addGlobalMonitorForEventsMatchingMask:1024
                handler:block]
        }

        let app_cp2 = app.handle();        
        let block2 = ConcreteBlock::new(move |event: id| {
            let characters = NSString::retain(unsafe { msg_send![&*event, characters] }).to_string();
            println!("event change is {}",characters);
            app_cp2.emit_all("keyDown", Payload { message: characters.into(), reason: 2}).unwrap();
        });
    
        unsafe {
            // keydown 1024,change 4096
            msg_send![class!(NSEvent), addGlobalMonitorForEventsMatchingMask:2048
                handler:block2]
        }

        // let window = app.get_window("main").unwrap();
        // window.open_devtools();
        // window.close_devtools();

        // ignore_mouse_event_for_window(app.handle());
        // app.state::<Counter>();
        // let cache: State<Counter>  =


        if let Some(app_dir) = app.path_resolver().app_config_dir() {
          let state_path = app_dir.join(WINDOWS_STATE_PATH);
          println!("state path is {:?}", state_path.clone().into_os_string().into_string());
          if state_path.exists() {

              let cache = tauri::api::file::read_string(state_path);
              if let Ok(s) = cache {
                unsafe {
                    let p: WindowData = serde_json::from_str(&s)?;
                    let mut state = STATE.lock().unwrap();
                    *state = p;

                    let x = state.x;
                    let y = state.y;
                    let main_window = app.get_window("main").unwrap();
                    main_window.set_position(tauri::PhysicalPosition::<i32>{x: x, y: y}).unwrap();

                    let width = state.width;
                    let height = state.height;
                    main_window.set_size(tauri::PhysicalSize::<u32>{width: width, height: height}).unwrap();
                }
              }

          } else {
            print!("first not have");
          }
          
        } else {
            println!("not have");
        }
    Ok(())
	})
    .on_window_event(window_event)
    .invoke_handler(tauri::generate_handler![greet])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
