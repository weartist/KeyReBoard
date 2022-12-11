#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use block::ConcreteBlock;
// use objc_id::Id;
use cacao::foundation::{NSString};
use objc::{class, msg_send, sel, sel_impl, runtime::Object};
use tauri::{Manager, EventHandler, AppHandle};

// the payload type must implement `Serialize` and `Clone`.
#[derive(Clone, serde::Serialize)]
struct Payload {
  message: String,
}


#[allow(non_camel_case_types)]
pub type id = *mut Object;


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


fn main() {
	tauri::Builder::default()
	.setup(|app| {

        let app_cp = app.handle();        
        let block = ConcreteBlock::new(move |event: id| {
            let characters = NSString::retain(unsafe { msg_send![&*event, characters] }).to_string();
            app_cp.emit_all("keyDown", Payload { message: characters.into()}).unwrap();
        });
    
        unsafe {
            // keydown 1024,change 4096
            msg_send![class!(NSEvent), addGlobalMonitorForEventsMatchingMask:1024
                handler:block]
        }

        ignore_mouse_event_for_window(app.handle());
		Ok(())
	})
    .invoke_handler(tauri::generate_handler![greet])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
