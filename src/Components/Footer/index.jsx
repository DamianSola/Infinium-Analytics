
import style from "./style.module.css"
// import logo from "./../logopurpura2.png"
import logo from "./../logo2.png"
import Image from "next/image";
import { FaLinkedin} from 'react-icons/fa';


const Footer = () => {


    return (
        <footer className={style.footer}>
            <div className={style.container} >
                <Image src={logo} className={style.image} alt="infinium" width="200"/>
                <section>
                <p>Encontranos en linkedIn</p>
                <a href="https://www.linkedin.com/company/infinium-analytics/" target="_blank" className={style.navbarIcon}  >
                    <FaLinkedin />
                </a>
                <a className={style.link} href="https://www.linkedin.com/company/infinium-analytics/" target="_blank">
                    https://www.linkedin.com/company/infinium-analytics/</a>
                </section>
            </div>
            <div className={style.bottom}>
                <p>copyrigth @ 2023 Infinium Analytics </p>
            </div>
        </footer>
    )
}

export default Footer;