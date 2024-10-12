import {useState} from 'react'
import data from './AccordianData'
import './Accordian.scss'


const AccordianItem = ({title, content, isOpen, onClick}) => {
    return <div className="item">
        <h1>{title}<button
        onClick={onClick}
        >{isOpen ? "Less..." : "More..."}</button></h1>
        <p>{isOpen ? content : null}</p>
    </div>
}

const Accordian = () => {
    const [openIndex, setOpenIndex] = useState(null)
    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }
    return <div className="Accordian-wrapper">
        {data.map((val, id) => {
            return <li key={id}><AccordianItem 
            title={val.title}
            content={val.content}
            isOpen={openIndex === id}
            onClick={() => handleClick(id)}
            /></li>
        })}
    </div>
}

export default Accordian