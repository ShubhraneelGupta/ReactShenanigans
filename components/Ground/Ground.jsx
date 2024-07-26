import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import {gsap} from 'gsap'
import './Ground.scss'

const Ground = () => {
    const boxRef = useRef(null);
    const mouseRef = useRef(null);
    const [move, setMove] = useState(null)
    const [mouseCoords, setMouseCoords] = useState({x:0, y:0});
    
    useEffect(() => {
        const coords = (e) => {
            setMouseCoords({x:e.x, y:e.y});
        }
        window.addEventListener('mousemove', coords)
        
        return (() => {
            window.removeEventListener('mousemove', coords)
        })
    }, [mouseCoords])
    
    useGSAP(() => {
        gsap.to(mouseRef.current, {
            x: mouseCoords.x - 25,
            y: mouseCoords.y - 25,
        })
    }, [mouseCoords])

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
        <>
            <div ref={mouseRef} className="mouse"/>
            <div className='wrapper' >
                
                <div className="box" ref={boxRef} />
                <button type="button"
                onClick={() => handleClick()}>
                    Move
                </button>
            </div>
        </>
    )
};

export default Ground;