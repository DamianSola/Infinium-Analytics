import style from "./style.module.css"
// import logo from "./../logopurpura2.png"
import logo from "./../whitebordo.png"
import Image from "next/image";
import { FaLinkedin} from 'react-icons/fa';


const Footer = () => {

    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <Image src={logo} className={style.image} alt="infinium" width="200"/>
                <section>
                <p>Encontranos en linkedin</p>
                <a href="https://www.linkedin.com/in/damiansola" target="_blank" className={style.navbarIcon}  >
                    <FaLinkedin />
                </a>
                </section>
            </div>
            <div className={style.bottom}>
                <p>copyrigth @ 2023 Infinium, Analiticts </p>
            </div>
        </footer>
    )
}

export default Footer;