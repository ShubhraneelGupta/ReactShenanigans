import {React, useRef} from 'react'

const SVG = ({svgref}) => {
    return <svg
    ref={svgref}
    version="1.1"
    baseProfile="full"
    width="300"
    height="200"
    xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="rgb(255, 255, 255)"/>
    <circle cx="150" cy="100" r="90" fill="rgb(255,0,0)" />
    </svg>
}



const Ground = () => {
    const ref = useRef(0)
    return <>
        <SVG svgref={ref}/>
        <button type="button"
        onClick={() => console.log(ref.current.innerHTML)}
        >Click</button>
    </>

}


export default Ground