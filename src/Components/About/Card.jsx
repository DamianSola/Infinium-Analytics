'use client'
import style from "./style.module.css"
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";


const Card = ({title, description, img}) => {
 
    
    const  [animation, setAnimation] = useState("ocultar")
    const aboutRef = useRef()


    useEffect(() => {
        const handleScroll = () => {
            const div = aboutRef.current;

            const {y} = div.getBoundingClientRect();

            if(y  > -280 && y < 600) setAnimation('mostrar')

        }

        window.addEventListener( "scroll", handleScroll);
    
        return () => window.removeEventListener( "scroll", handleScroll)


    },[])

    return(
        <div className={`${style.card} ${animation}`} ref={aboutRef}>
                <h2>{title}</h2>
            <div className={`${style.face} ${style.front}`} >
                <Image src={img} width='auto' alt="image-show"/>
            </div>
            <div className={`${style.face} ${style.back}`}>
                <p className="text">{description}</p>
            </div>
        </div>
    )
}

export default Card;