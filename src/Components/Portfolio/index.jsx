'use client'
import Carousel from "./Carousel"
import style from "./style.module.css"
import React, { useEffect, useRef, useState } from "react";



const Portfolio = () => {
    
    const  [animation, setAnimation] = useState("ocultar")
    const aboutRef = useRef()


    useEffect(() => {
        const handleScroll = () => {
            const div = aboutRef.current;

            const {y} = div.getBoundingClientRect();

            if(y  > -280 && y < 550) setAnimation('mostrar')

        }

        window.addEventListener( "scroll", handleScroll);
    
        return () => window.removeEventListener( "scroll", handleScroll)


    },[])

    return(
        <div id="portfolio" className={style.portfolio}>
            <h1 className={`${style.title}  ${animation}`}  ref={aboutRef}>Portafolio</h1>
            <div className={style.docs}>
                <Carousel/>
            </div>
        </div>
    )
}

export default Portfolio