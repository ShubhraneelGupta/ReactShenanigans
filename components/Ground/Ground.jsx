import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import {gsap} from 'gsap'
import './Ground.scss'

const Ground = () => {
    const boxRef = useRef(null);
    const [move, setMove] = useState(null)
    useGSAP(() => {
        gsap.to(boxRef.current, {
            x:move
        })
    }, [move])

    const handleClick = () => {
        const random = gsap.utils.random(-500, 500, 100);
        setMove(random)
    }


    return (
        <div className='wrapper' >
            <div className="box" ref={boxRef} />
            <button type="button"
            onClick={() => handleClick()}>
                Move
            </button>
        </div>
    )
};

export default Ground;
