import logo from "./../logo1.png";
import style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
    return(
      
            <nav className={style.navbar}>
                <Link href="#"><Image src={logo} className={style.image} alt="infinium" width="200"/></Link>
               
                <ul>
                    <li><Link  className={style.dir} href="#">Inicio</Link></li>
                    <li><Link className={style.dir} href="#about">Nosotros</Link></li>
                    <li><Link className={style.dir} href="#portfolio">Portafolio</Link></li>
                    <li><Link className={style.dir} href="#contact">Contacto</Link></li>
                </ul>
            </nav>
    )
}

export default NavBar;