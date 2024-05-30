import {useState} from 'react'

const Timer = function() {
    let [time, setTime] = useState(0)
    let [run, startrun] = useState(false)
    let [input, setInput] = useState(0)
    
    if(run) setTimeout(() => {
        if(time > 0) setTime(time-1)
    }, 1000)

    return <>
        <h1>{time}</h1>
        <input type="text" placeholder='enter time...' 
        onChange={e => setInput(e.target.value)}
        />
        <button type="button"
        onClick={() => {
            if(!run) {
                startrun(true)
                setTime(input)
        }}}
        >start</button>
        <button type="button"
        onClick={() => startrun(false)}
        >stop</button>
    </>

}

export default Timer