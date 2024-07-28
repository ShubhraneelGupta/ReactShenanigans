import { useState, useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import {gsap} from 'gsap'
import './Ground.scss'

const Ground = () => {
    const svgRef = useRef();
    const ogPath = "M 0 200 Q 600 200 1200 200";
    const boxRef = useRef(null);
    const paraRef = useRef(null);
    const mouseRef = useRef(null);
    const [move, setMove] = useState(null);
    const [scale, setScale] = useState(1);
    const [opacity, setOpacity] = useState(1);
    const [maskPos, setMaskPos] = useState("200px 400px")
    const [maskSize, setMaskSize] = useState("0px 0px")
    useEffect(() => {
        const coords = (e) => {
            gsap.to(mouseRef.current, {
                x: e.clientX,
                y: e.clientY,
                transform: `translate(-50%, -50%) scale(${scale})`,
                opacity: `${opacity}`,
                duration: 0.9,
                ease:"back.out(1.7)"
            });
        };

        const handleEnter = () => {
            setOpacity(0)
            setScale(25)
            setMaskSize("500px 500px")
        };

        const handleLeave = () => {
            setScale(1);
            setOpacity(1);
            setMaskSize("0")
        }

        const handleMask = (e) => {
            setMaskPos(`${e.x-250}px ${e.y-250}px`)
        }
        window.addEventListener('mousemove', coords);
        paraRef.current.addEventListener('mouseenter', handleEnter)
        paraRef.current.addEventListener('mouseleave', handleLeave)
        paraRef.current.addEventListener('mousemove', handleMask)



        return () => {
            window.removeEventListener('mousemove', coords);
            paraRef.current.removeEventListener('mouseenter', handleEnter);
            paraRef.current.removeEventListener('mouseleave', handleLeave)
            paraRef.current.removeEventListener('mousemove', handleMask)
        };
    }, [scale, opacity]);
    
    useGSAP(() => {
        gsap.to(boxRef.current, {
            x: move
        });
    }, [move]);

    const handleClick = () => {
        const random = gsap.utils.random(-500, 500, 100);
        setMove(random);
    };

    return (
        <>
            <div ref={mouseRef} className="mouse"/>
            <div className="masking">
                <div id="page1">
                    <p ref={paraRef}>
                        I'm a <span>selectively skilled</span> product designer with strong focus 
                        on producing high quality & impactful digital experience.
                    </p>
                </div>
                <div id="page2"
                style={{
                    maskPosition:maskPos,
                    maskSize:maskSize
                }}>
                    <p>
                        A visual designer - with skills that haven't been replaced by A.I <span>(yet)</span> - 
                        making good shit only if the paycheck is equally good.
                    </p>
                </div>

                <div className="page3">

                </div>
            </div>
            <div className='wrapper'>
                <div 
                    className="svg-container"
                    onMouseMove={(e) => {
                        const { x, y } = svgRef.current.getBoundingClientRect();
                        gsap.to('.path', {
                            attr: { d: `M 0 200 Q ${e.clientX - x} ${e.clientY - y} 1200 200` }
                        });
                    }}
                    onMouseLeave={() => {
                        gsap.to('.path', {
                            attr: { d: ogPath },
                            duration: 2.5,
                            ease: "elastic.out(1,0.1)",
                        });
                    }}
                >
                    <svg ref={svgRef} width="1200" height="400" xmlns="http://www.w3.org/2000/svg">
                        <path className='path' d="M 0 200 Q 600 200 1200 200"
                            stroke="white" strokeWidth="3px" fill="transparent"/>
                    </svg>
                </div>

                <div className="box" ref={boxRef}/>
                
                <button type="button" onClick={handleClick}>
                    Move
                </button>
            </div>
            
        </>
    );
};

export default Ground;
