'use client'
import style from "./style.module.css"
import Image from "next/image";
import React, { useState } from "react";
import useReveal from "@/hooks/useReveal";


const Card = ({title, description, img, subtitle}) => {
    const [aboutRef, animation] = useReveal()
    const [flipped, setFlipped] = useState(false)

    const toggleOnTouch = () => {
        if (window.matchMedia("(hover: none)").matches) {
            setFlipped((open) => !open)
        }
    }

    const onKeyDown = (event) => {
        if (event.key !== "Enter" && event.key !== " ") return
        event.preventDefault()
        setFlipped((open) => !open)
    }

    return(
        <div
            className={`${style.card} ${animation} ${flipped ? style.flipped : ""}`}
            ref={aboutRef}
            role="button"
            aria-pressed={flipped}
            aria-label={title}
            tabIndex={0}
            onClick={toggleOnTouch}
            onKeyDown={onKeyDown}
        >
                <h2>{title}</h2>
            <div className={`${style.face} ${style.front}`} >
                <Image src={img} fill sizes="(max-width: 500px) 340px, 465px" alt={title} style={{ objectFit: "cover" }}/>
            </div>
            <div className={`${style.face} ${style.back}`}>
                <p><strong>{subtitle}</strong></p>
                <p className="text">{description}</p>
            </div>
        </div>
    )
}

export default Card;
