import logo from "./../logo1.png";
import style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
    return(
      
            <nav className={style.navbar}>
                <a className="navbar-brand" href="#"><Image src={logo} className={style.image} alt="infinium" width="200"/></a>
               
                <ul>
                    <li><Link href="#">Inicio</Link></li>
                    <li><Link href="#about">Nosotros</Link></li>
                    <li><Link href="#portfolio">Portafolio</Link></li>
                    <li><Link href="#contact">Contacto</Link></li>
                </ul>
            </nav>
    )
}

export default NavBar;