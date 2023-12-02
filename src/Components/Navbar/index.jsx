import logo from "./../bordowhite.png";
// import logo from "./../logopurpura.png";
import style from "./style.module.css";
import Image from "next/image";

const NavBar = () => {
    return(
      
            <nav className={style.navbar}>
                <a className="navbar-brand" href="#"><Image src={logo} className={style.image} alt="infinium" width="200"/></a>
               
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#about">Nosotros</a></li>
                    <li><a href="#portfolio">Portafolio</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </nav>
    )
}

export default NavBar;