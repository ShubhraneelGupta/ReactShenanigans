import {useReducer} from 'react'

const Counter = () => {
    const reducer = (state, action) => {
        switch (action) {
            case "add":
                return state+1;

            case "subtract":
                return state-1;

            default:
                return 10
        }
    }

    let [state, dispatch] = useReducer(reducer, 10)
    return <div 
        style={{
            display:"flex",
            alignItems:"center",
            flexDirection:"column",
            width:"fit-content",
            marginLeft:"auto",
            marginRight:"auto",
            }}>
        <h1 style={{textAlign:"center" ,border:".1rem black solid", width:"100%"}}>{state}</h1>
        <div className="operations" style={{display:"flex", padding:"1rem"}}>
            <button type="button" style={{padding:"1rem", minWidth:"4rem"}}
            onClick={() => dispatch("add")}
            ><h1>+</h1></button>
            <button type="button" style={{marginLeft:"1rem", minWidth:"4rem"}}
            onClick={() => dispatch("subtract")}
            ><h1>-</h1></button>
        </div>
        <button type="button" style={{minWidth:"4rem"}}
        onClick={() => dispatch("reset")}
        >reset</button>
    </div>

}


export default Counter