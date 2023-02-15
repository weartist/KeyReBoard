import "./css/FArea.css"
import {Button, Sty} from "./Button"

//TODO@HANS: capslock,shift,
export default function FArea() {

    // const fir = ["Esc", "!"];
    return (
        <div className="board">
            {/* <div className="Farea" data-tauri-drag-region >
                <button id="F1" >韩</button>
                <button id="F2" >hanssss</button>
            </div> */}
            {/* <div className="board-line" data-tauri-drag-region >
                <Button first={["Esc"]} firstStyle={Sty.leftDown} />
                <Button first={["≤", "<"]} firstStyle={Sty.between} second={[","]} secondStyle={Sty.left} />
                <Button first={["...", "^"]} firstStyle={Sty.between} second={["1"]} secondStyle={Sty.center} />
                <Button first={["|"]} firstStyle={Sty.right} second={["«","\\"]} secondStyle={Sty.between} />
                <Button first={["!"]} firstStyle={Sty.center} second={["1"]} secondStyle={Sty.center} />
                <Button first={["^"]} firstStyle={Sty.rightTop} second={["control"]} secondStyle={Sty.leftDown} />
                <Button first={["^"]} firstStyle={Sty.left} second={["control"]} secondStyle={Sty.left} />
                <Button first={["≥",">"]} firstStyle={Sty.between} second={["。","."]} secondStyle={Sty.between} />


            </div> */}

            <div className="board-line" data-tauri-drag-region >
                <Button first={["esc"]} firstStyle={Sty.leftDown} classStr={["second-width"]} keycode={53} />
                <Button first={[" "]} firstStyle={Sty.center} second={["F1"]} secondStyle={Sty.center} keycode={122} />
                <Button first={[" "]} firstStyle={Sty.center} second={["F2"]} secondStyle={Sty.center} keycode={120}/>
                <Button first={[" "]} firstStyle={Sty.center} second={["F3"]} secondStyle={Sty.center} keycode={99}/>
                <Button first={[" "]} firstStyle={Sty.center} second={["F4"]} secondStyle={Sty.center} keycode={118}/>
                <Button first={[" "]} firstStyle={Sty.center} second={["F5"]} secondStyle={Sty.center} keycode={96}/>
                <Button first={[" "]} firstStyle={Sty.center} second={["F6"]} secondStyle={Sty.center} keycode={97}/>
                <Button first={[" "]} firstStyle={Sty.center} second={["F7"]} secondStyle={Sty.center} keycode={98}/>
                <Button first={[" "]} firstStyle={Sty.center} second={["F8"]} secondStyle={Sty.center} keycode={100}/>
                <Button first={[" "]} firstStyle={Sty.center} second={["F9"]} secondStyle={Sty.center} keycode={101}/>
                <Button first={[" "]} firstStyle={Sty.center} second={["F10"]} secondStyle={Sty.center} keycode={109}/>
                <Button first={[" "]} firstStyle={Sty.center} second={["F11"]} secondStyle={Sty.center} keycode={103}/>
                <Button first={[" "]} firstStyle={Sty.center} second={["F12"]} secondStyle={Sty.center} keycode={111}/>
                <Button first={[" "]} firstStyle={Sty.center} second={[" "]} secondStyle={Sty.center} />
            </div>

            <div className="board-line" data-tauri-drag-region >
                <Button first={["~"]} firstStyle={Sty.left} second={[".","、"]} secondStyle={Sty.between} keycode={50}/>
                <Button first={["!"]} firstStyle={Sty.center} second={["1"]} secondStyle={Sty.center} keycode={18}/>
                <Button first={["@"]} firstStyle={Sty.center} second={["2"]} secondStyle={Sty.center} keycode={19}/>
                <Button first={["#"]} firstStyle={Sty.center} second={["3"]} secondStyle={Sty.center} keycode={20}/>
                <Button first={["¥", "$"]} firstStyle={Sty.between} second={["4"]} secondStyle={Sty.center} keycode={21}/>
                <Button first={["%"]} firstStyle={Sty.center} second={["5"]} secondStyle={Sty.center} keycode={23}/>
                <Button first={["…","^"]} firstStyle={Sty.center} second={["6"]} secondStyle={Sty.center} keycode={22}/>
                <Button first={["&"]} firstStyle={Sty.center} second={["7"]} secondStyle={Sty.center} keycode={26}/>
                <Button first={["*"]} firstStyle={Sty.center} second={["8"]} secondStyle={Sty.center} keycode={28}/>
                <Button first={["("]} firstStyle={Sty.center} second={["9"]} secondStyle={Sty.center} keycode={25}/>
                <Button first={[")"]} firstStyle={Sty.center} second={["0"]} secondStyle={Sty.center} keycode={29}/>
                <Button first={["_"]} firstStyle={Sty.center} second={["-"]} secondStyle={Sty.center} keycode={27}/>
                <Button first={["+"]} firstStyle={Sty.center} second={["="]} secondStyle={Sty.center} keycode={24}/>
                <Button first={["⌫"]} firstStyle={Sty.rightDown} classStr={["second-width"]} keycode={51}/>
            </div>

            <div className="board-line" data-tauri-drag-region >
                <Button first={["⇥"]} firstStyle={Sty.leftDown} classStr={["second-width"]} keycode={48}/>
                <Button first={["Q"]} firstStyle={Sty.center} keycode={12}/>
                <Button first={["W"]} firstStyle={Sty.center} keycode={13}/>
                <Button first={["E"]} firstStyle={Sty.center} keycode={14}/>
                <Button first={["R"]} firstStyle={Sty.center} keycode={15}/>
                <Button first={["T"]} firstStyle={Sty.center} keycode={17}/>
                <Button first={["Y"]} firstStyle={Sty.center} keycode={16}/>
                <Button first={["U"]} firstStyle={Sty.center} keycode={32}/>
                <Button first={["I"]} firstStyle={Sty.center} keycode={34}/>
                <Button first={["O"]} firstStyle={Sty.center} keycode={31}/>
                <Button first={["P"]} firstStyle={Sty.center} keycode={35}/>
                <Button first={["{"]} firstStyle={Sty.center} second={["["]} secondStyle={Sty.center} keycode={33}/>
                <Button first={["}"]} firstStyle={Sty.center} second={["]"]} secondStyle={Sty.center} keycode={30}/>
                <Button first={["|"]} firstStyle={Sty.center} second={["、","\\"]} secondStyle={Sty.between} keycode={42}/>
            </div>


            <div className="board-line" data-tauri-drag-region >
                <Button first={["·"]} firstStyle={Sty.leftTop} second={["caps lock"]} secondStyle={Sty.leftDown} classStr={["third-width"]} keycode={57}/>
                <Button first={["A"]} firstStyle={Sty.center} keycode={0}/>
                <Button first={["S"]} firstStyle={Sty.center} keycode={1}/>
                <Button first={["D"]} firstStyle={Sty.center} keycode={2}/>
                <Button first={["F"]} firstStyle={Sty.center} keycode={3}/>
                <Button first={["G"]} firstStyle={Sty.center} keycode={5}/>
                <Button first={["H"]} firstStyle={Sty.center} keycode={4}/>
                <Button first={["J"]} firstStyle={Sty.center} keycode={38}/>
                <Button first={["K"]} firstStyle={Sty.center} keycode={40}/>
                <Button first={["L"]} firstStyle={Sty.center} keycode={37}/>
                <Button first={[":"]} firstStyle={Sty.center} second={[";"]} secondStyle={Sty.center} keycode={41}/>
                <Button first={["\""]} firstStyle={Sty.center} second={["'"]} secondStyle={Sty.center} keycode={39}/>
                <Button first={["⏎"]} firstStyle={Sty.rightDown} classStr={["third-width"]} keycode={36}/>
            </div>

            <div className="board-line" data-tauri-drag-region >
                <Button first={["⇧"]} firstStyle={Sty.leftDown} classStr={["fourth-width"]} keycode={56}/>
                <Button first={["Z"]} firstStyle={Sty.center} keycode={6}/>
                <Button first={["X"]} firstStyle={Sty.center} keycode={7}/>
                <Button first={["C"]} firstStyle={Sty.center} keycode={8}/>
                <Button first={["V"]} firstStyle={Sty.center} keycode={9}/>
                <Button first={["B"]} firstStyle={Sty.center} keycode={11}/>
                <Button first={["N"]} firstStyle={Sty.center} keycode={45}/>
                <Button first={["M"]} firstStyle={Sty.center} keycode={46}/>
                <Button first={["<"]} firstStyle={Sty.center} second={[","]} secondStyle={Sty.center} keycode={43}/>
                <Button first={[">"]} firstStyle={Sty.center} second={["."]} secondStyle={Sty.center} keycode={47}/>
                <Button first={["?"]} firstStyle={Sty.center} second={["/"]} secondStyle={Sty.center} keycode={44}/>
                <Button first={["⇧"]} firstStyle={Sty.rightDown} classStr={["fourth-width"]} keycode={60}/>
            </div>

            <div className="board-line" data-tauri-drag-region >
                <Button first={["fn"]} firstStyle={Sty.rightTop} />
                <Button first={["⌃"]} firstStyle={Sty.rightTop} second={["control"]} secondStyle={Sty.leftDown} classStr={["second-size"]} keycode={62}/>
                <Button first={["⌥"]} firstStyle={Sty.rightTop} second={["option"]} secondStyle={Sty.rightDown} classStr={["second-size"]} keycode={58}/>
                <Button first={["⌘"]} firstStyle={Sty.rightTop} second={["command"]} secondStyle={Sty.rightDown} classStr={["cmd-width", "second-size"]} keycode={55} />
                <Button first={[""]} firstStyle={Sty.center} classStr={["space-width"]} keycode={49}/>
                <Button first={["⌘"]} firstStyle={Sty.leftTop} second={["command"]} secondStyle={Sty.leftDown} classStr={["cmd-width", "second-size"]} keycode={54}/>
                <Button first={["⌥"]} firstStyle={Sty.leftTop} second={["option"]} secondStyle={Sty.leftTop} classStr={["second-size"]} keycode={61}/>
                <Button first={["←"]} firstStyle={Sty.center} classStr={["arrow-height"]} keycode={123}/>
                {/* <Button first={["↑"]} firstStyle={Sty.center}  second={["↓"]} secondStyle={Sty.center} needLine={true} keycode={126}/> */}
                <div>
                <Button first={["↑"]} firstStyle={Sty.center} classStr={["arrow-height"]} keycode={126}/>
                <Button first={["↓"]} firstStyle={Sty.center} classStr={["arrow-height"]} keycode={125}/>
                </div>
                <Button first={["→"]} firstStyle={Sty.center} classStr={["arrow-height"]} keycode={124}/>
            </div>

            {/* <div data-tauri-drag-region>
            <Tes data-tauri-drag-region/>
            </div> */}
        </div>
        
    )
}

// function Tes() {
//     const counts = [];
//     for (let index = 0; index < 100; index++) {
//         const element = <div className="key">{index}</div>
//         counts.push(element);
//     }

//     return (
//         <div className="keyboard">
//         {counts}
//         </div>
//     );
// }


// function Boars() {
//     return (

//         <div className="keyboard">
//             <div className="key esc">esc</div>
//             <div className="key f">F1</div>
//             <div className="key f">F2</div>
//             <div className="key f">F3</div>
//             <div className="key f">F4</div>
//             <div className="key f">F5</div>
//             <div className="key f">F6</div>
//             <div className="key f">F7</div>
//             <div className="key f">F8</div>
//             <div className="key f">F9</div>
//             <div className="key f">F10</div>
//             <div className="key f">F11      </div>
//             <div className="key f">F12</div>
//             <div className="key power">⏏︎</div>
//             <div className="key">~<br />`</div>
//             <div className="key punctuation">!<br />1</div>
//             <div className="key punctuation">@<br />2</div>
//             <div className="key punctuation">#<br />3</div>
//             <div className="key punctuation">$<br />4</div>
//             <div className="key punctuation">%<br />5</div>
//             <div className="key punctuation">^<br />6</div>
//             <div className="key punctuation">&<br />7</div>
//             <div className="key punctuation">*<br />8</div>
//             <div className="key punctuation">(<br />9</div>
//             <div className="key punctuation">)<br />0</div>
//             <div className="key punctuation">—<br />–</div>
//             <div className="key punctuation">+<br />=</div>
//             <div className="key delete">delete</div>
//             <div className="key tab">tab</div>
//             <div className="key">Q</div>
//             <div className="key">W</div>
//             <div className="key">E</div>
//             <div className="key">R</div>
//             <div className="key">T</div>
//             <div className="key">Y</div>
//             <div className="key">U</div>
//             <div className="key">I</div>
//             <div className="key">O</div>
//             <div className="key">P</div>
//             {/* <div className="key punctuation">{<br/>[</div> */}
//             {/* <div className="key punctuation">}<br/>]</div> */}
//             <div className="key punctuation">☺<br/>☺</div>
//             <div className="key punctuation">☺<br/>☺</div>
//             <div className="key punctuation">|<br />\</div>
//             <div className="key caps">caps lock</div>
//             <div className="key">A</div>
//             <div className="key">S</div>
//             <div className="key">D</div>
//             <div className="key">F</div>
//             <div className="key">G</div>
//             <div className="key">H</div>
//             <div className="key">J</div>
//             <div className="key">K</div>
//             <div className="key">L</div>
//             <div className="key punctuation punctuation">:<br />;</div>
//             <div className="key punctuation punctuation">"<br />'</div>
//             <div className="key return">return</div>
//             <div className="key shiftLeft">shift</div>
//             <div className="key">Z</div>
//             <div className="key">X</div>
//             <div className="key">C</div>
//             <div className="key">V</div>
//             <div className="key">B</div>
//             <div className="key">N</div>
//             <div className="key">M</div>
//             {/* <div className="key punctuation"><<br/>,</div> */}
//             {/* <div className="key punctuation">><br/>.</div> */}
//             <div className="key punctuation">☺<br/>☺</div>
//             <div className="key punctuation">☺<br/>☺</div>
//             <div className="key punctuation">?<br />/</div>
//             <div className="key shiftRight">shift</div>
//             <div className="key fn">fn</div>
//             <div className="key control">control</div>
//             <div className="key optionLeft">option</div>
//             <div className="key commandLeft">command</div>
//             <div className="key space"></div>
//             <div className="key commandRight">command</div>
//             <div className="key optionRight">option</div>
//             <div className="key left">◀︎</div>
//             <div className="key up">▲</div>
//             <div className="key down">▼</div>
//             <div className="key right">▶</div>
//         </div>
//     )
// }