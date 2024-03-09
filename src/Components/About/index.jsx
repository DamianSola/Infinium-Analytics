'use client'
import Card from "./Card";
import style from "./style.module.css";
import c1 from "./picture_01.png";
import c2 from "./picture_02.png";
import c3 from "./picture_03.png";
import c4 from "./carta4.png";
import info from "./CardData.json";
import React,{useState, useRef, useEffect} from "react";

const About = () => {

    const cards = [{name: info[0].name, img:c1,subtitle: info[0].subtitle, description: info[0].description}, 
    {name:  info[1].name, img:c2, subtitle: info[1].subtitle, description:info[1].description},
    {name:  info[2].name, img:c3, subtitle: info[2].subtitle, description:info[2].description},
    {name:  info[3].name, img:c4, subtitle: info[3].subtitle, description:info[3].description}]


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


  
    return (
        <div id="about" className={style.about}>
            <div className={animation}  ref={aboutRef}>
            <h1 className={style.title}>Nosotros</h1>
            <div className={style.description}>
                <p>Somos una empresa que brinda soluciones de Business Intelligence y Data Analytics a clientes de todas las industrias. Recopilamos, procesamos y analizamos grandes volúmenes de datos utilizando técnicas.</p>
            </div>
            <div className={style.cards}>
                {cards && cards.map((e,i) => {
                    return <Card
                    key={i}
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