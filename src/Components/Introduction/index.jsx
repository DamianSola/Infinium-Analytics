import Image from "next/image";
import style from "./style.module.css"
// import dash from "src/Components/Introduction/picture2.png"
import dash from '../../Components/Introduction/picture2.png';



const Intro = () => {
    return(
        <div className={style.intro}>

            <section className={style.title}>
                <h1 className="text-center">Empowered by data</h1>
                <h3> Transformá tus datos en ventaja competitiva</h3>
            </section>
            <section className={style.image}>
                <Image src={dash} width='500' className={style.img} alt="dash-image"/>
                {/* <img src="https://static.wixstatic.com/media/b5309c_8a231211b4c94ae8998abab42ddb744d~mv2.gif" width='550'/> */}
            </section>
        </div>
    )
}

export default Intro;