import logo from "./../logo1.png";
import style from "./style.module.css";
import Image from "next/image";

const NavBar = () => {
    return(
      
            <nav className={style.navbar}>
                <a href="#inicio"><Image src={logo} className={style.image} alt="infinium" width="200" priority/></a>
               
                <ul>
                    <li><a className={style.dir} href="#inicio">Inicio</a></li>
                    <li><a className={style.dir} href="#about">Nosotros</a></li>
                    <li><a className={style.dir} href="#portfolio">Portafolio</a></li>
                    <li><a className={style.dir} href="#contact">Contacto</a></li>
                </ul>
            </nav>
    )
}

export default NavBar;
