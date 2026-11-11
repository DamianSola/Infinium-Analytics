import Image from "next/image";
import style from "./style.module.css"
import dash from './Picture2.png';


const Intro = () => {
    return(
        <div id="inicio" className={style.intro}>

            <section className={style.title}>
                <h1 className="text-center">Empowered by data</h1>
                <h3>Transformá tus datos en una ventaja competitiva</h3>
            </section>
            <section className={style.image}>
                <Image src={dash} width="600" className={style.img} alt="dash-image" priority/>
            </section>
        </div>
    )
}

export default Intro;