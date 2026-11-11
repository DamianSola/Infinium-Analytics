'use client'
import Carousel from "./Carousel"
import style from "./style.module.css"
import useReveal from "@/hooks/useReveal";

const Portfolio = () => {
    const [aboutRef, animation] = useReveal()

    return(
        <div id="portfolio" className={style.portfolio}>
            <h1 className={`${style.title}  ${animation}`} ref={aboutRef}>Portafolio</h1>
            <div className={style.docs}>
                <Carousel/>
            </div>
        </div>
    )
}

export default Portfolio
