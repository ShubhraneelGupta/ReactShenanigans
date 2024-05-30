import {useState, useEffect} from 'react'

const Ground = () => {
    let [itemList, setItemList] = useState([])
    let [input, setInput] = useState("")
    return <div className='wrapper' style={{maxWidth:"fitcontent"}}>
        <div className="inputWrapper">
            
            <input type="text" placeholder='add the next entry' 
            onChange={e => setInput(e.target.value)}/>
            <button type="button"
            onClick={() => {
                const tempList = [...itemList, input]
                setItemList(tempList)
                setInput("")
            }}
            >(+)</button>
        </div>
        <div className="items" >
            {itemList.map((item, i) => 
                    <div className='item' 
                    key={i} >
                    <h3>{item}</h3>
                    <button type="button"
                    onClick={(e) => {
                        const tempList = itemList.slice(0,i).concat(itemList.slice(i+1,))
                        setItemList(tempList)
                    }}
                    >(-)</button>
                    </div>
            )}
        </div>
    </div>

}




export default Ground;