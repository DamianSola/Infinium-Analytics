import Card from "./Card"
import style from "./style.module.css";
import c1 from "./card1.png";
import c2 from "./card2.png";
import c3 from "./card3.png";
import c4 from "./card4.png";

const About = () => {

    const cards = [{name: "Business Intelligence", img:c1, description:"Integramos datos de distintas fuentes en una solución única. Procesamos y transformamos tus datos para obtener conclusiones a partir de ellos"},
    {name: "Machine Learning", img:c2, description:"Integramos datos de distintas fuentes en una solución única. Procesamos y transformamos tus datos para obtener conclusiones a partir de ellos"},
    {name: "Market Insights", img:c3, description:"Integramos datos de distintas fuentes en una solución única. Procesamos y transformamos tus datos para obtener conclusiones a partir de ellos"},
    {name: "Desarrollo Web", img:c4, description:"Integramos datos de distintas fuentes en una solución única. Procesamos y transformamos tus datos para obtener conclusiones a partir de ellos"}]

  
    return (
        <div id="about" className={style.about}>
            <div>
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
                    description={e.description}
                    />
                })}

            </div>
                </div>
        </div>
    )
}

export default About