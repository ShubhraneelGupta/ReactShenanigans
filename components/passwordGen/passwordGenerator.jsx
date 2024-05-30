import { useCallback } from "react";
import { useState } from "react";

import './passwordGenerator.scss'

const PasswordGenerator = () => {

    let [length, setLength] = useState(15)
    let [charActive, setCharActive] = useState(false)
    let [numberActive, setNumberActive] = useState(false)

    
    const password = () => {
        let passwd = ''
        let pElements = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const numbers = '0123456789'
        const characters = "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
        if(charActive) pElements += characters;
        if(numberActive) pElements += numbers;
        
        for(let i = 0; i < length; i++){
            passwd += pElements[Math.floor(Math.random()*pElements.length)]
        }
        return passwd
    }


    const GeneratePasswd = useCallback(password, [length, charActive, numberActive])


    return <>
        <div className="wrapper"> 
            <div className="passwdBox">

                <div className="passwd"
                onClick={(e) => {
                    navigator.clipboard.writeText(e.target.innerText)
                    alert(`Password Copied : ${e.target.innerText}`)
                    }}>
                    <h1><GeneratePasswd /></h1>
                </div>

                <div className="lengthBox">
                    <h1>{length}</h1>
                </div>

            </div>
            <div className="properties">

                <input type="range" min="3" max="15" 
                style={{
                    accentColor:"orange",
                    cursor: "pointer"
                }}
                onInput={(e) => setLength(e.target.value)}/>

                <div>
                    <input type="checkbox" className="checkBox"
                    onInput={() => {setCharActive(!charActive)}}/> Characters
                </div>

                <div>
                    <input type="checkbox" className="checkBox"
                    onInput={() => {setNumberActive(!numberActive)}}/> Numbers
                </div>

            </div>
            
        </div>
    </>
}

export default PasswordGenerator;