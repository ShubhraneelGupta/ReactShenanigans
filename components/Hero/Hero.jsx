import './Hero.scss'
import {useState, useEffect, useRef} from 'react'
const Hero = () => {
    const [person, setPerson] = useState('neel')
    const [personInfo, setPersonInfo] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const fetchName = (name) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                setPerson(name)
                resolve(`This is ${person}`)
            }, 3000)
        })
    }

    useEffect(()=>{
        setIsLoading(true)
        fetchName(person).then(result => {
            setPersonInfo(result)
            setIsLoading(false)
        })
    }, [person])
    return <>
        <select value={person} id=""
        onChange={(e)=>setPerson(e.target.value)}>
            <option value="Neel">Neel</option>
            <option value="Ushna">Ushna</option>
        </select>
        <h1>{isLoading ? 'loading...' : personInfo}</h1>
    </>
}

export default Hero;