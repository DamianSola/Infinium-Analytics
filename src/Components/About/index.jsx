'use client'
import Card from "./Card";
import style from "./style.module.css";
import c1 from "./Picture_01.png";
import c2 from "./Picture_02.png";
import c3 from "./Picture_03.png";
import c4 from "./carta4.png";
import info from "./CardData.json";
import useReveal from "@/hooks/useReveal";

const images = [c1, c2, c3, c4]

const About = () => {
    const cards = info
        .map((item, i) => ({
            name: item.name,
            img: images[i],
            subtitle: item.subtitle,
            description: item.description,
        }))
        .filter((card) => card.img)

    const [aboutRef, animation] = useReveal()

    return (
        <div id="about" className={style.about}>
            <div className={animation} ref={aboutRef}>
            <h1 className={style.title}>Nosotros</h1>
            <div className={style.description}>
                <p>Te ayudamos a explotar el poder de tus datos: 
                    toma decisiones basadas en datos para optimizar procesos, identificar tendencias, reducir costos y 
                    aumentar ganancias. 
                    Nuestros principales servicios son:</p>
            </div>
            <div className={style.cards}>
                {cards.map((e) => {
                    return <Card
                    key={e.name}
                    title={e.name}
                    img={e.img}
                    subtitle={e.subtitle}
                    description={e.description}
                    />
                })}

            </div>
                </div>
        </div>
    )
}

export default About
