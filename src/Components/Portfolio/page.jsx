import Carousel from "./Carousel"
import style from "./style.module.css"



const Portfolio = () => {

    return(
        <div id="portfolio" className={style.portfolio}>
            <h1 className={style.title}>Portafolio</h1>
            <div className={style.docs}>
                <Carousel/>
            </div>
        </div>
    )
}

export default Portfolio