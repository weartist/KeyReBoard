// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import { invoke } from "@tauri-apps/api/tauri";
// import "./App.css";
// import Board from "./Board";
import FArea from "./FArea";
// import "./css/main.css";
// import "./css/FArea.css";
import { useEffect } from "react";
// import {useEffect} from 'react';
import { setup, createMask } from "./sub/main";

const App = () => {
  useEffect(() => {
    setup()
  }, [])
  
  return (
    <>
    <div data-tauri-drag-region className="mask" >
      <FArea data-tauri-drag-region />
      <h3 className="titles">waiting....</h3>
    </div>
    </>
      
  )
  // const [greetMsg, setGreetMsg] = useState("");
  // const [name, setName] = useState("");

  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   setGreetMsg(await invoke("greet", { name }));
  // }
}





// return (
//   <div data-tauri-drag-region className="container">
//     {/* <h1>Welcome to Board!</h1> */}

//     {/* <div className="row">
//       <a href="https://vitejs.dev" target="_blank">
//         <img src="/vite.svg" className="logo vite" alt="Vite logo" />
//       </a>
//       <a href="https://tauri.app" target="_blank">
//         <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
//       </a>
//       <a href="https://reactjs.org" target="_blank">
//         <img src={reactLogo} className="logo react" alt="React logo" />
//       </a>
//     </div> */}
//     {/* <Board data-tauri-drag-region /> */}
//     <FArea />

    
//   </div>
// );

export default App;
